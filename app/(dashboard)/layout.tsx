import React from "react";
import Sidebar from "@/components/view/sidebar";
import Navbar from "@/components/view/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Navbar />
        <ScrollArea className="h-[88vh]">
          <div className="py-4">{children}</div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DashboardLayout;
