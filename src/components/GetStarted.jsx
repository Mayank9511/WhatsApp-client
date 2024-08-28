import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { io } from "socket.io-client";
import { CircularProgress, Snackbar, Box, Alert } from "@mui/material";
import { motion } from "framer-motion";

const socket = io("https://aa3e04ef791064c09e2794b621d34c1b.serveo.net");
// const socket = io("http://localhost:5001");

function GetStarted() {
  const [prompt, setPrompt] = useState("");
  const [qrImage, setQrImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [linked, setLinked] = useState(false);
  const [socketId, setSocketId] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  socket.on("hello", (id) => {
    setSocketId(id);

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
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);

    try {
      socket.emit("prompt", { prompt, socketId });
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const bounceAnimation = {
    animate: {
      x: [0, 2, 4, 6, 8, 10, 12, 0],
      y: [0, -15, 0, -10, 0, -5, 0, 0],
      transition: {
        duration: 1.5,
        times: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 1],
      },
    },
  };

  useEffect(() => {
    socket.on("connect", () => {
      // console.log("socket is connected: ", socket.id);
    });

    socket.on("disconnect", socket.id);
  }, []);

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
            Step: 1. Link your WhatsApp by scanning the QR (from the Linked
            Devices section of WhatsApp)
          </div>
          <div className="py-2">
            Step: 2. Enter the prompt according to which replies will be
            generated. For example: "I will be in college from 10 am to 4 pm and
            then will be going to a movie. I will be free after 9 pm.", you can
            also set personalities like "behave like Elon Musk" etc.
          </div>
          <div className="py-2">
            Step: 3. Now relax, your WhatsApp messages will be replied to
            automatically.
          </div>
          <div className="py-2">
            <b>NOTE: </b> Your device will automatically be unlinked as soon as
            you close this tab or browser. This will cause the feature to stop.
            You can also manually unlink your device from WhatsApp to stop
            automatic replies.
          </div>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: I am Iron Man"
            className="w-full md:w-3/4 h-[10vw] md:h-[5vw] p-[2vw] md:p-[1.5vw] mt-[4vw] md:mt-[2vw] rounded-xl"
          />
          <button
            onClick={handleSubmit}
            className="flex uppercase gap-1 md:gap-1 items-center px-6 md:px-10 py-4 md:py-6 bg-zinc-900 rounded-full mt-6 md:mt-10 text-white"
          >
            Set Prompt
            <motion.div
              animate={isAnimating ? bounceAnimation.animate : {}}
              className="w-[4px] h-[4px] mt-[13px] bg-zinc-100 rounded-full"
            ></motion.div>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[320px] h-[320px] m-[5vw] md:ml-[4vw] rounded-3xl bg-[#fff]">
            {loader && (
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "40%",
                }}
              >
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
