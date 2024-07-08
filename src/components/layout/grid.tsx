import tw from 'tailwind-styled-components';
import { Grid } from 'src/components';

export const GridLayout: Grid = tw.div`
  grid
  grid-rows-4
  grid-cols-3
  gap-4
`;

export const TakeOrNotGridTemplate: Grid = tw.div`
  grid 
  grid-cols-2
  gap-12
  py-8
`