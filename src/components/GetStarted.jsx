import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { io } from "socket.io-client";
import { CircularProgress, Snackbar, Box, Alert } from "@mui/material";

const socket = io("http://localhost:5001/");

function GetStarted() {
  const [prompt, setPrompt] = useState("");
  const [qrImage, setQrImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [linked, setLinked] = useState(false);

  const [socketId, setSocketId] = useState("");
  
  socket.on("hello", (id) => {
    setSocketId(id);
    // console.log("hello: ", id);

    try {
      setLoader(true);
      socket.emit("QR", socket.id);
      socket.on("QRcode", (base64Qr) => {
        setQrImage(base64Qr);
        setLoader(false);
      });
    } catch (error) {
      setLoader(false);
      // console.error("Error fetching QR image:", error);
    }
  });

  socket.on("linked", () => {
    setLinked(true);
  });

  // const canGenerateQR = () => {
  //   return qrImage !== null || loader !== false;
  // };

  const handleSubmit = async () => {
    try {
      socket.emit("prompt", { prompt, socketId });
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  // const handleQR = () => {
  //   try {
  //     setLoader(true);
  //     socket.emit("QR", socketId);
  //     socket.on("QRcode", (base64Qr) => {
  //       setQrImage(base64Qr);
  //       setLoader(false);
  //     });
  //   } catch (error) {
  //     setLoader(false);
  //     console.error("Error fetching QR image:", error);
  //   }
  // };

  useEffect(() => {
    socket.on("connect", () => {
      // console.log("socket is connected: ", socket.id);
    });

    socket.on("disconnect",socket.id);
    
  }, []);

  // useEffect(() => {
  //   console.log("Loader state changed:", loader);
  //   // if (loader) console.log("is loading:");
  //   // else console.log("loading is completed:");
  // }, [loader]);

  return (
    <div
      id="getStartedSection"
      className="w-full p-8 sm:p-12 md:p-16 lg:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className=" text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] pt-20 leading-none tracking-tight">
        Get Started
      </h1>
      <div className="py-4 text-sm md:text-base lg:text-lg">
        Below are the steps defined to start the automated reply feature on your
        WhatsApp.
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 border-t-[1px] border-[#a1b562]">
        <div className="w-full md:w-1/2">
          <h1 className="text-[6vw] sm:text-[5vw] md:text-[4.5vw] lg:text-[4.5vw]">
            Steps:
          </h1>
          <div className="py-2">
            Step: 1. Link your WhatsApp by scanning the QR (from the linked
            device section of WhatsApp)
          </div>
          <div className="py-2">
            Step: 2. Enter the prompt according to which replies will be
            generated. For example, "I will be in college from 10am to 4pm and
            then will be going to a movie. I will be free after 9pm."
          </div>
          <div className="py-2">
            Step: 3. Now relax, your WhatsApp messages will be replied to
            automatically.
          </div>
          <div className="py-2">
            <b>NOTE: </b> Your device will automatically be unlinked as soon as
            you close this tab or browser. This will cause the feature to stop.
            You can also manually unlink your device from WhatsApp to stop this
            functionality.
          </div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt"
            className="w-full md:w-3/4 h-[10vw] md:h-[5vw] p-[2vw] md:p-[1.5vw] mt-[4vw] md:mt-[2vw] rounded-xl"
          />
          <button
            onClick={handleSubmit}
            className="flex uppercase gap-4 md:gap-10 items-center px-6 md:px-10 py-4 md:py-6 bg-zinc-900 rounded-full mt-6 md:mt-10 text-white"
          >
            Set Prompt
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[320px] h-[320px] m-[5vw] md:ml-[4vw] rounded-3xl bg-[#fff]">
            {loader && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CircularProgress />
              </Box>
            )}

            {qrImage && !loader && (
              <div className="qr-container w-[320px] h-[320px] flex justify-center items-center">
                <QRCode className="qr-code" value={qrImage} size={280} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Snackbar
        open={alertOpen}
        autoHideDuration={5000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "300px" }}>
          This is an info Alert.
        </Alert>
      </Snackbar>

      <Snackbar
        open={linked}
        autoHideDuration={5000}
        onClose={() => setLinked(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "300px" }}>
          Device Linked Successfully
        </Alert>
      </Snackbar>
    </div>
  );
}

export default GetStarted;
