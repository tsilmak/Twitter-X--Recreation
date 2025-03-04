"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  EmojiIcon,
  GifIcon,
  GrokIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from "@/utils/icons";
import CharacterCount from "./CharacterCount";

const PostInput = () => {
  const [inputText, setInputText] = useState("");
  const textareaRef = useRef(null);
  // Handle textarea input
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  // Auto-resize textarea when content changes
  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current as HTMLTextAreaElement;
      // Reset height to get accurate scrollHeight
      textarea.style.height = "auto";
      // Set height to scrollHeight
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [inputText]);

  return (
    <div className="p-3 border-b border-gray-800">
      <div className="flex space-x-3">
        <div className="w-11 h-11 bg-gray-600 rounded-full"></div>
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={handleTextChange}
            className="w-full mt-2 bg-transparent border-none text-xl placeholder-gray-500 focus:outline-none resize-none overflow-hidden min-h-[50px]"
            placeholder="What is happening?!"
            rows={1}
          ></textarea>
          <div className="flex justify-between ">
            <div className="flex space-x-1 justify-center  items-center">
              <div className="rounded-full hover:bg-[#031018] cursor-pointer p-2">
                <MediaIcon />
              </div>
              <div className="rounded-full hover:bg-[#031018] cursor-pointer p-2">
                <GifIcon />
              </div>
              <div className="rounded-full hover:bg-[#031018] cursor-pointer p-2">
                <GrokIcon width="20" height="20" fill="rgb(29, 155, 240)" />
              </div>
              <div className="rounded-full hover:bg-[#031018] cursor-pointer p-2">
                <PollIcon width="20" height="20" fill="rgb(29, 155, 240)" />
              </div>
              <div className="rounded-full hover:bg-[#031018] cursor-pointer p-2">
                <EmojiIcon width="20" height="20" fill="rgb(29, 155, 240)" />
              </div>
              <div className="rounded-full hover:bg-[#031018] cursor-pointer p-2">
                <ScheduleIcon width="20" height="20" fill="rgb(29, 155, 240)" />
              </div>
              <div className="rounded-full   p-2">
                <LocationIcon
                  width="20"
                  height="20"
                  fill="rgba(13,68,105,255)"
                />
              </div>
            </div>
            <div className="flex items-center">
              {/* Character count */}
              <div>
                <CharacterCount inputText={inputText} />
              </div>
              <div className="flex justify-between items-center gap-5">
                <h1>+</h1>
                <button
                  disabled={inputText.trim() === ""}
                  className={`bg-white text-black font-bold py-1.5 px-4 rounded-full ${
                    inputText.trim() === ""
                      ? "bg-neutral-500"
                      : "hover:bg-neutral-100"
                  }`}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInput;
