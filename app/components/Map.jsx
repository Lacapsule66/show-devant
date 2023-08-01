import React from "react";

export default function Map() {
  return (
    <div className="mt-2 flex w-screen flex ">
      <div className="h-full w-screen">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=nicolas%20condette&key=AIzaSyAXNW1ZqiVoRoArpexEfvqYhOEAQ54g4js"
          style={{
            width: "50%",
            height: "450px",
          }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="bg-red-500 w-[50%] h-[450px]">

      </div>
    </div>
  );
}
