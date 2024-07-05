import { Image, SLbtn } from "src/components";

export function MainPage(): JSX.Element {
  return (
    <div className="flex flex-col text-center items-center justify-center align-middle">
      <h1 className="text-2xl font-bold py-2 my-3">MBTI 테스트로 알아보는 개발자 유형</h1>
      <Image imageSrc="/confusedface.jpg" className="object-fill border-2 border-black h-72 w-72 rounded-3xl my-3"/>
      <SLbtn link="/mbti" buttonName="MBTI 검사하기"  />
    </div>
  );
}
