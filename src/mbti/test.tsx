import { createContext } from 'react';
import { MbtiChildType, MbtiOppositeType, MbtiParentType } from 'src/mbti';

export interface IMbtiQuestion{
  type: MbtiParentType;
  contents: string;
}

export interface IMbtiAnswer<T extends MbtiParentType, G extends MbtiChildType<T>>{
  type: G;
  contents: string;
}

export interface IMbtiTest<T extends MbtiParentType, G extends MbtiChildType<T>>{
  question: IMbtiQuestion;
  answer: [IMbtiAnswer<T, G>, IMbtiAnswer<T, MbtiOppositeType<T, G>>];
};

const MbtiTest: IMbtiQuestion[] = [];

export const MbtiTestContext = createContext(MbtiTest);