import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from 'react';
import { TailwindComponent } from 'tailwind-styled-components/dist/tailwind';

export type StyledDiv = TailwindComponent<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export type StyledImage = TailwindComponent<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;