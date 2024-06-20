import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CoursePage, LoginPage, MainPage, MbtiPage } from "src/pages";

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mbti" element={<MbtiPage />} />
          <Route path="/course" element={<CoursePage />}/>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
};