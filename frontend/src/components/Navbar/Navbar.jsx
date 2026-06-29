import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          CommunityConnect AI
        </h1>

        {/* Navigation Menu */}
        <div className="flex gap-8 text-lg font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/report"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            Report Issue
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            Admin
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-bold"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            Login
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;