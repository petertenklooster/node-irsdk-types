export declare enum SessionState {
  Invalid = 0,
  GetInCar = 1,
  Warmup = 2,
  ParadeLaps = 3,
  Racing = 4,
  Checkered = 5,
  CoolDown = 6,
}
export declare enum GlobalFlags {
  Checkered = 1,
  White = 2,
  Green = 4,
  Yellow = 8,
  Red = 16,
  Blue = 32,
  Debris = 64,
  Crossed = 128,
  YellowWaving = 256,
  OneLapToGreen = 512,
  GreenHeld = 1024,
  TenToGo = 2048,
  FiveToGo = 4096,
  RandomWaving = 8192,
  Caution = 16384,
  CautionWaving = 32768,
  Black = 65536,
  Disqualify = 131072,
  Servicible = 262144,
  Furled = 524288,
  Repair = 1048576,
  StartHidden = 268435456,
  StartReady = 536870912,
  StartSet = 1073741824,
  StartGo = 2147483648,
}
export declare enum PitSvFlags {
  LFTireChange = 1,
  RFTireChange = 2,
  LRTireChange = 4,
  RRTireChange = 8,
  FuelFill = 16,
  WindshieldTearoff = 32,
  FastRepair = 64,
}
export declare enum PitSvStatus {
  None = 0,
  InProgress = 1,
  Complete = 2,
  TooFarLeft = 100,
  TooFarRight = 101,
  TooFarForward = 102,
  TooFarBack = 103,
  BadAngle = 104,
  CantFixThat = 105,
}
export declare enum PaceMode {
  SingleFileStart = 0,
  DoubleFileStart = 1,
  SingleFileRestart = 2,
  DoubleFileRestart = 3,
  NotPacing = 4,
}
export declare enum PaceFlags {
  EndOfLine = 1,
  FreePass = 2,
  WavedAround = 4,
}
export declare enum CarLeftRight {
  Off = 0,
  /** No cars around us */
  Clear = 1,
  /** Car to our left */
  CarLeft = 2,
  /** Car to our right */
  CarRight = 3,
  /** Cars on both sides  */
  CarLeftRight = 4,
  /** 2 cars to our left */
  Cars2Left = 5,
  /** 2 cars to our right */
  Cars2Right = 6,
}
export declare enum TrackLocation {
  NotInWorld = -1,
  OffTrack = 0,
  InPitStall = 1,
  ApproachingPits = 2,
  OnTrack = 3,
}
export type VarTypes = {
  0: string;
  1: boolean;
  2: number;
  3: number;
  4: number;
  5: number;
};
export declare enum BroadcastMessages {
  /** Switch the camera position. */
  CameraSwitchPos = 0,
  /** Switch the driver number to follow.  */
  CameraSwitchNum = 1,
  /** Change the camera state. */
  CameraSetState = 2,
  /** Change the play speed of a replay. */
  ReplaySetPlaySpeed = 3,
  /** Jump to a different part of the replay. */
  ReplaySetPlayPosition = 4,
  /** Enter replay search mode. */
  ReplaySearch = 5,
  /** Change the replay state.  */
  ReplaySetState = 6,
  /** Trigger a texture reload. */
  ReloadTextures = 7,
  /** Broadcast a chat command. */
  ChatCommand = 8,
  /** Broadcast a pit command. */
  PitCommand = 9,
  /** Broadcast a telemetry command. */
  TelemCommand = 10,
  /** Broadcast a force feedback command. */
  FFBCommand = 11,
  /** Trigger searching to a replay time. */
  ReplaySearchSessionTime = 12,
  /** Trigger video capture. */
  VideoCapture = 13,
  /** Unused. */
  Last = 14,
}
export declare enum CameraState {
  /** the camera tool can only be activated if viewing the session screen (out of car) */
  irsdk_IsSessionScreen = 1,
  /** the scenic camera is active (no focus car) */
  irsdk_IsScenicActive = 2,
  /** CAN be changed with a broadcast message */
  irsdk_CamToolActive = 4,
  /** CAN be changed with a broadcast message */
  irsdk_UIHidden = 8,
  /** CAN be changed with a broadcast message */
  irsdk_UseAutoShotSelection = 16,
  /** CAN be changed with a broadcast message */
  irsdk_UseTemporaryEdits = 32,
  /** CAN be changed with a broadcast message */
  irsdk_UseKeyAcceleration = 64,
  /** CAN be changed with a broadcast message */
  irsdk_UseKey10xAcceleration = 128,
  /** CAN be changed with a broadcast message */
  irsdk_UseMouseAimMode = 256,
}
export declare enum ChatCommand {
  /** Number from 1-15, representing the chat macros.  */
  Macro = 0,
  /** Open up new chat window. */
  BeginChat = 1,
  /** Reply to last private chat. */
  Reply = 2,
  /** Close chat. */
  Cancel = 3,
}
/** Only works when the driver is in the car! */
export declare enum PitCommand {
  /** Clear all pit checkboxes */
  Clear = 0,
  /** Clean the winshield, using one tear off */
  WS = 1,
  /** Add fuel, optionally specify the amount to add in liters or pass '0' to use existing amount */
  Fuel = 2,
  /** Change the left front tire, optionally specifying the pressure in KPa or pass '0' to use existing pressure */
  LF = 3,
  /** right front */
  RF = 4,
  /** left rear */
  LR = 5,
  /** right rear */
  RR = 6,
  /** Clear tire pit checkboxes */
  ClearTires = 7,
  /** Request a fast repair */
  FR = 8,
  /** Uncheck Clean the windshield checkbox */
  ClearWS = 9,
  /** Uncheck request a fast repair */
  ClearFR = 10,
  /** Uncheck add fuel */
  ClearFuel = 11,
}
export declare enum TelemetryCommand {
  /** Turn telemetry recording off */
  Stop = 0,
  /** Turn telemetry recording on */
  Start = 1,
  /** Write current file to disk and start a new one */
  Restart = 2,
}
export declare enum ReplayStateCommand {
  /** clear any data in the replay tape */
  EraseTape = 0,
  /** unused place holder */
  Last = 1,
}
export declare enum ReloadTexturesCommand {
  /** reload all textures */
  All = 0,
  /** reload only textures for the specific car index */
  CarIndex = 1,
}
export declare enum ReplaySearchCommand {
  /** Start of session */
  ToStart = 0,
  /** End of session */
  ToEnd = 1,
  /** Previous session */
  PrevSession = 2,
  /** Next session */
  NextSession = 3,
  /** Previous lap */
  PrevLap = 4,
  /** Next lap */
  NextLap = 5,
  /** Previous frame */
  PrevFrame = 6,
  /** Next frame */
  NextFrame = 7,
  /** Previous incident */
  PrevIncident = 8,
  /** Next incident */
  NextIncident = 9,
  /** Unused */
  Last = 10,
}
export declare enum ReplayPositionCommand {
  /** Beginning of the replay */
  Begin = 0,
  /** Current position in the replay */
  Current = 1,
  /** End of the replay */
  End = 2,
  /** Unused */
  Last = 3,
}
export declare enum FFBCommand {
  /** Set the maximum force when mapping steering torque force to direct input units (float in Nm) */
  MaxForce = 0,
  /** Unused */
  Last = 1,
}
/**
 * Used with BroadcastMessages.CameraSwitchPos and BroadcastMessages.CameraSwitchNum.
 * Pass these in for the first parameter to select the 'focus at' types in the camera system.
 * @todo: Not sure this will work with TS like it does in C++ :D
 */
export declare enum CameraFocusCommand {
  FocusAtIncident = -3,
  FocusAtLeader = -2,
  FocusAtExiting = -1,
  /** FocusAtDriver + car number... */
  FocusAtDriver = 0,
}
export declare enum VideoCaptureCommand {
  /** save a screenshot to disk */
  TriggerScreenShot = 0,
  /** start capturing video */
  StartVideoCapture = 1,
  /** stop capturing video */
  EndVideoCapture = 2,
  /** toggle video capture on/off */
  ToggleVideoCapture = 3,
  /** show video timer in upper left corner of display */
  ShowVideoTimer = 4,
  /** hide video timer */
  HideVideoTimer = 5,
}
