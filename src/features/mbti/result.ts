import { ATTENTION_FOCUS, ATTENTION_FOCUS_RESULT, JUDGMENT_FUNCTION, JUDGMENT_FUNCTION_RESULT, LIFESTYLE, LIFESTYLE_RESULT, MBTI_SINGLE_TEMPLATE_TYPE, MBTI_CODE_TYPE, PERCEPTION_FUNCTION, PERCEPTION_FUNCTION_RESULT, MBTI_RESULT } from 'src/pkg';

interface MbtiInfo {
  MbtiCode: MBTI_CODE_TYPE;
  ImageSource: string;
}

interface MbtiTest {
  get MbtiResult(): MBTI_RESULT;
  get MbtiCode(): MBTI_CODE_TYPE;
  Add(type: MBTI_SINGLE_TEMPLATE_TYPE): void;
  Reset(): void;
  MbtiInfo(): MbtiInfo;
}

export class Result implements MbtiTest{
  public static readonly Key: string = "MbtiTestResult";
  public static New(): MbtiTest{
    return new Result();
  }

  private static readonly imagePathPrefix: string = "";

  private result: MBTI_RESULT;
  private attentionFocusResult: ATTENTION_FOCUS_RESULT;
  private perceptionFunctionResult: PERCEPTION_FUNCTION_RESULT;
  private judgmentFunctionResult: JUDGMENT_FUNCTION_RESULT;
  private lifestyleResult: LIFESTYLE_RESULT;

  constructor() {
    this.Reset();

    this.result = {
      ATTENTION_FOCUS: this.attentionFocusResult,
      PERCEPTION_FUNCTION: this.perceptionFunctionResult,
      JUDGMENT_FUNCTION:  this.judgmentFunctionResult,
      LIFESTYLE: this.lifestyleResult,
    };
  }

  get MbtiResult(): MBTI_RESULT {
    return this.result;
  }

  get MbtiCode(): MBTI_CODE_TYPE{
    const { EXTRAVERTED, INTROVERTED } = this.attentionFocusResult;
    const { SENSING, INTUITION } = this.perceptionFunctionResult;
    const { THINKING, FEELING } = this.judgmentFunctionResult;
    const { JUDGING, PERCEIVING } = this.lifestyleResult;

    const unkown: boolean = (
      EXTRAVERTED === INTROVERTED
      || SENSING === INTUITION
      || THINKING === FEELING
      || JUDGING === PERCEIVING
    );

    if(unkown) {
      throw new Error('Unkown Type');
    }

    let result: string = "";
    
    result += EXTRAVERTED > INTROVERTED ? ATTENTION_FOCUS.EXTRAVERTED : ATTENTION_FOCUS.INTROVERTED
    result += SENSING > INTUITION ? PERCEPTION_FUNCTION.SENSING : PERCEPTION_FUNCTION.INTUITION;
    result += THINKING > FEELING ? JUDGMENT_FUNCTION.THINKING : JUDGMENT_FUNCTION.FEELING;
    result += JUDGING > PERCEIVING ? LIFESTYLE.JUDGING : LIFESTYLE.PERCEIVING;

    return result as MBTI_CODE_TYPE;
  }

  public Add(type: MBTI_SINGLE_TEMPLATE_TYPE) {
    switch(type) {
      case ATTENTION_FOCUS.EXTRAVERTED:
        this.attentionFocusResult.EXTRAVERTED++;
        break;
      case ATTENTION_FOCUS.INTROVERTED:
        this.attentionFocusResult.INTROVERTED++;
        break;
      case PERCEPTION_FUNCTION.SENSING:
        this.perceptionFunctionResult.SENSING++;
        break;
      case PERCEPTION_FUNCTION.INTUITION:
        this.perceptionFunctionResult.INTUITION++;
        break;
      case JUDGMENT_FUNCTION.THINKING:
        this.judgmentFunctionResult.THINKING++;
        break;
      case JUDGMENT_FUNCTION.FEELING:
        this.judgmentFunctionResult.FEELING++;
        break;
      case LIFESTYLE.JUDGING:
        this.lifestyleResult.JUDGING++;
        break;
      case LIFESTYLE.PERCEIVING:
        this.lifestyleResult.PERCEIVING++;
        break;
      default:
        // nothing
    }
  }

  public Reset(){
    this.attentionFocusResult = {
      EXTRAVERTED: 0,
      INTROVERTED: 0
    };

    this.perceptionFunctionResult = {
      SENSING: 0,
      INTUITION: 0
    };

    this.judgmentFunctionResult = {
      THINKING: 0,
      FEELING: 0
    };

    this.lifestyleResult = {
      JUDGING: 0,
      PERCEIVING: 0
    };
  }


  MbtiInfo(): MbtiInfo {
    const mbtiCode: MBTI_CODE_TYPE = this.MbtiCode;
    const imageSource: string = `${Result.imagePathPrefix}/${mbtiCode}`;

    return {
      MbtiCode: mbtiCode,
      ImageSource: imageSource
    };
  }
}