import React from "react";
import LocalTime from "./LocalTime";

type props = {
  name: string;
};

const ContactFormConfirmation: React.FC<props> = ({ name }) => {
  return (
    <div className="flex flex-col items-start gap-4 p-4 rounded-lg shadow-lg text-white w-full">
      {/* TODO: drop a real local avatar image in public/images and point this at it */}
      <div className="w-full flex gap-3 items-center">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' rx='40' fill='%231c1c21'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' font-family='sans-serif' font-size='28' fill='%23d9ecff' font-weight='600'%3ERR%3C/text%3E%3C/svg%3E"
          alt="Reza avatar"
          className="w-20 aspect-square sm:w-20 rounded-full object-cover border-2 border-gray-500 "
        />
        <div className="flex flex-col ">
          <p className="text-xl sm:text-xl">Reza Rostaminikoo</p>
          <p className="text-md text-gray-400">Location: Canada, Ottawa</p>
          <p className="text-md text-gray-400">
            local Time: <LocalTime />
          </p>
        </div>
      </div>
      <div className="bg-gray-500 h-px w-full" />
      <div className=" leading-relaxed">
        <p className="text-lg">Hi {name},</p>
        <p className="mt-1">
          I have received your message and will review it and get back to you
          usually within 2–3 business days.
        </p>
        <p className="mt-2">Thank you!</p>
      </div>
    </div>
  );
};

export default ContactFormConfirmation;
