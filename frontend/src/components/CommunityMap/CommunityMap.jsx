import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function CommunityMap() {

return (

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">

🗺 Community Issue Map

</h2>

<p className="text-center text-gray-600 mt-4">

Live reported issues across your city.

</p>

<div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">

<MapContainer

center={[17.3850,78.4867]}

zoom={13}

style={{height:"600px"}}

>

<TileLayer

url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

/>

<Marker position={[17.3850,78.4867]}>

<Popup>

Road Damage

</Popup>

</Marker>

<Marker position={[17.3980,78.4950]}>

<Popup>

Garbage Overflow

</Popup>

</Marker>

<Marker position={[17.3760,78.4700]}>

<Popup>

Water Leakage

</Popup>

</Marker>

</MapContainer>

</div>

</div>

</section>

)

}

export default CommunityMap