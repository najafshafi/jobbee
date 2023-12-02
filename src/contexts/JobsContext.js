import React, { useState, createContext } from "react";
import { job, jobs } from "../services/apis";

export const JobsContext = createContext();

export const JobsContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [JobLaoded, setJobLoaded] = useState(false);
  const [data, setJobList] = useState({ results: [] });
  const [selectedJob, setSelectedJob] = useState({});

  const useJob = () => {
    const getJob = async (id) => {
      setLoading(true);
      try {
        const response = await job(id);
        setSelectedJob(response.data);
        setJobLoaded(true);
        setLoading(false);
      } catch (error) {
        setJobLoaded(false);
        setLoading(false);
      }
    };

    return { getJob, selectedJob, setSelectedJob, JobLaoded };
  };

  const useJobs = () => {
    const fetchJobs = async (params) => {
      setLoading(true);
      try {
        const response = await jobs(params);
        setJobList(response.data);
      } catch (error) {
        setLoading(false);
      }
    };

    return { fetchJobs, data, setJobList };
  };

  const commonValues = { loading };
  const JobsValue = useJobs();
  const JobValue = useJob();

  return (
    <JobsContext.Provider value={{ ...commonValues, ...JobsValue, ...JobValue }}>
      {props.children}
    </JobsContext.Provider>
  );
};

export default JobsContextProvider;