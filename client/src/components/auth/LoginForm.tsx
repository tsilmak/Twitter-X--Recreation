"use client";

import { XLogo } from "@/utils/icons";
import { useRouter } from "next/navigation";

export default function LoginForm({ isModal = false }) {
  const router = useRouter();

  if (!isModal) {
    return (
      <LoginFormContent onClose={() => router.push("/")} isModal={isModal} />
    );
  }

  // If Modal render with backdrop
  return <LoginFormContent onClose={() => router.back()} isModal={isModal} />;
}
function LoginFormContent({
  onClose,
  isModal,
}: {
  onClose: () => void;
  isModal: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 ${
          isModal ? "bg-black/50" : "bg-black"
        } transition-colors duration-300`}
      ></div>

      {/* Modal content */}
      <div className="flex items-center justify-center h-full">
        <div
          className="relative bg-black border border-gray-700 rounded-2xl w-full max-w-md mx-4 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 left-3 rounded-full p-1 hover:bg-gray-800/50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex justify-center pt-8 pb-5">
            <div className="w-8 h-8">
              <XLogo
                width="100%"
                height="100%"
                fill={"rgba(231,233,234,255)"}
              />
            </div>
          </div>

          {/* Login form */}
          <div className="px-8 pb-8">
            <h1 className="text-2xl font-bold mb-6">Sign in to X</h1>

            <div className="space-y-3 mb-3">
              {/* Google login button */}
              <button className="flex items-center justify-center gap-2 w-full border border-gray-700 rounded-full py-2 font-medium hover:bg-gray-900">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Apple login button */}
              <button className="flex items-center justify-center gap-2 w-full border border-gray-700 rounded-full py-2 font-medium hover:bg-gray-900">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M16.04 11.54c-.02-2.5 2.05-3.71 2.14-3.77-1.17-1.69-2.99-1.93-3.64-1.95-1.55-.16-3.02.91-3.8.91-.79 0-1.99-.89-3.28-.86-1.69.03-3.24.98-4.11 2.48-1.75 3.04-.45 7.52 1.26 9.98.83 1.21 1.83 2.56 3.14 2.52 1.26-.05 1.73-.81 3.25-.81 1.51 0 1.94.81 3.27.79 1.35-.03 2.21-1.22 3.03-2.44.96-1.4 1.35-2.76 1.37-2.83-.02-.01-2.63-1.02-2.65-4.03h-.01v.01zm-2.48-7.4c.69-.84 1.15-2 1.03-3.16-.99.04-2.19.67-2.9 1.5-.64.74-1.2 1.92-1.05 3.06 1.1.08 2.23-.56 2.92-1.4z" />
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-1 h-[1px] bg-[#2F3336] border-none" />
              <p className="mx-2 text-sm">or</p>
              <hr className="flex-1 h-[1px] bg-[#2F3336] border-none" />
            </div>

            {/* Email/phone input */}
            <input
              type="text"
              placeholder="Phone, email address, or username"
              className="w-full bg-transparent border border-gray-700 rounded p-3 mb-5 focus:outline-none focus:border-[#1d9bf0] focus:ring-1 focus:ring-[#1d9bf0]"
            />

            {/* Next button */}
            <button className="w-full bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200">
              Next
            </button>

            {/* Forgot password */}
            <button className="w-full border border-gray-700 text-white font-bold py-2 px-4 rounded-full mt-3 hover:bg-gray-900">
              Forgot password?
            </button>

            {/* Sign up prompt */}
            <p className="mt-8 text-gray-500">
              Dont have an account?{" "}
              <a href="#" className="text-[#1d9bf0] hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
