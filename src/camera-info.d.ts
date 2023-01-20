export type Camera = {
    CameraNum: number;
    CameraName: string;
};
export type CameraGroup = {
    GroupNum: number;
    GroupName: string;
    IsScenic?: boolean;
    Cameras: Camera[];
};
export type CameraInfo = {
    Groups: CameraGroup[];
};
