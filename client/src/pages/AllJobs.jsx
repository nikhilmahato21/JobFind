import React, { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import SearchContainer from "../components/SearchContainer";
import JobContainer from "../components/JobContainer";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobContainer />
    </AllJobsContext.Provider>
  );
};
export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
