import tw from 'tailwind-styled-components';
import { StyledDiv } from 'src/components';

export const GridLayout: StyledDiv = tw.div`
  grid
  grid-rows-4
  grid-cols-3
  gap-4
`;

export const TakeOrNotGridLayout: StyledDiv = tw.div`
  grid 
  grid-cols-2
  gap-12
  py-8
`;