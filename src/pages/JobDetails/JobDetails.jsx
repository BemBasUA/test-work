import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sprite from "../../img/sprite.svg";
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

  let increment = 1;

  return (
    <div className="desktop:flex">
      <div className="max-w-414 mx-auto px-15 py-24 font-proximaNova desktop:max-w-723 desktop:mr-115 desktop:py-55">
        <div className="desktop:flex items-center desktop:mb-50 desktop:relative  desktop:after:absolute desktop:after:w-full desktop:after:h-1 desktop:after:left-0 desktop:after:-bottom-12 desktop:after:bg-primary-text desktop:after:opacity-10">
          <h2 className="mb-38 desktop:mb-0 relative  after:absolute after:w-full after:h-1 after:left-0 after:-bottom-12 after:bg-primary-text after:opacity-10   font-bold text-primary-text text-l tracking-wider">
            Job details
          </h2>
          <div className="flex mb-36 desktop:mb-0 desktop:ml-auto   ">
            <button className="mr-36 flex items-center   text-sm text-secondary-text tracking-tight">
              <svg
                className="mr-12 fill-primary-text "
                width="20px"
                height="20px"
              >
                <use href={sprite + "#icon-bookmark"}></use>
              </svg>
              Save to my list
            </button>
            <button className="flex items-center text-sm text-secondary-text tracking-tight">
              <svg
                className="mr-12 fill-primary-text "
                width="20px"
                height="20px"
              >
                <use href={sprite + "#icon-share"}></use>
              </svg>
              Share
            </button>
          </div>
        </div>
        <button className="hidden desktop:block desktop:mb-30 desktop:px-30 desktop:py-18 desktop:bg-accent  desktop:font-semibold desktop:text-white desktop:text-[12px] leading-4 rounded-lg">
          APPLY NOW
        </button>
        <div className="desktop:flex ">
          <p className="mb-5 desktop:max-w-500 desktop:mr-60  font-bold text-primary-text text-m tracking-tighter">
            {job.title}
          </p>
          <div className="mb-13  items-center  font-light text-details/[0.6] text-xs tracking-normal">
            <p className="desktop:hidden">Posted 2 days ago</p>
            <div className="ml-auto desktop:flex desktop:flex-col-reverse">
              <p className="font-normal text-base tracking-tight text-details/[0.82]">
                Brutto, per year
              </p>
              <p className="font-bold text-end text-primary-text text-[20px] leading-6 desktop:text-start">
                {"\u20ac"}
                {job.salary}
              </p>
            </div>
          </div>
        </div>
        <p className="hidden desktop:block mb-8 font-light text-details/[0.6] text-xs tracking-normal">
          Posted 2 days ago
        </p>

        <p className="mb-19  text-details/[0.82] text-base tracking-tight">
          Description{job.description}
        </p>
        <button className="mb-115 desktop:mb-86 block mx-auto desktop:mx-0 px-30 py-18 bg-accent  font-semibold text-white text-[12px] leading-4 rounded-lg">
          APPLY NOW
        </button>
        <div className="desktop:flex desktop:flex-col-reverse desktop:mb-86">
          <div>
            <h3 className="mb-24 font-bold text-primary-text text-l tracking-wider relative after:absolute after:w-full after:h-1 after:left-0 after:-bottom-12 after:bg-primary-text after:opacity-10">
              Attached images
            </h3>
            <ul className="flex overflow-x-auto overflow-y-hidden scrollbar-hide mb-55 desktop:mb-0">
              {job.pictures?.map((picture) => {
                increment += 1;
                return (
                  <li
                    className="w-200 shrink-0 max-h-115 rounded-lg overflow-hidden  mr-16 last:mr-0"
                    key={shortid.generate()}
                  >
                    <img
                      src={job.pictures[0] + `?random=${increment}`}
                      alt="job_picture"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="mb-24 font-bold text-primary-text text-l tracking-wider relative after:absolute after:w-full after:h-1 after:left-0 after:-bottom-12 after:bg-primary-text after:opacity-10">
              Additional info
            </h3>
            <p className=" mb-10 text-details/[0.82] text-base tracking-tight ">
              Employment type
            </p>
            <ul className="flex mb-24">
              {job.employment_type?.map((type) => (
                <li
                  className="w-122 desktop:w-200 mr-8 last:mr-0 border border-black/[.12]  rounded-lg font-bold text-[#55699E] bg-[#A1B1DB]/[0.31] py-13 text-center"
                  key={shortid.generate()}
                >
                  {type}
                </li>
              ))}
            </ul>
            <p className="mb-10 text-details/[0.82] text-base tracking-tight">
              Benefits
            </p>
            <ul className="flex mb-24">
              {job.benefits?.map((benefit) => (
                <li
                  className="w-122 desktop:w-200  mb-66 mr-8 last:mr-0 border border-[#FFCF00] rounded-lg font-bold text-[#988B49] bg-yellow/[0.15] py-13 text-center"
                  key={shortid.generate()}
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          className="hidden desktop:block w-220 rounded-lg text-xs font-semibold text-[#55699E] bg-[#A1B1DB]/[0.31] py-18 px-26 text-center"
          to={location.state?.from ?? "/"}
        >
          RETURN TO JOB BOARD
        </Link>
      </div>
      <div className="mx-auto bg-[#2A3047] rounded-lg overflow-hidden desktop:ml-0 max-w-414 desktop:mt-55 desktop:h-400">
        <div className="mb-24 text-[#E7EAF0] px-66 pt-30">
          <p className="mb-15 font-bold text-sm  tracking-tight">{job.name}</p>
          <div className="flex items-center mb-8">
            <svg className="mr-8" width="13px" height="18px">
              <use href={sprite + "#icon-map-marker"}></use>
            </svg>
            <p>{job.address}</p>
          </div>
          <p className="text-[#E7EAF0]/[.69]">{job.phone}</p>
          <p className="text-[#E7EAF0]/[.69]">{job.email}</p>
        </div>
        <div>
          {job.location?.lat && job.location?.long && (
            <Map lat={job.location?.lat} long={job.location?.long} />
          )}
        </div>
      </div>
    </div>
  );
};
