import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import { useState } from "react";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  function toggleSignUpForm() {
    setIsSignInForm((signed) => !signed);
  }

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg"
          alt="background"
        />
      </div>
      <form className="flex flex-col w-3/12 absolute px-8 py-10 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg ">
        <h2 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 bg-gray-900/80 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 mb-4 bg-gray-900/80 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-8 bg-gray-900/80 rounded-lg"
        />
        <button className="font-semibold py-3 mb-5 bg-red-700 rounded-lg text-center cursor-pointer hover:bg-red-800">
          Sign in
        </button>
        <p>Forgot Password?</p>
        <p className="text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already a User?"}
          <Link
            onClick={toggleSignUpForm}
            className="text-white font-semibold hover:underline"
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
