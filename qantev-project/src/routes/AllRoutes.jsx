/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage"; // Update import path accordingly
import DetailsPage from "../pages/DetailsPage"; // Update import path accordingly
import ErrorPage from "../pages/ErrorPage";

function AllRoutes({ providers }) {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage providers={providers} />} />
      <Route path="/details/:id" element={<DetailsPage providers={providers} />} />
      <Route path="*" element={<ErrorPage error="Page not found" />} />
    </Routes>
  );
}

export default AllRoutes;
