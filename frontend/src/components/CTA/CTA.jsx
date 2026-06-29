import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-cyan-500 py-24">

      <div className="max-w-5xl mx-auto text-center text-white">

        <h2 className="text-5xl font-bold">
          Ready to Improve Your Community?
        </h2>

        <p className="text-xl mt-6">
          Start reporting issues and help build a smarter city.
        </p>

        <Link to="/report">
          <button className="mt-10 bg-white text-blue-700 px-10 py-4 rounded-xl text-xl font-bold hover:scale-105 transition">
            🚀 Report an Issue
          </button>
        </Link>

      </div>

    </section>
  );
}

export default CTA;