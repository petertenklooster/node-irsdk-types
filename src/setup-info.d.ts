export type TireInfo = {
    StartingPressure: string;
    LastHotPressure: string;
    LastTempsOMI: string;
    TreadRemaining: string;
};
export type TireCompoundInfo = {
    TireCompound: string;
};
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
    TransparentHalo?: number;
    WeightDist?: string;
    HeaveRate?: string;
    RollRate?: string;
    RideHeight?: string;
};
export type ChassisRearInfo = {
    FuelLevel: string;
    ToeIn?: string;
    AntiRollBar: string;
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
