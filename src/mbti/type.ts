export const ATTENTION_FOCUS = {
  EXTRAVERTED: 'E',
  INTROVERTED: 'I',
} as const;

export const PERCEPTION_FUNCTION = {
  SENSING: 'S',
  INTUITION: 'N',
} as const;

export const JUDGMENT_FUNCTION = {
  THINKING: 'T',
  FEELING: 'F',
} as const;

export const LIFESTYLE = {
  JUDGING: 'J',
  PERCEIVING: 'P',
} as const;

export const MBTI = {
  ATTENTION_FOCUS,
  PERCEPTION_FUNCTION,
  JUDGMENT_FUNCTION,
  LIFESTYLE
} as const;

export type AttentionFocus = (typeof ATTENTION_FOCUS)[keyof typeof ATTENTION_FOCUS];
export type PerceptionFunction = (typeof PERCEPTION_FUNCTION)[keyof typeof PERCEPTION_FUNCTION];
export type JudgmentFunction = (typeof JUDGMENT_FUNCTION)[keyof typeof JUDGMENT_FUNCTION];
export type Lifestyle = (typeof LIFESTYLE)[keyof typeof LIFESTYLE];

export type MbtiSingleType =
  | AttentionFocus
  | PerceptionFunction
  | JudgmentFunction
  | Lifestyle;

export type MbtiType = `${AttentionFocus}${PerceptionFunction}${JudgmentFunction}${Lifestyle}`;

export type MbtiParentType = keyof typeof MBTI;
export type MbtiChildType<T extends MbtiParentType> = keyof typeof MBTI[T];
export type MbtiOppositeType<T extends MbtiParentType, G extends MbtiChildType<T>> = Exclude<MbtiChildType<T>, G>;
export type MbtiShortType<T extends MbtiChildType<G>, G extends MbtiParentType> = typeof MBTI[G][T];

export interface IMbtiQuestion{
  type: MbtiParentType;
  contents: string;
}

export interface IMbtiAnswer<T extends MbtiParentType, G extends MbtiChildType<T>>{
  type: G;
  contents: string;
}

export interface IMbtiTest<T extends MbtiParentType, G extends MbtiChildType<T>>{
  question: IMbtiQuestion;
  answer: [IMbtiAnswer<T, G>, IMbtiAnswer<T, MbtiOppositeType<T, G>>];
};