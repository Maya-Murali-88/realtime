"use client";

import useStartVideo

function useStartVideo({ room, props }: UseStartVideoProps): {
  mergedProps: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className: string;
  onClick: () => void;
  style: {
  display: string;
  };
  };
  canPlayVideo: boolean;
  }
  

// import { useEffect, useRef } from "react";

// export function VideoStream() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     async function setupStream() {
//       if (!videoRef.current) return;

//       try {
//         // Get the user's webcam stream
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream; // Attach the stream to the video element
//       } catch (err) {
//         console.error("Error accessing media devices:", err);
//       }
//     }

//     setupStream();
//   }, []);

//   return (
//     <div>
//       <h2>Live Video Stream</h2>
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         playsInline
//         style={{ width: "100%", height: "auto", maxWidth: "300px" }} // Adjust size for UI
//       ></video>
//     </div>
//   );
// }
