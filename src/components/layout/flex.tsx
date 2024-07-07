import tw from 'tailwind-styled-components';
import { Flex } from 'src/components';

export const FlexLayout: Flex = tw.div`
  flex
`;

export const FlexWithSeparateLine: Flex = tw.div`
  flex-1
  p-10
  text-black
`;

export const FlexTestTemplate: Flex = tw(FlexLayout)`
  flex-col
  justify-around
  mx-8
  my-4
`

export const FlexTestQuestionTemplate: Flex = tw.div``