function HowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div>
            <div className="text-6xl">📷</div>
            <h3 className="text-2xl font-bold mt-5">
              Report
            </h3>
            <p className="mt-3">
              Citizens submit issues with photos and location.
            </p>
          </div>

          <div>
            <div className="text-6xl">🤖</div>
            <h3 className="text-2xl font-bold mt-5">
              AI Processing
            </h3>
            <p className="mt-3">
              AI categorizes and prioritizes reports.
            </p>
          </div>

          <div>
            <div className="text-6xl">✅</div>
            <h3 className="text-2xl font-bold mt-5">
              Resolve
            </h3>
            <p className="mt-3">
              Authorities resolve issues efficiently.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;