import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />

        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:bg-slate-600 disabled:opacity-50">
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 mt-3">
        <p>Have an account?</p>
        <Link to="sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
