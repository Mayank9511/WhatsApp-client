import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactUs() {
  return (
    <div id="contactUsSection" className="min-h-screen bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row gap-5 w-full p-10 md:p-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-[12vw] md:text-[8vw] font-semibold uppercase leading-none">
            Contact
          </h1>
          <h1 className="text-[12vw] md:text-[8vw] font-semibold uppercase leading-none">
            Us
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mt-10 md:mt-20">
            <a
              className="block text-lg md:text-xl font-light py-3 md:py-5"
              href="mailto:gupta.mayank.mg02@gmail.com"
            >
              <EmailIcon
                style={{ height: "30px", width: "30px", paddingRight: "10px" }}
              />
              Gmail
            </a>
            <a
              className="block text-lg md:text-xl font-light"
              href="https://www.linkedin.com/in/mayank-gupta-aa1028208/"
            >
              <LinkedInIcon
                style={{ height: "30px", width: "30px", paddingRight: "10px" }}
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-20">
        <p className="text-sm md:text-base">
          This is the first prototype of my project, and your feedback will be
          invaluable in helping me improve it further. As a personal project,
          I'm eager to hear your thoughts. If this project sparks your interest
          and you'd like to contribute, please reach out—we can work together to
          scale it.
        </p>
        <p className="mt-5 text-sm md:text-base">With Love, MAYANK GUPTA 💚</p>
      </div>
    </div>
  );
}

export default ContactUs;