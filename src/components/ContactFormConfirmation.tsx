import React from "react";
import LocalTime from "./LocalTime";

type props = {
  name: string;
};

const ContactFormConfirmation: React.FC<props> = ({ name }) => {
  return (
    <div className="flex flex-col items-start gap-4 p-4 rounded-lg shadow-lg text-white w-full">
      {/* replace the src with the path to your own avatar image */}
      <div className="w-full flex gap-3 items-center">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQEiZJeq2ay9OA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517616023515?e=1775088000&v=beta&t=UIbH3lk5illiZa9Ei8eQM_3mhOdmBaiS_1j8bhsYTr8"
          alt="Reza avatar"
          className="w-20 aspect-square sm:w-20 rounded-full object-cover border-2 border-gray-500 "
          onError={(e) => {
            // if the local avatar isn't available, fall back to a placeholder
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/star.png";
          }}
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
