import React from "react";

const RightSidebar = () => {
  return (
    <div className="w-[350px] z-40 pl-4 mr-4 hidden lg:block">
      {/* Search */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md py-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-900 text-white border border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:border-[#1d9bf0]"
        />
      </div>

      {/* Subscribe to Premium */}
      <div className="bg-gray-900 rounded-xl p-4 mt-4">
        <h2 className="text-xl font-bold">Subscribe to Premium</h2>
        <p className="text-gray-500 mt-2">
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-bold py-2 px-4 rounded-full mt-4 w-full">
          Subscribe
        </button>
      </div>

      {/* Who to Follow */}
      <div className="bg-gray-900 rounded-xl p-4 mt-4">
        <h2 className="text-xl font-bold">Who to follow</h2>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-600 rounded-full" />
              <div>
                <p className="font-bold">Countdown ⏳</p>
                <p className="text-gray-500">@Countdown</p>
              </div>
            </div>
            <button className="bg-white text-black font-bold py-1 px-4 rounded-full">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-600 rounded-full" />
              <div>
                <p className="font-bold">SportsCenter</p>
                <p className="text-gray-500">@SportsCenter</p>
              </div>
            </div>
            <button className="bg-white text-black font-bold py-1 px-4 rounded-full">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-600 rounded-full" />
              <div>
                <p className="font-bold">NBC Sports</p>
                <p className="text-gray-500">@NBCSports</p>
              </div>
            </div>
            <button className="bg-white text-black font-bold py-1 px-4 rounded-full">
              Follow
            </button>
          </div>
        </div>
        <button className="text-[#1d9bf0] mt-2">Show more</button>
      </div>

      {/* Trending Now */}
      <div className="bg-gray-900 rounded-xl p-4 mt-4">
        <h2 className="text-xl font-bold">Trending now</h2>
        <div className="mt-4">
          <p className="text-gray-500">WhatSs happening</p>
          <div className="mt-2">
            <p className="font-bold">Grok 3 is here. Try it for free.</p>
            <p className="text-gray-500">LIVE</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-500">Trending in Portugal</p>
            <p className="font-bold">Tiago Grila</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-500">Trending in Portugal</p>
            <p className="font-bold">Ruy de Carvalho</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-500">Trending in Portugal</p>
            <p className="font-bold">Peculiar</p>
            <p className="text-gray-500">4,242 posts</p>
          </div>
          <div className="mt-2">
            <p className="text-gray-500">Trending in Portugal</p>
            <p className="font-bold">Hugo Soares</p>
          </div>
        </div>
        <button className="text-[#1d9bf0] mt-2">Show more</button>
      </div>

      {/* Footer Links */}
      <div className="text-gray-500 text-sm mt-4 flex flex-wrap gap-2">
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Cookie Policy
        </a>
        <a href="#" className="hover:underline">
          Accessibility
        </a>
        <a href="#" className="hover:underline">
          Ads info
        </a>
        <span>More etc etc you know how X is</span>
      </div>
    </div>
  );
};

export default RightSidebar;
