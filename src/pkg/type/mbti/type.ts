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

export const UNKOWN = {
  UNKOWN: "UNKOWN"
} as const;

export const RESULT = {
  ATTENTION_FOCUS: ATTENTION_FOCUS,
  PERCEPTION_FUNCTION: PERCEPTION_FUNCTION,
  JUDGMENT_FUNCTION: JUDGMENT_FUNCTION,
  LIFESTYLE: LIFESTYLE,
} as const;


export const QUESTION_TYPE_LIST = ['ATTENTION_FOCUS', 'PERCEPTION_FUNCTION', 'JUDGMENT_FUNCTION', 'LIFESTYLE'] as const;

export type ATTENTION_FOCUS_TYPE = (typeof ATTENTION_FOCUS)[keyof typeof ATTENTION_FOCUS];
export type PERCEPTION_FUNCTION_TYPE = (typeof PERCEPTION_FUNCTION)[keyof typeof PERCEPTION_FUNCTION];
export type JUDGMENT_FUNCTION_TYPE = (typeof JUDGMENT_FUNCTION)[keyof typeof JUDGMENT_FUNCTION];
export type LIFESTYLE_TYPE = (typeof LIFESTYLE)[keyof typeof LIFESTYLE];
export type UNKOWN_TYPE = (typeof UNKOWN)[keyof typeof UNKOWN];

export type MBTI_SINGLE_TEMPLATE_TYPE = UNKOWN_TYPE
  | ATTENTION_FOCUS_TYPE
  | PERCEPTION_FUNCTION_TYPE
  | JUDGMENT_FUNCTION_TYPE
  | LIFESTYLE_TYPE;


export type MBTI_CODE_TYPE = `${ATTENTION_FOCUS_TYPE}${PERCEPTION_FUNCTION_TYPE}${JUDGMENT_FUNCTION_TYPE}${LIFESTYLE_TYPE}`;
export type Test = typeof ATTENTION_FOCUS | typeof PERCEPTION_FUNCTION | typeof JUDGMENT_FUNCTION | typeof LIFESTYLE;