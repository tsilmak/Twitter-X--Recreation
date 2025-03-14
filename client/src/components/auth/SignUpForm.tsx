"use client";

import { XLogo } from "@/utils/icons";
import { useRouter } from "next/navigation";
import Input from "../form/Input";
import { useState, useEffect } from "react";

export default function SignUpForm({ isModal = false }) {
  const router = useRouter();

  if (!isModal) {
    return (
      <SignUpFormContent onClose={() => router.push("/")} isModal={isModal} />
    );
  }

  return <SignUpFormContent onClose={() => router.back()} isModal={isModal} />;
}

function SignUpFormContent({
  onClose,
  isModal,
}: {
  onClose: () => void;
  isModal: boolean;
}) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const getDaysInMonth = (month: string, year: string) => {
    if (!month || !year) return Array.from({ length: 31 }, (_, i) => i + 1);

    const monthIndex = months.indexOf(month);
    const yearNum = parseInt(year);

    if (monthIndex === 1) {
      // February
      const isLeapYear =
        (yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0;
      return Array.from({ length: isLeapYear ? 29 : 28 }, (_, i) => i + 1);
    }

    if ([3, 5, 8, 10].includes(monthIndex)) {
      // 30-day months
      return Array.from({ length: 30 }, (_, i) => i + 1);
    }

    return Array.from({ length: 31 }, (_, i) => i + 1); // 31-day months
  };

  const days = getDaysInMonth(selectedMonth, selectedYear);

  useEffect(() => {
    if (selectedDay && days.length) {
      const maxDays = days.length;
      const selectedDayNum = parseInt(selectedDay);
      if (selectedDayNum > maxDays) {
        setSelectedDay(""); // Reset to empty if selected day exceeds max days
      }
    }
  }, [selectedMonth, selectedYear, selectedDay, days.length]);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 ${
          isModal ? "bg-black/50" : "bg-black"
        } transition-colors duration-300`}
      ></div>

      <div className="flex items-center justify-center h-full">
        <div
          className="relative bg-black border border-gray-700 rounded-2xl w-[600px] max-w-xl mx-4 z-10"
          onClick={(e) => e.stopPropagation()}
        >
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

          <div className="flex justify-center pt-3 pb-8">
            <XLogo width="34" height="34" fill="rgba(231,233,234,255)" />
          </div>

          <div className="px-12 pb-12">
            <h1 className="text-3xl font-bold mb-8">Create your account</h1>

            <div className="relative w-full mb-5">
              <Input inputId="userName" inputNamePlaceHolder="Name" />
            </div>
            <div className="relative w-full mb-5">
              <Input inputId="userEmail" inputNamePlaceHolder="Email" />
            </div>
            <div>
              <h1 className="font-bold">Date of birth</h1>
              <p className="text-sm">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <div className="flex gap-4 mt-4">
                <select
                  className="flex-1 bg-black border border-gray-700 rounded-md p-2 text-white"
                  name="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="">Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  className="flex-1 bg-black border border-gray-700 rounded-md p-2 text-white"
                  name="day"
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                >
                  <option value="">Day</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>

                <select
                  className="flex-1 bg-black border border-gray-700 rounded-md p-2 text-white"
                  name="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="w-full bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 mt-8">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
