import { getJobs } from "../../utils/fetchJobs";
import { JobList } from "../../components/JobList/JobList";
import { useEffect, useState } from "react";
import { getCityLocation } from "../../utils/getCityLocation";
import { useLocation } from "react-router-dom";

export const JobGallery = () => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getValidatedJobs().then((validatedJobs) => setJobs(validatedJobs));
  }, []);

  const getValidatedJobs = async () => {
    const response = await getJobs();
    const validatedJobs = response;
    // const validatedJobs = await Promise.all(
    //   response.map(async (job) => {
    //     const location = await getCityLocation(
    //       job.location.lat,
    //       job.location.long
    //     );
    //     job.location = location;
    //     return job;
    //   })
    // );
    return validatedJobs;
  };

  return (
    <section className="bg-primary-bg mx-auto h-full overflow-hidden">
      <JobList state={{ from: location }} jobs={jobs}></JobList>
    </section>
  );
};
