import React from "react";
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
const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <>
      <SearchContainer />
      <JobContainer />
    </>
  );
};

export default AllJobs;
