import { getJobs } from "../utils/fetchJobs";
import { JobList } from "./JobList";
import { useEffect, useState } from "react";
import { getCityLocation } from "../utils/getCityLocation";

export const JobGallery = () => {
  useEffect(() => {
    getValidatedJobs().then((validatedJobs) => setJobs(validatedJobs));
  }, []);

  const [jobs, setJobs] = useState([]);
  const getValidatedJobs = async () => {
    const response = await getJobs();
    console.log(response);
    const validatedJobs = await Promise.all(
      response.map(async (job) => {
        const location = await getCityLocation(
          job.location.lat,
          job.location.long
        );
        job.location = location;
        return job;
      })
    );
    return validatedJobs;
  };

  return <JobList jobs={jobs}></JobList>;
};
