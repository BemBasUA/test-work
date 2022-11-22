import sprite from "../../img/sprite.svg";
import { Link } from "react-router-dom";

export const JobList = ({ jobs, state }) => {
  let increment = 1;

  return (
    <ul className="max-w-414 mx-auto mt-9 mb-26 desktop:max-w-1400 ">
      {jobs.map((job) => {
        increment += 1;
        return (
          <li
            key={job.id}
            className="flex flex-col-reverse desktop:flex-row rounded-lg bg-secondary-bg mb-8 last:mb-0 shadow-card px-16 pt-13 pb-26 desktop:py-24"
          >
            <div className="flex">
              <img
                className="w-66 max-h-66 rounded-full shrink-0 mr-19 desktop:mr-26"
                src={job.pictures[0] + `?random=${increment}`}
                alt="job_picture"
              />
              <div>
                <Link
                  to={`details/${job.id}`}
                  state={state}
                  className="block mb-5 desktop:mb-8 font-proximaNova font-normal desktop:font-bold text-primary-text text-base tracking-tight"
                >
                  {job.title}
                </Link>
                <button className="hidden" type="button">
                  <svg width="100px" height="100px">
                    <use href={sprite + "#icon-bookmark"}></use>
                  </svg>
                </button>
                <p className="mb-5 text-sm text-secondary-text tracking-wide">
                  {job.name}
                </p>
                <div className="flex items-center">
                  <svg className="mr-8" width="13px" height="18px">
                    <use href={sprite + "#icon-map-marker"}></use>
                  </svg>
                  <p className="text-sm text-secondary-text tracking-wide">
                    {job.location.lat}
                  </p>
                </div>
              </div>
            </div>

            <p className="ml-auto desktop:mt-auto font-proximaNova font-light text-xs text-secondary-text tracking-normal mb-15">
              Posted 2 days ago
            </p>
          </li>
        );
      })}
    </ul>
  );
};
