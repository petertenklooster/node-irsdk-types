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
