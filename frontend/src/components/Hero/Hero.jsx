import { Link } from "react-router-dom";
import communityImage from "../../assets/undraw_online-community_3o0l.svg";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-8">

        <div className="text-white">

          <span className="bg-white text-blue-700 px-5 py-2 rounded-full font-semibold">
            🚀 AI Powered Community Platform
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Build Smarter
            <br />
            Communities
          </h1>

          <p className="text-xl mt-6 leading-8">
            Report issues, connect citizens, and enable faster
            problem resolution using AI and Firebase.
          </p>

          <div className="mt-10 flex gap-5">

            <Link to="/report">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
                🚨 Report Issue
              </button>
            </Link>

            <Link to="/admin">
              <button className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">
                📊 Dashboard
              </button>
            </Link>

          </div>

        </div>

        <div>
          <img
            src={communityImage}
            alt="Community"
            className="w-full"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;