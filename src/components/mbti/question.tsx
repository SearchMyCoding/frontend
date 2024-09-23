import { FlexColLayout, FlexTestQuestionLayout, ImageLayout, TextLayout } from "src/components";

export interface QuestionProps {
  questionImage: string;
  questionContext: string;
}

export function QuestionTemplate({ questionImage, questionContext }:QuestionProps):JSX.Element {
  return (
    <FlexColLayout>
      <FlexTestQuestionLayout>
        <ImageLayout src={questionImage} />
        <TextLayout>
          <p>{questionContext}</p>
        </TextLayout>
      </FlexTestQuestionLayout>
    </FlexColLayout>
  );
};