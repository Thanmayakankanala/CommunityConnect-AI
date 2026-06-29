function AIPreview() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          🤖 AI Issue Analyzer
        </h2>

        <p className="text-center text-gray-500 mt-4">
          See how Gemini AI analyzes a reported issue.
        </p>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-10 max-w-3xl mx-auto">

          <p className="text-gray-500">
            Uploaded Image
          </p>

          <div className="mt-3 p-4 rounded-lg bg-gray-100">
            road_damage.jpg
          </div>

          <hr className="my-8"/>

          <h3 className="text-2xl font-bold mb-6">
            Gemini AI Analysis
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Category</span>
              <span className="font-bold text-blue-700">
                Road Damage
              </span>
            </div>

            <div className="flex justify-between">
              <span>Priority</span>
              <span className="font-bold text-red-600">
                High
              </span>
            </div>

            <div className="flex justify-between">
              <span>Department</span>
              <span className="font-bold">
                Municipality
              </span>
            </div>

            <div className="flex justify-between">
              <span>Estimated Resolution</span>
              <span className="font-bold text-green-600">
                3 Days
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AIPreview;