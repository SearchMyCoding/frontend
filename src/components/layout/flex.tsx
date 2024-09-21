import tw from 'tailwind-styled-components';
import { StyledDiv } from 'src/components';

export const FlexLayout: StyledDiv = tw.div`
  flex
`;

export const FlexColLayout: StyledDiv = tw(FlexLayout)`
  flex-col
`;

export const FlexWithSeparateLine: StyledDiv = tw.div`
  flex-1
  p-10
  text-black
`;

export const FlexTestLayout: StyledDiv = tw(FlexColLayout)`
  justify-around
  mx-8
  my-4
`

export const FlexTestQuestionLayout: StyledDiv = tw(FlexColLayout)`
  justify-center
  mx-auto
  h-full
  w-7/12
  rounded-lg
  shadow-xl
  border-black
  border-2
`;
