import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="font-bold text-lg sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Armin</span>
          <span className="text-slate-700">Estate</span>
        </Link>
        <form className="bg-slate-100 p-2 rounded-lg flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="hidden sm:flex space-x-3 text-slate-700">
          <Link to="/" className="hover:text-slate-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-slate-500">About</Link>
          <Link to="/sign-in" className="hover:text-slate-500">Sign In</Link>
        </ul>
      </div>
    </header>
  );
}
