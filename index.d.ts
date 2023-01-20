declare module 'node-irsdk' {
  export interface TelemetryData {
    SessionTime: number;
    SessionTick: number;
    SessionNum: number;
    SessionState: number;
    SessionUniqueID: number;
    SessionFlags: string[];
    SessionTimeRemain: number;
    SessionLapsRemain: number;
    SessionLapsRemainEx: number;
    SessionTimeTotal: number;
    SessionLapsTotal: number;
    SessionJokerLapsRemain: number;
    SessionOnJokerLap: boolean;
    SessionTimeOfDay: number;
    RadioTransmitCarIdx: number;
    RadioTransmitRadioIdx: number;
    RadioTransmitFrequencyIdx: number;
    DisplayUnits: number;
    DriverMarker: boolean;
    PushToPass: boolean;
    ManualBoost: boolean;
    ManualNoBoost: boolean;
    IsOnTrack: boolean;
    IsReplayPlaying: boolean;
    ReplayFrameNum: number;
    ReplayFrameNumEnd: number;
    IsDiskLoggingEnabled: boolean;
    IsDiskLoggingActive: boolean;
    FrameRate: number;
    CpuUsageFG: number;
    GpuUsage: number;
    ChanAvgLatency: number;
    ChanLatency: number;
    ChanQuality: number;
    ChanPartnerQuality: number;
    CpuUsageBG: number;
    ChanClockSkew: number;
    MemPageFaultSec: number;
    PlayerCarPosition: number;
    PlayerCarClassPosition: number;
    PlayerCarClass: number;
    PlayerTrackSurface: number;
    PlayerTrackSurfaceMaterial: number;
    PlayerCarIdx: number;
    PlayerCarTeamIncidentCount: number;
    PlayerCarMyIncidentCount: number;
    PlayerCarDriverIncidentCount: number;
    PlayerCarWeightPenalty: number;
    PlayerCarPowerAdjust: number;
    PlayerCarDryTireSetLimit: number;
    PlayerCarTowTime: number;
    PlayerCarInPitStall: boolean;
    PlayerCarPitSvStatus: number;
    PlayerTireCompound: number;
    PlayerFastRepairsUsed: number;
    CarIdxLap: number[];
    CarIdxLapCompleted: number[];
    CarIdxLapDistPct: number[];
    CarIdxTrackSurface: string[];
    CarIdxTrackSurfaceMaterial: string[];
    CarIdxOnPitRoad: boolean[];
    CarIdxPosition: number[];
    CarIdxClassPosition: number[];
    CarIdxClass: number[];
    CarIdxF2Time: number[];
    CarIdxEstTime: number[];
    CarIdxLastLapTime: number[];
    CarIdxBestLapTime: number[];
    CarIdxBestLapNum: number[];
    CarIdxTireCompound: number[];
    CarIdxQualTireCompound: number[];
    CarIdxQualTireCompoundLocked: boolean[];
    CarIdxFastRepairsUsed: number[];
    PaceMode: number;
    CarIdxPaceLine: number[];
    CarIdxPaceRow: number[];
    CarIdxPaceFlags: number[];
    CarIdxSessionFlags: string[];
    OnPitRoad: boolean;
    CarIdxSteer: number[];
    CarIdxRPM: number[];
    CarIdxGear: number[];
    SteeringWheelAngle: number;
    Throttle: number;
    Brake: number;
    Clutch: number;
    Gear: number;
    RPM: number;
    Lap: number;
    LapCompleted: number;
    LapDist: number;
    LapDistPct: number;
    RaceLaps: number;
    LapBestLap: number;
    LapBestLapTime: number;
    LapLastLapTime: number;
    LapCurrentLapTime: number;
    LapLasNLapSeq: number;
    LapLastNLapTime: number;
    LapBestNLapLap: number;
    LapBestNLapTime: number;
    LapDeltaToBestLap: number;
    LapDeltaToBestLap_DD: number;
    LapDeltaToBestLap_OK: boolean;
    LapDeltaToOptimalLap: number;
    LapDeltaToOptimalLap_DD: number;
    LapDeltaToOptimalLap_OK: boolean;
    LapDeltaToSessionBestLap: number;
    LapDeltaToSessionBestLap_DD: number;
    LapDeltaToSessionBestLap_OK: boolean;
    LapDeltaToSessionOptimalLap: number;
    LapDeltaToSessionOptimalLap_DD: number;
    LapDeltaToSessionOptimalLap_OK: boolean;
    LapDeltaToSessionLastlLap: number;
    LapDeltaToSessionLastlLap_DD: number;
    LapDeltaToSessionLastlLap_OK: boolean;
    Speed: number;
    Yaw: number;
    YawNorth: number;
    Pitch: number;
    Roll: number;
    EnterExitReset: number;
    TrackTemp: number;
    TrackTempCrew: number;
    AirTemp: number;
    WeatherType: number;
    Skies: number;
    AirDensity: number;
    AirPressure: number;
    WindVel: number;
    WindDir: number;
    RelativeHumidity: number;
    FogLevel: number;
    DCLapStatus: number;
    DCDriversSoFar: number;
    OkToReloadTextures: boolean;
    LoadNumTextures: boolean;
    CarLeftRight: string[];
    PitsOpen: boolean;
    VidCapEnabled: boolean;
    VidCapActive: boolean;
    PitRepairLeft: number;
    PitOptRepairLeft: number;
    PitstopActive: boolean;
    FastRepairUsed: number;
    FastRepairAvailable: number;
    LFTiresUsed: number;
    RFTiresUsed: number;
    LRTiresUsed: number;
    RRTiresUsed: number;
    LeftTireSetsUsed: number;
    RightTireSetsUsed: number;
    FrontTireSetsUsed: number;
    RearTireSetsUsed: number;
    TireSetsUsed: number;
    LFTiresAvailable: number;
    RFTiresAvailable: number;
    LRTiresAvailable: number;
    RRTiresAvailable: number;
    LeftTireSetsAvailable: number;
    RightTireSetsAvailable: number;
    FrontTireSetsAvailable: number;
    RearTireSetsAvailable: number;
    TireSetsAvailable: number;
    CamCarIdx: number;
    CamCameraNumber: number;
    CamGroupNumber: number;
    CamCameraState: number;
    IsOnTrackCar: boolean;
    IsInGarage: boolean;
    SteeringWheelPctTorque: number;
    SteeringWheelPctTorqueSign: number;
    SteeringWheelPctTorqueSignStops: number;
    SteeringWheelPctDamper: number;
    SteeringWheelAngleMax: number;
    SteeringWheelLimiter: number;
    ShiftIndicatorPct: number;
    ShiftPowerPct: number;
    ShiftGrindRPM: number;
    ThrottleRaw: number;
    BrakeRaw: number;
    HandbrakeRaw: number;
    SteeringWheelPeakForceNm: number;
    SteeringWheelMaxForceNm: number;
    SteeringWheelUseLinear: boolean;
    BrakeABSactive: boolean;
    EngineWarnings: number;
    FuelLevel: number;
    FuelLevelPct: number;
    PitSvFlags: number;
    PitSvLFP: number;
    PitSvRFP: number;
    PitSvLRP: number;
    PitSvRRP: number;
    PitSvFuel: number;
    PitSvTireCompound: number;
    CarIdxP2P_Status: boolean[];
    CarIdxP2P_Count: number[];
    ReplayPlaySpeed: number;
    ReplayPlaySlowMotion: boolean;
    ReplaySessionTime: number;
    ReplaySessionNum: number;
    TireLF_RumblePitch: number;
    TireRF_RumblePitch: number;
    TireLR_RumblePitch: number;
    TireRR_RumblePitch: number;
    SteeringWheelTorque_ST: number[];
    SteeringWheelTorque: number;
    VelocityZ_ST: number[];
    VelocityY_ST: number[];
    VelocityX_ST: number[];
    VelocityZ: number;
    VelocityY: number;
    VelocityX: number;
    YawRate_ST: number[];
    PitchRate_ST: number[];
    RollRate_ST: number[];
    YawRate: number;
    PitchRate: number;
    RollRate: number;
    VertAccel_ST: number[];
    LatAccel_ST: number[];
    LongAccel_ST: number[];
    VertAccel: number;
    LatAccel: number;
    LongAccel: number;
    dcStarter: boolean;
    dpRFTireChange: number;
    dpLFTireChange: number;
    dpRRTireChange: number;
    dpLRTireChange: number;
    dcTearOffVisor: boolean;
    dpFuelFill: number;
    dpFuelAddKg: number;
    dpFastRepair: number;
    dpLFTireColdPress: number;
    dpRFTireColdPress: number;
    dpLRTireColdPress: number;
    dpRRTireColdPress: number;
    WaterTemp: number;
    WaterLevel: number;
    FuelPress: number;
    FuelUsePerHour: number;
    OilTemp: number;
    OilPress: number;
    OilLevel: number;
    Voltage: number;
    ManifoldPress: number;
    RRcoldPressure: number;
    RRtempCL: number;
    RRtempCM: number;
    RRtempCR: number;
    RRwearL: number;
    RRwearM: number;
    RRwearR: number;
    LRcoldPressure: number;
    LRtempCL: number;
    LRtempCM: number;
    LRtempCR: number;
    LRwearL: number;
    LRwearM: number;
    LRwearR: number;
    RFcoldPressure: number;
    RFtempCL: number;
    RFtempCM: number;
    RFtempCR: number;
    RFwearL: number;
    RFwearM: number;
    RFwearR: number;
    LFcoldPressure: number;
    LFtempCL: number;
    LFtempCM: number;
    LFtempCR: number;
    LFwearL: number;
    LFwearM: number;
    LFwearR: number;
    RRshockDefl: number;
    RRshockDefl_ST: number[];
    RRshockVel: number;
    RRshockVel_ST: number[];
    LRshockDefl: number;
    LRshockDefl_ST: number[];
    LRshockVel: number;
    LRshockVel_ST: number[];
    RFshockDefl: number;
    RFshockDefl_ST: number[];
    RFshockVel: number;
    RFshockVel_ST: number[];
    LFshockDefl: number;
    LFshockDefl_ST: number[];
    LFshockVel: number;
    LFshockVel_ST: number[];
  }

  export type SessionData = {
    WeekendInfo: WeekendInfo;
    SessionInfo: SessionList;
    CameraInfo: CameraInfo;
    RadioInfo: RadioInfo;
    DriverInfo: DriverInfo;
    SplitTimeInfo: SplitTimeInfo;
    CarSetup: CarSetupInfo;
  };

  export interface Camera {
    CameraNum: number;
    CameraName: string;
  }

  export interface CameraGroup {
    GroupNum: number;
    GroupName: string;
    IsScenic?: boolean;
    Cameras: Camera[];
  }

  export interface CameraInfo {
    Groups: CameraGroup[];
  }

  export type TireInfo = {
    StartingPressure: string;
    LastHotPressure: string;
    LastTempsOMI: string;
    TreadRemaining: string;
  };

  export type TireCompoundInfo = {
    TireCompound: string;
  };

  // Is this for everything, or just for the W12?
  export type AeroPackageInfo = {
    DownforceTrim: string;
    FrontFlapOffset: string;
    RearWingGurney: string;
  };

  export type AeroCalculatorInfo = {
    FrontRhAtSpeed: string;
    RearRhAtSpeed: string;
    AeroBalance: string;
    DownforceToDrag: string;
  };

  export type TiresAeroInfo = {
    TireCompound: TireCompoundInfo;
    LeftFrontTire: TireInfo;
    LeftRearTire: TireInfo;
    RightFrontTire: TireInfo;
    RightRearTire: TireInfo;
    AeroPackage: AeroPackageInfo;
    AeroCalculator: AeroCalculatorInfo;
  };

  export type ChassisCornerInfo = {
    CornerWeight: string;
    Camber: string;
    ToeIn?: string;
    ColdPressure?: string;
    LastHotPressure?: string;
    LastTempsOMI?: string;
    TreadRemaining?: string;
    RideHeight?: string;
    SpringPerchOffset?: string;
    BumpStiffness?: string;
    ReboundStiffness?: string;
  };

  export type ChassisFrontInfo = {
    ToeIn?: string;
    CrossWeight?: string;
    AntiRollBar?: string;
    // W12 stuff
    TransparentHalo?: number; // bool
    WeightDist?: string;
    HeaveRate?: string;
    RollRate?: string;
    RideHeight?: string;
  };

  export type ChassisRearInfo = {
    FuelLevel: string;
    ToeIn?: string;
    AntiRollBar: string;
    // W12 stuff
    HeaveRate?: string;
    RollRate?: string;
    RideHeight?: string;
  };

  export type ChassisInfo = {
    Front: ChassisFrontInfo;
    LeftFront: ChassisCornerInfo;
    LeftRear: ChassisCornerInfo;
    RightFront: ChassisCornerInfo;
    RightRear: ChassisCornerInfo;
    Rear: ChassisRearInfo;
  };

  export type DifferentialInfo = {
    Preload: string;
    Entry: string;
    Middle: string;
    HighSpeed: string;
  };

  export type PowerUnitConfig = {
    MguKDeployMode: string;
    EngineBraking: string;
  };

  export type BrakeSystemConfig = {
    BaseBrakeBias: string;
    DynamicRamping: string;
    BrakeMigration: string;
    TotalBrakeBias: string;
    BrakeMagicModifier: number;
  };

  export type DriveBrakeInfo = {
    Differential: DifferentialInfo;
    PowerUnitConfig: PowerUnitConfig;
    BrakeSystemConfig: BrakeSystemConfig;
  };

  export type CarSetupInfo = {
    UpdateCount: number;
    Suspension?: ChassisInfo;
    TiresAero?: TiresAeroInfo;
    Chassis?: ChassisInfo;
    DriveBrake?: DriveBrakeInfo;
  };

  export type Sector = {
    SectorNum: number;
    /** 0 - 1 range; 50% is 0.5 */
    SectorStartPct: number;
  };

  export type SplitTimeInfo = {
    Sectors: Sector[];
  };

  export type WeekendOptions = {
    NumStarters: number;
    StartingGrid: string;
    QualifyScoring: string;
    CourseCautions: string;
    StandingStart: number; // maybe bool?
    ShortParadeLap: number; // maybe bool?
    Restarts: string;
    WeatherType: string; // is there an enum for this?
    Skies: string; // is there an enum for this?
    WindDirection: string; // is there an enum for this?
    WindSpeed: string;
    WeatherTemp: string;
    RelativeHumidity: string;
    FogLevel: string;
    TimeOfDay: string;
    Date: string;
    EarthRotationSpeedupFactor: number;
    Unofficial: number; // bool?
    CommercialMode: string; // is there an enum for this?
    NightMode: string;
    IsFixedSetup: number; // bool?
    StrictLapsChecking: string;
    HasOpenRegistration: number; // bool?
    HardcoreLevel: number;
    NumJokerLaps: number;
    IncidentLimit: string;
    FastRepairsLimit: number;
    GreenWhiteCheckeredLimit: number;
  };

  export type TelemetryOptions = {
    TelemetryDiskFile: string;
  };

  export type WeekendInfo = {
    TrackName: string;
    TrackID: number;
    TrackLength: string;
    TrackDisplayName: string;
    TrackDisplayShortName: string;
    TrackConfigName: string | null;
    TrackCity: string;
    TrackCountry: string;
    TrackAltitude: string;
    TrackLatitude: string;
    TrackLongitude: string;
    TrackNorthOffset: string;
    TrackNumTurns: number;
    TrackPitSpeedLimit: string;
    TrackType: string;
    TrackDirection: string;
    TrackWeatherType: string;
    TrackSkies: string;
    TrackSurfaceTemp: string;
    TrackAirTemp: string;
    TrackAirPressure: string;
    TrackWindVel: string;
    TrackWindDir: string;
    TrackRelativeHumidity: string;
    TrackFogLevel: string;
    TrackCleanup: number;
    TrackDynamicTrack: number;
    TrackVersion: string;
    SeriesID: number;
    SeasonID: number;
    SessionID: number;
    SubSessionID: number;
    LeagueID: number;
    Official: number; // bool?
    RaceWeek: number;
    EventType: string; // enum?
    Category: string; // enum?
    SimMode: string;
    TeamRacing: number;
    MinDrivers: number;
    MaxDrivers: number;
    DCRuleSet: string;
    QualifierMustStartRace: number; // bool?
    NumCarClasses: number;
    NumCarTypes: number;
    HeatRacing: number;
    BuildType: string;
    BuildTarget: string;
    BuildVersion: string;
    WeekendOptions: WeekendOptions;
    TelemetryOptions: TelemetryOptions;
  };

  export type SessionResultsPosition = {
    Position: number;
    ClassPosition: number;
    CarIdx: number;
    Lap: number;
    Time: number;
    FastestLap: number;
    FastestTime: number;
    LastTime: number;
    LapsLed: number;
    LapsComplete: number;
    JokerLapsComplete: number;
    LapsDriven: number;
    Incidents: number;
    ReasonOutId: number;
    ReasonOutStr: string;
  };

  export type SessionResultsFastestLap = {
    CarIdx: number;
    FastestLap: number;
    FastestTime: number;
  };

  export type SessionInfo = {
    SessionNum: number;
    SessionLaps: string;
    SessionTime: string;
    SessionNumLapsToAvg: number;
    SessionType: string;
    SessionTrackRubberState: string;
    SessionName: string;
    SessionSubType: string | null;
    SessionSkipped: number;
    SessionRunGroupsUsed: number;
    ResultsPositions: SessionResultsPosition[];
    ResultsFastestLap: SessionResultsFastestLap[];
    ResultsAverageLapTime: number;
    ResultsNumCautionFlags: number;
    ResultsNumCautionLaps: number;
    ResultsNumLeadChanges: number;
    ResultsLapsComplete: number;
    ResultsOfficial: number; // bool?
  };

  export type SessionList = {
    Sessions: SessionInfo[];
  };

  export type RadioFrequency = {
    FrequencyNum: number;
    FrequencyName: string;
    Priority: number;
    CarIdx: number;
    EntryIdx: number;
    ClubID: number;
    CanScan: number; // bool?
    CanSquawk: number; // bool?
    Muted: number; // bool?
    IsMutable: number; // bool?
    IsDeletable: number; // bool?
  };

  export type Radio = {
    RadioNum: number;
    HopCount: number;
    NumFrequencies: number;
    TunedToFrequencyNum: number;
    ScanningIsOn: number; // bool?
    Frequencies: RadioFrequency[];
  };

  export type RadioInfo = {
    SelectedRadioNum: number;
    Radios: Radio[];
  };

  export type Driver = {
    CarIdx: number;
    UserName: string;
    AbbrevName: string | null;
    Initials: string | null;
    UserID: number;
    TeamID: number;
    TeamName: string;
    CarNumber: string;
    CarNumberRaw: number;
    CarPath: string;
    CarClassID: number;
    CarID: number;
    CarIsPaceCar: number; // bool?
    CarIsAI: number; // bool?
    CarScreenName: string;
    CarScreenNameShort: string;
    CarClassShortName: string;
    CarClassRelSpeed: number;
    CarClassLicenseLevel: number;
    CarClassMaxFuelPct: string;
    CarClassWeightPenalty: string;
    CarClassPowerAdjust: string;
    CarClassDryTireSetLimit: string;
    CarClassColor: number;
    CarClassEstLapTime: number;
    IRating: number;
    LicLevel: number;
    LicSubLevel: number;
    LicString: string;
    LicColor: number;
    IsSpectator: number;
    CarDesignStr: string;
    HelmetDesignStr: string;
    SuitDesignStr: string;
    CarNumberDesignStr: string;
    CarSponsor_1: number;
    CarSponsor_2: number;
    CurDriverIncidentCount: number;
    TeamIncidentCount: number;
  };

  export type DriverInfo = {
    DriverCarIdx: number;
    DriverUserID: number;
    PaceCarIdx: number;
    DriverHeadPosX: number;
    DriverHeadPosY: number;
    DriverHeadPosZ: number;
    DriverCarIdleRPM: number;
    DriverCarRedLine: number;
    DriverCarEngCylinderCount: number;
    DriverCarFuelKgPerLtr: number;
    DriverCarFuelMaxLtr: number;
    DriverCarMaxFuelPct: number;
    DriverCarGearNumForward: number;
    DriverCarGearNeutral: number;
    DriverCarGearReverse: number;
    DriverCarSLFirstRPM: number;
    DriverCarSLShiftRPM: number;
    DriverCarSLLastRPM: number;
    DriverCarSLBlinkRPM: number;
    DriverCarVersion: string;
    DriverPitTrkPct: number;
    DriverCarEstLapTime: number;
    DriverSetupName: string;
    DriverSetupIsModified: number;
    DriverSetupLoadTypeName: string;
    DriverSetupPassedTech: number;
    DriverIncidentCount: number;
    Drivers: Driver[];
  };

  export enum SessionState {
    Invalid = 0,
    GetInCar,
    Warmup,
    ParadeLaps,
    Racing,
    Checkered,
    CoolDown,
  }

  export enum GlobalFlags {
    // Global
    Checkered = 0x00000001,
    White = 0x00000002,
    Green = 0x00000004,
    Yellow = 0x00000008,
    Red = 0x00000010,
    Blue = 0x00000020,
    Debris = 0x00000040,
    Crossed = 0x00000080,
    YellowWaving = 0x00000100,
    OneLapToGreen = 0x00000200,
    GreenHeld = 0x00000400,
    TenToGo = 0x00000800,
    FiveToGo = 0x00001000,
    RandomWaving = 0x00002000,
    Caution = 0x00004000,
    CautionWaving = 0x00008000,

    // Drivers black flags
    Black = 0x00010000,
    Disqualify = 0x00020000,
    Servicible = 0x00040000,
    Furled = 0x00080000,
    Repair = 0x00100000,

    // Start lights
    StartHidden = 0x10000000,
    StartReady = 0x20000000,
    StartSet = 0x40000000,
    StartGo = 0x80000000,
  }

  export enum PitSvFlags {
    LFTireChange = 0x0001,
    RFTireChange = 0x0002,
    LRTireChange = 0x0004,
    RRTireChange = 0x0008,
    // Non-tires
    FuelFill = 0x0010,
    WindshieldTearoff = 0x0020,
    FastRepair = 0x0040,
  }

  export enum PitSvStatus {
    // Status
    None = 0,
    InProgress,
    Complete,

    // Errors
    TooFarLeft = 100,
    TooFarRight,
    TooFarForward,
    TooFarBack,
    BadAngle,
    CantFixThat,
  }

  export enum PaceMode {
    SingleFileStart = 0,
    DoubleFileStart,
    SingleFileRestart,
    DoubleFileRestart,
    NotPacing,
  }

  export enum PaceFlags {
    EndOfLine = 0x01,
    FreePass = 0x02,
    WavedAround = 0x04,
  }

  export enum CarLeftRight {
    Off,
    /** No cars around us */
    Clear,
    /** Car to our left */
    CarLeft,
    /** Car to our right */
    CarRight,
    /** Cars on both sides  */
    CarLeftRight,
    /** 2 cars to our left */
    Cars2Left,
    /** 2 cars to our right */
    Cars2Right,
  }

  export enum TrackLocation {
    NotInWorld = -1,
    OffTrack,
    InPitStall,
    ApproachingPits,
    OnTrack,
  }

  // Enums
  export type VarTypes = {
    0: string;
    1: boolean;
    2: number;
    3: number;
    4: number;
    5: number;
  };

  export enum BroadcastMessages {
    /** Switch the camera position. */
    CameraSwitchPos = 0,
    /** Switch the driver number to follow.  */
    CameraSwitchNum,
    /** Change the camera state. */
    CameraSetState,
    /** Change the play speed of a replay. */
    ReplaySetPlaySpeed,
    /** Jump to a different part of the replay. */
    ReplaySetPlayPosition,
    /** Enter replay search mode. */
    ReplaySearch,
    /** Change the replay state.  */
    ReplaySetState,
    /** Trigger a texture reload. */
    ReloadTextures,
    /** Broadcast a chat command. */
    ChatCommand,
    /** Broadcast a pit command. */
    PitCommand,
    /** Broadcast a telemetry command. */
    TelemCommand,
    /** Broadcast a force feedback command. */
    FFBCommand,
    /** Trigger searching to a replay time. */
    ReplaySearchSessionTime,
    /** Trigger video capture. */
    VideoCapture,
    /** Unused. */
    Last,
  }

  export enum CameraState {
    /** the camera tool can only be activated if viewing the session screen (out of car) */
    irsdk_IsSessionScreen = 0x0001,
    /** the scenic camera is active (no focus car) */
    irsdk_IsScenicActive = 0x0002,
    /** CAN be changed with a broadcast message */
    irsdk_CamToolActive = 0x0004,
    /** CAN be changed with a broadcast message */
    irsdk_UIHidden = 0x0008,
    /** CAN be changed with a broadcast message */
    irsdk_UseAutoShotSelection = 0x0010,
    /** CAN be changed with a broadcast message */
    irsdk_UseTemporaryEdits = 0x0020,
    /** CAN be changed with a broadcast message */
    irsdk_UseKeyAcceleration = 0x0040,
    /** CAN be changed with a broadcast message */
    irsdk_UseKey10xAcceleration = 0x0080,
    /** CAN be changed with a broadcast message */
    irsdk_UseMouseAimMode = 0x0100,
  }

  export enum ChatCommand {
    /** Number from 1-15, representing the chat macros.  */
    Macro = 0,
    /** Open up new chat window. */
    BeginChat,
    /** Reply to last private chat. */
    Reply,
    /** Close chat. */
    Cancel,
  }

  /** Only works when the driver is in the car! */
  export enum PitCommand {
    /** Clear all pit checkboxes */
    Clear = 0,
    /** Clean the winshield, using one tear off */
    WS,
    /** Add fuel, optionally specify the amount to add in liters or pass '0' to use existing amount */
    Fuel,
    /** Change the left front tire, optionally specifying the pressure in KPa or pass '0' to use existing pressure */
    LF,
    /** right front */
    RF,
    /** left rear */
    LR,
    /** right rear */
    RR,
    /** Clear tire pit checkboxes */
    ClearTires,
    /** Request a fast repair */
    FR,
    /** Uncheck Clean the windshield checkbox */
    ClearWS,
    /** Uncheck request a fast repair */
    ClearFR,
    /** Uncheck add fuel */
    ClearFuel,
  }

  export enum TelemetryCommand {
    /** Turn telemetry recording off */
    Stop = 0,
    /** Turn telemetry recording on */
    Start,
    /** Write current file to disk and start a new one */
    Restart,
  }

  export enum ReplayStateCommand {
    /** clear any data in the replay tape */
    EraseTape = 0,
    /** unused place holder */
    Last,
  }

  export enum ReloadTexturesCommand {
    /** reload all textures */
    All = 0,
    /** reload only textures for the specific car index */
    CarIndex,
  }

  export enum ReplaySearchCommand {
    /** Start of session */
    ToStart = 0,
    /** End of session */
    ToEnd,
    /** Previous session */
    PrevSession,
    /** Next session */
    NextSession,
    /** Previous lap */
    PrevLap,
    /** Next lap */
    NextLap,
    /** Previous frame */
    PrevFrame,
    /** Next frame */
    NextFrame,
    /** Previous incident */
    PrevIncident,
    /** Next incident */
    NextIncident,
    /** Unused */
    Last,
  }

  export enum ReplayPositionCommand {
    /** Beginning of the replay */
    Begin = 0,
    /** Current position in the replay */
    Current,
    /** End of the replay */
    End,
    /** Unused */
    Last,
  }

  export enum FFBCommand {
    /** Set the maximum force when mapping steering torque force to direct input units (float in Nm) */
    MaxForce = 0,
    /** Unused */
    Last,
  }

  /**
   * Used with BroadcastMessages.CameraSwitchPos and BroadcastMessages.CameraSwitchNum.
   * Pass these in for the first parameter to select the 'focus at' types in the camera system.
   * @todo: Not sure this will work with TS like it does in C++ :D
   */
  export enum CameraFocusCommand {
    FocusAtIncident = -3,
    FocusAtLeader = -2,
    FocusAtExiting = -1,
    /** FocusAtDriver + car number... */
    FocusAtDriver = 0,
  }

  export enum VideoCaptureCommand {
    /** save a screenshot to disk */
    TriggerScreenShot = 0,
    /** start capturing video */
    StartVideoCapture,
    /** stop capturing video */
    EndVideoCapture,
    /** toggle video capture on/off */
    ToggleVideoCapture,
    /** show video timer in upper left corner of display */
    ShowVideoTimer,
    /** hide video timer */
    HideVideoTimer,
  }
}
