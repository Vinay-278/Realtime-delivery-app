import React, { useState } from 'react'
import Loader from './Loader'
import axios from 'axios'


const LocationPermission = () =>{
    const [loading,setLoading] = useState("loading")
    const handleLocation = () => {
        if(!navigator.geolocation){
            alert("Geolocation not supported")
            return ;
        }
        navigator.geolocation.getCurrentPosition(
          async (pos) =>{
              try{
                  setLoading("success");
                  const latitude = pos.coords.latitude;
                  const longitude = pos.coords.longitude;
                  console.log(latitude, longitude)
                  // address fetch using open street map
                  const addressRes = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
                  );
                  const addressData = await addressRes.json();
                  console.log("Address: ", addressData.display_name)
                  const res = await axios.post(
                    "http://localhost:4000/api/location",
                    {
                        latitude,
                        longitude
                    }
                  )
                  console.log(res.data)
                  alert("Location fetched successfully")
              }
              catch(error){
                  console.log(error);
              }
          },
          (error) =>{
              console.log(error)
              if(error.code === 1){
                  alert("Permission denied")
              }
              else{
                alert("Unable to fetch location")
              }
              setLoading("reject")
          }
        )
    }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[350px] flex flex-col bg-white p-6 rounded-xl shadow-lg gap-8">
        <Loader state={loading} />
        <button onClick={handleLocation} className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
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
