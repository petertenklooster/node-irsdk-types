export type RadioFrequency = {
    FrequencyNum: number;
    FrequencyName: string;
    Priority: number;
    CarIdx: number;
    EntryIdx: number;
    ClubID: number;
    CanScan: number;
    CanSquawk: number;
    Muted: number;
    IsMutable: number;
    IsDeletable: number;
};
export type Radio = {
    RadioNum: number;
    HopCount: number;
    NumFrequencies: number;
    TunedToFrequencyNum: number;
    ScanningIsOn: number;
    Frequencies: RadioFrequency[];
};
export type RadioInfo = {
    SelectedRadioNum: number;
    Radios: Radio[];
};
