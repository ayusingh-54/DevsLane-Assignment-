import * as Yup from "yup";
import { useFormik } from "formik";
import { FiMail, FiShoppingCart, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";

function Forgot() {
  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });

  // useFormik hook
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Reset email sent to:", values.email);
      alert(`Password reset link sent to: ${values.email}`);
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

        {/* Title */}
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h2>
        <p className="text-white/70 text-center mb-6">
          Enter your email to reset password
        </p>

        {/* Forgot Password Form */}
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
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-300 text-sm mt-1 ml-2">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-100"
          >
            RESET PASSWORD
          </button>

          {/* Back to Login Link */}
          <p className="text-center text-white">
            Remember password?{" "}
            <Link to="/login" className="font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
