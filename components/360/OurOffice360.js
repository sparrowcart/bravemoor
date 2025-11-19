// "use client";

// import React, { useEffect } from "react";

// const OurOffice360 = () => {
//   useEffect(() => {
//     // Dynamically load pannellum script
//     const script = document.createElement("script");
//     script.src =
//       "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
//     script.async = true;
//     document.body.appendChild(script);

//     const link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href =
//       "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
//     document.head.appendChild(link);

//     script.onload = () => {
//       if (window.pannellum) {
//         window.pannellum.viewer("panorama", {
//           type: "equirectangular",
//           panorama: "/assets/img/office/finaloffice.png", // 👈 your image here
//           autoLoad: true,
//           autoRotate: -2,
//           showZoomCtrl: true,
//           showFullscreenCtrl: true,
//           compass: false,
//         });
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//       document.head.removeChild(link);
//     };
//   }, []);

//   return (
//     <section
//       className="office360-section"
//       style={{ padding: "80px 0", textAlign: "center" }}
//     >
//       <h2 className="title mb-4">Explore Our Office 360°</h2>
//       <div
//         id="panorama"
//         style={{
//           width: "100%",
//           height: "500px",
//           borderRadius: "20px",
//           overflow: "hidden",
//           boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//         }}
//       ></div>
//       <p style={{ marginTop: "10px", color: "#777", fontSize: "14px" }}>
//         👆 Click and drag to look around
//       </p>
//     </section>
//   );
// };

// export default OurOffice360;


"use client";

import React, { useEffect, useState } from "react";

const OurOffice360 = () => {
  const [viewerLoaded, setViewerLoaded] = useState(false);

  useEffect(() => {
    // Load pannellum dynamically when play clicked
    if (!viewerLoaded) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
    document.head.appendChild(link);

    script.onload = () => {
      if (window.pannellum) {
        window.pannellum.viewer("panorama", {
          type: "equirectangular",
          panorama: "/assets/img/office/finaloffice.png",
          autoLoad: true,
          autoRotate: 0, // ❌ no auto-rotation
          showZoomCtrl: true,
          showFullscreenCtrl: true,
          compass: false,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, [viewerLoaded]);

  return (
    <section
      className="office360-section"
      style={{
        padding: "80px 0",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h2 className="title mb-4">Explore Our Office 360°</h2>

      <div
        id="panorama"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "0px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {/* 🔹 Overlay before play */}
        {!viewerLoaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              cursor: "pointer",
              zIndex: 5,
            }}
            onClick={() => setViewerLoaded(true)}
          >
            <div
              style={{
                background: "#ff5c35",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
                boxShadow: "0 0 20px rgba(255,92,53,0.6)",
              }}
            >
              <i
                className="fas fa-play"
                style={{ fontSize: "28px", marginLeft: "4px" }}
              ></i>
            </div>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>
              Click to start 360° view
            </p>
          </div>
        )}
      </div>

      <p style={{ marginTop: "10px", color: "#777", fontSize: "14px" }}>
        👆 Click and drag to look around
      </p>
    </section>
  );
};

export default OurOffice360;
