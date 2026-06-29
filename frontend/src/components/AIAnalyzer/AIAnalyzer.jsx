function AIAnalyzer() {

return (

<section className="bg-gray-100 py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">

🤖 Gemini AI Issue Analyzer

</h2>

<p className="text-center text-gray-600 mt-5">

Artificial Intelligence instantly analyzes every community issue.

</p>

<div className="grid md:grid-cols-2 gap-12 mt-16">

<div className="bg-white rounded-3xl shadow-lg p-8">

<h3 className="text-2xl font-bold">

Uploaded Issue

</h3>

<div className="mt-6">

<img

src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"

className="rounded-xl"

/>

</div>

<div className="mt-6">

<p className="font-semibold">

Road Damage

</p>

<p className="text-gray-500">

Location:

Hyderabad

</p>

</div>

</div>

<div className="bg-white rounded-3xl shadow-lg p-8">

<h3 className="text-2xl font-bold">

Gemini AI Analysis

</h3>

<div className="space-y-6 mt-8">

<div className="flex justify-between">

<span>Category</span>

<span className="font-bold text-blue-600">

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

2 Days

</span>

</div>

<div className="flex justify-between">

<span>Confidence</span>

<span className="font-bold text-blue-700">

98%

</span>

</div>

</div>

</div>

</div>

</div>

</section>

)

}

export default AIAnalyzer