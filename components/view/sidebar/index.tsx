"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Squares2X2Icon,
  AcademicCapIcon,
  Cog6ToothIcon,
  CalendarIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState(""); // State untuk melacak tautan aktif

  React.useEffect(() => {
    const savedActiveLink = localStorage.getItem("activeLink");
    if (savedActiveLink) {
      setActiveLink(savedActiveLink);
    }
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  };

  return (
    <div className="flex flex-col justify-start py-4 space-y-4 h-screen">
      <div className="py-2 px-3">
        <h1 className="px-4 text-3xl font-bold text-primary">
          Clever<span className="text-black">.</span>
        </h1>
      </div>
      <div className="py-2 px-3">
        <div className="space-y-1">
          <Link href="/overview">
            <Button
              variant={activeLink === "/overview" ? "secondary" : "ghost"} // Mengubah varian berdasarkan tautan aktif
              className="justify-start w-full"
              onClick={() => handleLinkClick("/overview")} // Mengatur tautan aktif saat tombol diklik
            >
              <Squares2X2Icon className="mr-2 w-6 h-6" />
              Overview
            </Button>
          </Link>
          <Link href="/courses">
            <Button
              variant={activeLink === "/courses" ? "secondary" : "ghost"}
              className="justify-start w-full"
              onClick={() => handleLinkClick("/courses")}
            >
              <AcademicCapIcon className="mr-2 w-6 h-6" />
              Courses
            </Button>
          </Link>
          <Link href="/tasks">
            <Button
              variant={activeLink === "/tasks" ? "secondary" : "ghost"}
              className="justify-start w-full"
              onClick={() => handleLinkClick("/tasks")}
            >
              <ListBulletIcon className="mr-2 w-6 h-6" />
              Tasks
            </Button>
          </Link>
          <Link href="schedule">
            <Button
              variant={activeLink === "/schedule" ? "secondary" : "ghost"}
              className="justify-start w-full"
              onClick={() => handleLinkClick("/schedule")}
            >
              <CalendarIcon className="mr-2 w-6 h-6" />
              Schedule
            </Button>
          </Link>
        </div>
      </div>
      <div className="py-2 px-3 mt-auto">
        <div className="space-y-1">
          <Link href="/settings">
            <Button
              variant={activeLink === "/settings" ? "secondary" : "ghost"}
              className="justify-start w-full"
              onClick={() => handleLinkClick("/settings")}
            >
              <Cog6ToothIcon className="mr-2 w-6 h-6" />
              Settings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
