import toast from "react-hot-toast";
import customFetch from "../utils/customFetch";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch(`/jobs/${params.id}`);
    return data;
  } catch (error) {}
  toast.error(error?.response?.data?.msg);
  return redirect("/dashboard/all-jobs");
};
export const action = async () => {
  return null;
};

const EditJob = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            defaultValue={job.jobLocation}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type "
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting.." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
