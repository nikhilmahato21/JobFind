import toast from "react-hot-toast";
import customFetch from "../utils/customFetch";
import { redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/StatsContainer";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <h1>admin page</h1>
    </Wrapper>
  );
};

export default Admin;
