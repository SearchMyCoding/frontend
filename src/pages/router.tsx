import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CoursePage, MainPage, MbtiPage } from "src/pages";

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mbti" element={<MbtiPage />} />
          <Route path="/course" element={<CoursePage />} />
        </Routes>
    </BrowserRouter>
  );
};