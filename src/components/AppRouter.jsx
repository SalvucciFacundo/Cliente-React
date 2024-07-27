import { Route, Routes } from "react-router-dom";
import '../index.css'
import { SignUp } from "../pages/Auth/SignUp";
import { SignIn } from "../pages/Auth/SignIn";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ListBirds } from "../pages/Birds-record/ListBirds";
import { AddBird } from "../pages/Birds-record/AddBird";

export const AppRouter = () => {
  return (
    <>
      <div className="component">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<SignIn />} />
          <Route path="/auth/register" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/BirdsRecord/list" element={<ListBirds />} />
          <Route path="/BirdsRecord/add" element={<AddBird />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
