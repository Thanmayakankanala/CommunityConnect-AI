function WhyChooseUs() {
  const reasons = [
    "AI Powered Issue Detection",
    "Real-Time Report Tracking",
    "Firebase Cloud Database",
    "GPS Location Support",
    "Fast Government Response",
    "Easy Citizen Reporting",
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Why Choose CommunityConnect AI?
          </h2>

          <p className="text-xl text-gray-500 mt-5">
            Modern technology for modern communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4"
            >
              <span className="text-3xl">✅</span>

              <h3 className="text-xl font-semibold">
                {reason}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;