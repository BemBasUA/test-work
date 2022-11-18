import { JobGallery } from "../pages/JobGallery/JobGallery";
import { JobDetails } from "../pages/JobDetails/JobDetails";
import { Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<JobGallery />}></Route>
      <Route path="details/:jobId" element={<JobDetails />}></Route>
    </Routes>
  );
};
