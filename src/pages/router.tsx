import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CoursePage, LoginPage, MainPage, MbtiPage } from "src/pages";

export const Router = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/mbti" element={<MbtiPage />} />
              <Route path="/course" element={<CoursePage />}/>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};