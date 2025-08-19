'use strict';

require('@mediapipe/face_mesh');
var tasksVision = require('@mediapipe/tasks-vision');
var autoBind = require('auto-bind');
var three = require('three');

class MediapipeFacemeshExtension {
  constructor(jsPsych) {
    this.jsPsych = jsPsych;
    this.recordedChunks = new Array();
    this.usingNewAPI = false;
    this.onResultCallbacks = new Array();
    this.recordTracks = false;
    this.initialize = async (params) => {
      this.usingNewAPI = params?.useFaceLandmarker ?? false;
      if (this.usingNewAPI) {
        const vision = await tasksVision.FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );
        this.faceLandmarker = await tasksVision.FaceLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task"
          },
          runningMode: "VIDEO",
          // <-- WICHTIG für Video-Streams
          outputFaceBlendshapes: true,
          outputFacialTransformationMatrixes: true,
          numFaces: 1
        });
      } else {
        this.faceMesh = new FaceMesh({
          locateFile: params?.locateFile ?? function(file) {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
          }
        });
        this.faceMesh.setOptions({
          maxNumFaces: 1,
          enableFaceGeometry: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
          refineLandmarks: false
        });
        await this.faceMesh.initialize();
      }
    };
    this.on_start = () => {
      this.canvasElement?.remove();
      this.videoElement?.remove();
      this.canvasElement = document.createElement("canvas");
      this.canvasElement.width = 1280;
      this.canvasElement.height = 720;
      this.videoElement = document.createElement("video");
      this.videoElement.muted = true;
      this.mediaStream = this.jsPsych.pluginAPI.getCameraStream();
      if (!this.mediaStream) {
        console.warn(
          "The mediapipe-face-mesh extension is trying to start but the camera is not initialized."
        );
        return;
      }
      this.videoElement.srcObject = this.mediaStream;
      this.videoElement.onloadedmetadata = () => {
        this.stopAnimationFrame();
        this.animationFrameId = window.requestAnimationFrame(
          this.processFrame.bind(this)
        );
      };
      if (!this.usingNewAPI) {
        this.faceMesh.onResults(this.onMediaPipeResult.bind(this));
      }
      this.videoElement.play();
    };
    this.on_load = (params) => {
      this.recordedChunks = [];
      this.recordTracks = params?.record ?? false;
    };
    this.on_finish = () => {
      console.log("face_mesh tracked chunks: " + this.recordedChunks.length);
      this.stopAnimationFrame();
      this.recordTracks = false;
      return { face_mesh: this.recordedChunks };
    };
    autoBind(this);
  }
  static {
    this.info = {
      name: "mediapipe-face-mesh"
    };
  }
  stopAnimationFrame() {
    window.cancelAnimationFrame(this.animationFrameId);
  }
  async processFrame() {
    const ctx = this.canvasElement.getContext("2d");
    ctx.drawImage(this.videoElement, 0, 0);
    if (this.usingNewAPI) {
      const results = this.faceLandmarker.detectForVideo(this.videoElement, performance.now());
      this.onFaceLandmarkerResult(results);
    } else {
      await this.faceMesh.send({ image: this.canvasElement });
    }
    this.animationFrameId = window.requestAnimationFrame(
      this.processFrame.bind(this)
    );
  }
  addTrackingResultCallback(callback) {
    this.onResultCallbacks.push(callback);
  }
  removeTrackingResultCallback(callback) {
    this.onResultCallbacks.splice(this.onResultCallbacks.indexOf(callback), 1);
  }
  // Alte API Ergebnisse
  onMediaPipeResult(results) {
    if (results.multiFaceGeometry[0]) {
      const transformationMatrix = results.multiFaceGeometry[0].getPoseTransformMatrix().getPackedDataList();
      const rotation = new three.Euler().setFromRotationMatrix(
        new three.Matrix4().fromArray(transformationMatrix)
      );
      const translation = new three.Vector3().setFromMatrixPosition(
        new three.Matrix4().fromArray(transformationMatrix)
      );
      const result = {
        frame_id: this.animationFrameId,
        transformation: transformationMatrix,
        rotation,
        translation
      };
      if (this.recordTracks) this.recordedChunks.push(result);
      this.onResultCallbacks.forEach((cb) => cb(result));
    }
  }
  // Neue API Ergebnisse
  onFaceLandmarkerResult(results) {
    let transformationMatrix, rotation, translation, blendshapes;
    if (results.facialTransformationMatrixes?.length) {
      transformationMatrix = results.facialTransformationMatrixes[0].data;
      rotation = new three.Euler().setFromRotationMatrix(
        new three.Matrix4().fromArray(transformationMatrix)
      );
      translation = new three.Vector3().setFromMatrixPosition(
        new three.Matrix4().fromArray(transformationMatrix)
      );
    }
    if (results.faceBlendshapes?.length) {
      blendshapes = results.faceBlendshapes[0].categories.map((c) => ({
        name: c.categoryName,
        score: c.score
      }));
    }
    const result = {
      frame_id: this.animationFrameId,
      transformation: transformationMatrix,
      rotation,
      translation,
      blendshapes
    };
    if (this.recordTracks) this.recordedChunks.push(result);
    this.onResultCallbacks.forEach((cb) => cb(result));
  }
}

module.exports = MediapipeFacemeshExtension;
//# sourceMappingURL=index.cjs.map
