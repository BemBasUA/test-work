import sprite from "../../img/sprite.svg";
import { Link } from "react-router-dom";

export const JobList = ({ jobs, state }) => {
  let increment = 1;

  return (
    <ul className="max-w-414 mx-auto mt-9 mb-26">
      {jobs.map((job) => {
        increment += 1;
        return (
          <li
            key={job.id}
            className="flex flex-col-reverse rounded-lg bg-secondary-bg mb-8 last:mb-0 shadow-card"
          >
            <div>
              <img
                className="w-66 h-66 rounded-full"
                src={job.pictures[0] + `?random=${increment}`}
                alt="job_picture"
              />
              <Link to={`details/${job.id}`} state={state} className="font-proximaNova font-normal">
                {job.title}
              </Link>
              <button type="button">
                <svg width="100px" height="100px">
                  <use href={sprite + "#icon-bookmark"}></use>
                </svg>
              </button>
              <p>{job.name}</p>
              <svg width="100px" height="100px">
                <use href={sprite + "#icon-map-marker"}></use>
              </svg>
              <p>{job.location.lat}</p>
            </div>

            <p className="ml-auto">Posted 2 days ago</p>
          </li>
        );
      })}
    </ul>
  );
};
