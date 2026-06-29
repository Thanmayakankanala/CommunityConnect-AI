function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Issues Reported",
    },
    {
      number: "8K+",
      title: "Issues Resolved",
    },
    {
      number: "500+",
      title: "Communities",
    },
    {
      number: "98%",
      title: "Citizen Satisfaction",
    },
  ];

  return (
    <section className="py-24 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Community Impact
          </h2>

          <p className="text-xl mt-4 text-blue-100">
            Building safer and smarter communities together.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white text-blue-700 rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition"
            >
              <h3 className="text-5xl font-bold">
                {item.number}
              </h3>

              <p className="text-xl mt-4 font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;