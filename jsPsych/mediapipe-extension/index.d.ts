import { JsPsychExtension, JsPsychExtensionInfo, JsPsych } from 'jspsych';
import { Euler, Vector3 } from 'three';

interface IFaceTrackingResult {
    frame_id: number;
    transformation?: number[];
    rotation?: Euler;
    translation?: Vector3;
    blendshapes?: Array<{
        name: string;
        score: number;
    }>;
}
declare class MediapipeFacemeshExtension implements JsPsychExtension {
    private jsPsych;
    static info: JsPsychExtensionInfo;
    private recordedChunks;
    private animationFrameId;
    mediaStream: MediaStream;
    private videoElement;
    private canvasElement;
    private faceMesh;
    private faceLandmarker;
    private usingNewAPI;
    private onResultCallbacks;
    private recordTracks;
    constructor(jsPsych: JsPsych);
    initialize: (params: any) => Promise<void>;
    on_start: () => void;
    on_load: (params: any) => void;
    on_finish: () => {
        face_mesh: IFaceTrackingResult[];
    };
    private stopAnimationFrame;
    private processFrame;
    addTrackingResultCallback(callback: (ITrackingResult: any) => void): void;
    removeTrackingResultCallback(callback: (ITrackingResult: any) => void): void;
    private onMediaPipeResult;
    private onFaceLandmarkerResult;
}

export { MediapipeFacemeshExtension as default };
