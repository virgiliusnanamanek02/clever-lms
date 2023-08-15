import React from "react";
import { Button } from "@/components/ui/button";
import {
  Squares2X2Icon,
  AcademicCapIcon,
  Cog6ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CalendarIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Sidebar: React.FC = () => {
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
            <Button variant="secondary" className="justify-start w-full">
              <Squares2X2Icon className="mr-2 w-6 h-6" />
              Overview
            </Button>
          </Link>
          <Link href="/courses">
            <Button variant="ghost" className="justify-start w-full">
              <AcademicCapIcon className="mr-2 w-6 h-6" />
              Courses
            </Button>
          </Link>
          <Link href="/tasks">
            <Button variant="ghost" className="justify-start w-full">
              <ListBulletIcon className="mr-2 w-6 h-6" />
              Tasks
            </Button>
          </Link>
          <Link href="schedule">
            <Button variant="ghost" className="justify-start w-full">
              <CalendarIcon className="mr-2 w-6 h-6" />
              Schedule
            </Button>
          </Link>
        </div>
      </div>
      <div className="py-2 px-3 mt-auto">
        <div className="space-y-1">
          <Button variant="ghost" className="justify-start w-full">
            <Cog6ToothIcon className="mr-2 w-6 h-6" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
