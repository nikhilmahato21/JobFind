import {
  Link,
  Form,
  redirect,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-hot-toast";
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
import SubmitBtn from "../components/SubmitBtn";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="nik@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <SubmitBtn />{" "}
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          not a member yey?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
