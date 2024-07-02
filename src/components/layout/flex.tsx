import { DetailedHTMLProps, HTMLAttributes } from 'react';
import tw from 'tailwind-styled-components';
import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';

export type Flex = TailwindComponent<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export const FlexLayout: Flex = tw.div`
  flex
`;

export const FlexWithSeparateLine: Flex = tw.div`
  flex-1
  p-10
  text-black
`;