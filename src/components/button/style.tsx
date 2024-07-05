import { TwBtn } from "src/components";
import tw from 'tailwind-styled-components';

/**
 * Button with white bold text
 */
export const WbtBtn: TwBtn = tw.button`
  text-white
  font-bold
`;

/**
 * Rounded Gray Button
 */
export const RGBtn: TwBtn = tw(WbtBtn)`
  bg-gray-500
  hover:bg-gray-700
  py-4
  px-6
  rounded
`;
