import sprite from "../img/sprite.svg";

export const JobList = ({ jobs }) => {
  let increment = 1;

  return (
    <ul>
      {jobs.map((job) => {
        increment += 1;
        return (
          <li key={job.id}>
            <img
              src={job.pictures[0] + `?random=${increment}`}
              alt="job_picture"
            />
            <p>{job.title}</p>
            <p>{job.name}</p>
            <svg width="100px" height="100px">
              <use href={sprite + "#icon-map-marker"}></use>
            </svg>
            <p>{job.location}</p>
          </li>
        );
      })}
    </ul>
  );
};
