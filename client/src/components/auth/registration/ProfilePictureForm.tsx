import Navigation from "@/hooks/Navigation";
import { XLogo } from "@/utils/icons";
import React from "react";

const ProfilePictureForm: React.FC = () => {
  return (
    <div className="flex justify-center min-h-screen dark:bg-black">
      <div className="sm:flex max-w-screen-xl w-full relative">
        <Navigation />
        <div className="absolute inset-0 dark:bg-black/50 bg-black/40 transition-colors duration-300" />
        <main className="w-full flex items-center justify-center relative z-10">
          <div className="dark:bg-black bg-white md:border border-borderColor rounded-2xl w-full md:w-[600px] h-full md:h-[650px] md:max-w-2xl md:mx-4 flex flex-col justify-between">
            <div className="flex justify-center pt-3 pb-8">
              <XLogo width="32" height="32" fill="fill-black dark:fill-white" />
            </div>
            <div className="px-8 md:px-20 pb-72 md:pb-64 overflow-y-auto">
              <h1 className="text-2xl md:text-3xl font-bold mb-8">
                Pick a profile picture
              </h1>
              <p>Have a favorite selfie? Upload it now.</p>
            </div>
            <div className="border-0 dark:bg-black md:py-[38px] rounded-2xl flex items-center justify-center"></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePictureForm;
