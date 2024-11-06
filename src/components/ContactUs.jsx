import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactUs() {
  return (
    <div
      id="contactUsSection"
      className="flex flex-col justify-between min-h-screen bg-zinc-900 text-white"
    >
      <div className="flex flex-col md:flex-row gap-5 w-full p-10 md:p-20">
        <div className="w-full md:w-1/2">
          <h1 className="pt-10 text-[12vw] md:text-[8vw] font-semibold uppercase leading-none">
            Contact
          </h1>
          <h1 className="text-[12vw] md:text-[8vw] font-semibold uppercase leading-none">
            Us
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex-row mt-10 md:mt-20">
            <a
              className=" text-lg md:text-xl font-light py-5"
              href="mailto:gupta.mayank.mg02@gmail.com"
            >
              <EmailIcon
                style={{ height: "50px", width: "50px", paddingRight: "10px" }}
              />
              Gmail
            <div className="text-base pl-2 ">gupta.mayank.mg02@gmail.com</div>
            </a>
            <a
              className="block text-lg md:text-xl font-light pt-6"
              href="https://www.linkedin.com/in/mayank-gupta-aa1028208/"
            >
              <LinkedInIcon
                style={{ height: "50px", width: "50px", paddingRight: "10px" }}
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className=" flex-row p-10 md:p-20 mt-auto">
        <p className="text-center align-center text-sm md:text-base">
          This is the first version of "Your Personal WhatsApp Assistant". So,
          your feedback will be invaluable in helping me improve it further. As
          a personal project, I'm eager to hear your thoughts. You can send me
          an email or connect on LinkedIn. If this project excites you enough
          and you would like to contribute, please reach out, and we will work
          together to scale it.
        </p>
        <p className="text-center mt-5 pb-5 text-sm md:text-base">
          With Love, MAYANK GUPTA 💚
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
