function Features() {

  const features = [
    {
      icon: "📍",
      title: "Location Tracking",
      description: "Automatically capture user location."
    },
    {
      icon: "🤖",
      title: "AI Analysis",
      description: "Smart categorization of reported issues."
    },
    {
      icon: "📊",
      title: "Dashboard",
      description: "Live monitoring of all community reports."
    },
    {
      icon: "⚡",
      title: "Fast Resolution",
      description: "Authorities receive instant notifications."
    },
    {
      icon: "👥",
      title: "Citizen Engagement",
      description: "Everyone can contribute to the community."
    },
    {
      icon: "🔒",
      title: "Secure Data",
      description: "Firebase securely stores every report."
    }
  ];

  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Platform Features
        </h2>

        <p className="text-center text-gray-500 mt-4 text-xl">
          Everything needed for a smart community.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;