import React from "react";
import SubjectCard from "../cards/subject";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import subjectData from "@/data/subjets";
import CalendarComponent from "../calendar";

const OverviewPage: React.FC = () => {
  const displayLastThreeData = subjectData.slice(-3);
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 px-4">
      <div className="col-span-2 p-4 border">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Class Overview</h1>
          <Button variant="link">See All</Button>
        </div>
        <ScrollArea>
          <div className="flex space-x-4">
            {displayLastThreeData.map((data) => (
              <SubjectCard data={data} key={data.id} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="col-start-3 p-4 border">
        <div className="flex justify-center items-center">
          <CalendarComponent />
        </div>
      </div>
      <div className="col-start-3 row-start-2">7</div>
      <div className="col-span-2 col-start-1 row-start-2">8</div>
    </div>
  );
};

export default OverviewPage;
