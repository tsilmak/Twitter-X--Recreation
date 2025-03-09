"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import {
  GrokIcon,
  HomeIcon,
  ActiveHomeIcon,
  XLogo,
  SearchIcon,
  ActiveSearchIcon,
  ActiveNotificationIcon,
  NotificationIcon,
  MessageIcon,
  ActiveMessageIcon,
  ActiveGrokIcon,
  CommunitiesIcon,
  ActiveCommunitiesIcon,
  PremiumIcon,
  VerifiedOrgIcon,
  ActiveProfileIcon,
  ProfileIcon,
  MoreIcon,
  PostIcon,
  ActivePremiumIcon,
  ActiveBookmarkIcon,
  BookmarkIcon,
  JobsIcon,
} from "@/utils/icons";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const moreItems = [
    "Lists",
    "Bookmarks",
    "Monetization",
    "Ads",
    "Jobs",
    "Create your Space",
  ];

  const navItems = [
    {
      icon: pathname === "/home" ? ActiveHomeIcon : HomeIcon,
      text: "Home",
      path: "/home",
    },
    {
      icon: pathname === "/explore" ? ActiveSearchIcon : SearchIcon,
      text: "Explore",
      path: "/explore",
    },
    {
      icon:
        pathname === "/notifications"
          ? ActiveNotificationIcon
          : NotificationIcon,
      text: "Notifications",
      path: "/notifications",
    },
    {
      icon: pathname === "/messages" ? ActiveMessageIcon : MessageIcon,
      text: "Messages",
      path: "/messages",
    },
    {
      icon: pathname === "/i/grok" ? ActiveGrokIcon : GrokIcon,
      text: "Grok",
      path: "/i/grok",
    },
    {
      icon: pathname === "/i/bookmarks" ? ActiveBookmarkIcon : BookmarkIcon,
      text: "Bookmarks",
      path: "/i/bookmarks",
    },
    {
      icon: JobsIcon,
      text: "Jobs",
      path: "/jobs",
    },
    {
      icon: pathname.endsWith("/communities/explore")
        ? ActiveCommunitiesIcon
        : CommunitiesIcon,
      text: "Communities",
      path: "/username/communities/explore",
    },
    {
      icon: pathname === "/i/premium_sign_up" ? ActivePremiumIcon : PremiumIcon,
      text: "Premium",
      path: "/i/premium_sign_up",
    },
    {
      icon: VerifiedOrgIcon,
      text: "Verified Orgs",
      path: "/i/organizations",
    },
    {
      icon: pathname === "/username" ? ActiveProfileIcon : ProfileIcon,
      text: "Profile",
      path: "/username",
    },
    {
      icon: MoreIcon,
      text: "More",
      path: "#",
    },
  ];

  return (
    <nav className="fixed h-screen w-20 xl:w-64 bg-black text-white flex flex-col items-center border-r border-gray-800">
      {/* X Logo */}
      <div className="ml-6 w-full">
        <button className="hover:bg-colorHover rounded-full p-3.5 transition-all duration-200 active:bg-gray-800">
          <XLogo />
        </button>
      </div>

      {/* Navigation Items */}
      <ul className="w-full px-3.5 mr-1 relative">
        {navItems.map((item, index) => {
          const isMoreItem = item.text === "More";
          const isActive =
            item.text === "Communities"
              ? pathname.endsWith("/communities/explore")
              : pathname === item.path;

          return (
            <li key={index} className="relative">
              {isMoreItem ? (
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className="mb-4 w-full flex items-center justify-start group hover:bg-colorHover rounded-full p-4 transition-all duration-200 active:bg-gray-800"
                >
                  <item.icon width="24" height="24" fill="white" />
                  <span
                    className={`ml-0 xl:ml-5 text-xl hidden xl:inline group-hover:text-gray-200 transition-colors duration-200 ${
                      isActive ? "font-bold" : ""
                    }`}
                  >
                    {item.text}
                  </span>
                </button>
              ) : (
                <Link href={item.path} className="block">
                  <button className="w-full flex items-center justify-start group hover:bg-colorHover rounded-full p-4 transition-all duration-200 active:bg-gray-800">
                    <item.icon width="24" height="24" fill="white" />
                    <span
                      className={`ml-5 mr-2 text-xl hidden xl:inline group-hover:text-gray-200 transition-colors duration-200 ${
                        isActive ? "font-bold" : ""
                      }`}
                    >
                      {item.text}
                    </span>
                  </button>
                </Link>
              )}

              {/* More dropdown */}
              {isMoreItem && isMoreOpen && (
                <div className="absolute left-full top-0 xl:left-0 xl:mt-14 w-64 bg-black border border-gray-800 rounded-lg shadow-lg z-10">
                  {moreItems.map((moreItem, idx) => (
                    <Link
                      key={idx}
                      href={`/${moreItem.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 hover:bg-gray-900 text-white"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {moreItem}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}

        {/* Post Button */}
        <div className="mt-2 w-full">
          <button className="dark:bg-white dark:hover:bg-neutral-100 dark:text-black font-bold rounded-full w-full h-12 flex items-center justify-center transition-all duration-200 active:bg-blue-700 shadow-lg hover:shadow-xl">
            <span className="hidden xl:inline">Post</span>
            <PostIcon className="inline xl:hidden" />
          </button>
        </div>
      </ul>

      {/* Spacer to push profile to bottom */}
      <div className="flex-grow"></div>

      {/* Profile Section */}
      <div className="w-full px-3.5 mb-4 cursor-pointer">
        <div className="flex items-center justify-start p-3 hover:bg-colorHover rounded-full transition-all duration-200">
          <ProfileIcon />
          <span className="hidden xl:inline mx-4 text-lg">Profile Bottom</span>
          <MoreIcon className="hidden xl:inline" />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
