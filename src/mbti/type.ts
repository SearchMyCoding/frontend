export const enum ATTENTION_FOCUS {
  EXTRAVERTED = 'E',
  INTROVERTED = 'I',
};

export const enum PERCEPTION_FUNCTION {
  SENSING = 'S',
  INTUITION = 'N',
};

export const enum JUDGMENT_FUNCTION {
  THINKING = 'T',
  FEELING = 'F',
};

export const enum LIFESTYLE {
  JUDGING = 'J',
  PERCEIVING= 'P',
};

export type MbtiSingleType = ATTENTION_FOCUS | PERCEPTION_FUNCTION | JUDGMENT_FUNCTION | LIFESTYLE;
export type MbtiType = `${ATTENTION_FOCUS}${PERCEPTION_FUNCTION}${JUDGMENT_FUNCTION}${LIFESTYLE}`;
export type MbtiPairMapping<T extends MbtiSingleType, K extends keyof T> = K extends keyof T ? Exclude<keyof T, K> : never;