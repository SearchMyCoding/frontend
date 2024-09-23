import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MbtiTestState } from 'src/features/mbti';
import { FlexTestLayout, QuestionTemplate, TwoChoiceTemplate } from "src/components";

export function MbitTestTemplate(): JSX.Element{
  const [test, setTest] = useRecoilState(MbtiTestState);
  const { testImage, question, questionType, choices } = test.Current;
  const questionTitle: string = `Test of ${questionType}`;

  useEffect(() => {
    const fetchData = async () => {
      if (test.Length > 0) {
        test.Next();
      }

      setTest(test);
    };

    fetchData();
  }, [setTest]);

  return (
    <FlexTestLayout title={questionTitle} typeof={questionType}>
      <QuestionTemplate questionImage={testImage} questionContext={question}></QuestionTemplate>
      <TwoChoiceTemplate choices={choices} />
    </FlexTestLayout>
  )  
}