import React from 'react'
import Loader from './Loader'

const LocationPermission = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[350px] flex flex-col bg-white p-6 rounded-xl shadow-lg gap-8">
        <Loader state={"reject"} />
        <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
          ACCESS LOCATION <div></div>
        </button>
        <div className="font-medium">
          Dfood will access your location only while using the app
        </div>
      </div>
    </div>
  );
}

export default LocationPermission
