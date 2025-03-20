import { XLogo } from "@/utils/icons";
import React from "react";
import Input from "../form/Input";

type PasswordUpdateFormProps = {
  isModal: boolean;
};

const PasswordUpdateForm = ({ isModal }: PasswordUpdateFormProps) => {
  const [password, setPassword] = React.useState<string>("");

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 ${
          isModal ? "dark:bg-black/50 bg-black/40" : "dark:bg-black bg-white"
        } transition-colors duration-300`}
      />
      <div className="flex items-center justify-center h-full">
        <div className="relative dark:bg-black bg-white md:border border-borderColor rounded-2xl w-full md:w-[600px] h-full md:h-[650px] md:max-w-2xl md:mx-4 z-10 flex flex-col justify-between">
          <div className="flex justify-center pt-3 pb-8">
            <XLogo width="32" height="32" fill="fill-black dark:fill-white" />
          </div>
          <div className="px-8 md:px-20 pb-64 md:pb-48 ">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold ">
                You will need a password
              </h1>
              <p className="dark:text-neutral-500 mb-6 mt-2">
                Must be 8 characters or more.
              </p>
            </div>
            <Input
              inputId={"password"}
              inputNamePlaceHolder={"Password"}
              maxCharLength={128}
              onChange={(value) => setPassword(value)}
              isInputTextValid={password.length <= 128}
              inputTextInvalidText="Your password must be less than 128 characters."
            />
          </div>
          <div>
            <p className="px-8 md:px-20 ">
              By signing up, you agree to our Terms, Privacy Policy and Cookie
              Policy. X may use your contact information, including your email
              address and phone number, for the purposes described in our
              Privacy Policy. Learn more
            </p>
          </div>

          <div className="border-0   dark:bg-black md:py-[38px] rounded-2xl flex items-center justify-center">
            <button
              className={`px-[317px] mb-6 md:mb-0 md:px-[202px] font-bold py-3 rounded-full ${"bg-[#87898c] dark:bg-[#787a7a] text-white dark:text-black cursor-not-allowed"}`}
            >
              {false ? "Loading..." : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdateForm;
