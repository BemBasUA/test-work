import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sprite from "../../img/sprite.svg";
import { ApplyButton } from "../../components/ApplyButton/ApplyButton";
import { getJobs } from "../../utils/fetchJobs";
import shortid from "shortid";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Map } from "../../components/Map/Map";

export const JobDetails = () => {
  const [job, setJob] = useState({});
  const { jobId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getJobById = async () => {
      const response = await getJobs();
      const job = response.find((job) => job.id === jobId);
      return setJob(job);
    };
    getJobById();
  }, [jobId]);
  console.log(job.location?.lat);

  let increment = 1;

  return (
    <>
      <div>
        <h2>Job details</h2>
        <button>
          <svg width="20px" height="20px">
            <use href={sprite + "#icon-bookmark"}></use>
          </svg>
          Save to my list
        </button>
        <button>
          <svg width="20px" height="20px">
            <use href={sprite + "#icon-share"}></use>
          </svg>
          Share
        </button>
        <ApplyButton />
        <p>{job.title}</p>
        <p>
          {"\u20ac"}
          {job.salary}
        </p>
        <p>Brutto, per year</p>
        <p>Posted 2 days ago</p>
        <p>Description{job.description}</p>
        <ApplyButton />
        <h3>Additional info</h3>
        <p>Employment type</p>
        <ul>
          {job.employment_type?.map((type) => (
            <li key={shortid.generate()}>{type}</li>
          ))}
        </ul>
        <p>Benefits</p>
        <ul>
          {job.benefits?.map((benefit) => (
            <li key={shortid.generate()}>{benefit}</li>
          ))}
        </ul>
        <h3>Attached images</h3>
        <ul>
          {job.pictures?.map((picture) => {
            increment += 1;
            return (
              <li key={shortid.generate()}>
                <img
                  src={job.pictures[0] + `?random=${increment}`}
                  alt="job_picture"
                />
              </li>
            );
          })}
        </ul>
        <Link to={location.state?.from ?? "/"}>RETURN TO JOB BOARD</Link>
      </div>
      <div>
        <p>{job.name}</p>
        <p>{job.address}</p>
        <svg width="100px" height="100px">
          <use href={sprite + "#icon-map-marker"}></use>
        </svg>
        <p>{job.phone}</p>
        <p>{job.email}</p>
        {job.location?.lat && job.location?.long && (
          <Map lat={job.location?.lat} long={job.location?.long} />
        )}
      </div>
    </>
  );
};
