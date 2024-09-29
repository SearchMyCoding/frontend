import { Route, Routes } from "react-router-dom";
import { CoursePage, LoginPage, MainPage, TestPage } from "src/pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mbti" element={<TestPage />} />
      <Route path="/course" element={<CoursePage />}/>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};