import Navbar from "./Navbar";
import Footer from "./Footer";
import Axios from "axios";
import { useState } from "react";
import BannerImage from "../assets/1.jpg"; // Adjust the path if necessary

function HomePage() {
  const [designcapacity, setDesignCapacity] = useState('');
  const [fullcharge, setFullChargeCapacity] = useState('');
  const [dischargetime, setDischargeTime] = useState('');
  const [chargetime, setChargeTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:5000/details", {
        designcapacity,
        fullcharge,
        dischargetime,
        chargetime,
      });
      console.log(res, "detail is successfully uploaded");
    } catch (err) {
      console.log("error ", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        {/* Image section */}
        <div className="w-full max-w-4xl mx-auto">
          <img src={BannerImage} alt="Banner" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>

        {/* Description section */}
        <div className="w-full max-w-4xl mx-auto text-center mt-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Service</h3>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quis magna efficitur luctus.
          </p>
        </div>

        {/* Form section */}
        <div className="w-full max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Design Capacity"
              value={designcapacity}
              onChange={(e) => setDesignCapacity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Full Charge Capacity"
              value={fullcharge}
              onChange={(e) => setFullChargeCapacity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Charging Time"
              value={chargetime}
              onChange={(e) => setChargeTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Discharging Time"
              value={dischargetime}
              onChange={(e) => setDischargeTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Resolve
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
