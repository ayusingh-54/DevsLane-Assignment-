import * as Yup from "yup";
import { useFormik } from "formik";
import { FiMail, FiLock, FiShoppingCart, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";

function Login() {
  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // useFormik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert(`Email: ${values.email}\nPassword: ${values.password}`);
    },
  });

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Cart Icon */}
        <div className="flex justify-center mb-10 relative">
          <FiShoppingCart className="w-24 h-24 text-white" />
          <FiArrowUp className="w-6 h-6 text-white absolute top-6" />
        </div>

        {/* Login Form using formik.handleSubmit */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <div
              className={`flex items-center bg-blue-500 border rounded-lg px-4 py-3 ${
                formik.errors.email && formik.touched.email
                  ? "border-red-400"
                  : "border-blue-400"
              }`}
            >
              <FiMail className="w-5 h-5 text-white mr-3" />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="bg-transparent text-white placeholder-white/70 outline-none w-full"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Show error if touched and has error */}
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-300 text-sm mt-1 ml-2">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div
              className={`flex items-center bg-blue-500 border rounded-lg px-4 py-3 ${
                formik.errors.password && formik.touched.password
                  ? "border-red-400"
                  : "border-blue-400"
              }`}
            >
              <FiLock className="w-5 h-5 text-white mr-3" />
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="bg-transparent text-white placeholder-white/70 outline-none w-full"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Show error if touched and has error */}
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-300 text-sm mt-1 ml-2">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100"
          >
            LOGIN
          </button>

          {/* Forgot Password */}
          <p className="text-center">
            <Link to="/forgot" className="text-white hover:underline">
              Forgot password?
            </Link>
          </p>

          {/* New User - SignUp Link */}
          <p className="text-center text-white">
            New user?{" "}
            <Link to="/signup" className="font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
