export type Sector = {
  SectorNum: number;
  /** 0 - 1 range; 50% is 0.5 */
  SectorStartPct: number;
};

export type SplitTimeInfo = {
  Sectors: Sector[];
};
