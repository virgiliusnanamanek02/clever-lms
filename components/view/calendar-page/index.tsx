"use client";
import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "@/lib/generate-calendar";
import { cn } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import EventsList from "./events-list";
import { ScrollArea } from "@/components/ui/scroll-area";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const currentDate = dayjs();

const CalendarPage: React.FC = () => {
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-8 p-4">
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-semibold select-none">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-2 items-center">
            <ChevronLeftIcon
              className="w-4 h-4 transition-all cursor-pointer hover:scale-105"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="transition-all cursor-pointer hover:scale-105"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <ChevronRightIcon
              className="w-4 h-4 transition-all cursor-pointer hover:scale-105"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 border-t border-x bg-secondary">
          {days.map((day, index) => {
            return (
              <div
                className="grid place-content-center p-2 w-14 h-14"
                key={index}
              >
                <h1 className="text-sm text-center text-gray-500 select-none">
                  {day}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-7 border">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="grid place-content-center p-2 h-14 text-sm text-center"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-secondary font-bold rounded-full" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-primary text-white rounded-full"
                        : "",
                      "h-8 w-8  grid rounded-full place-content-center hover:bg-secondary hover:text-primary transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="">
        <div className="flex justify-start items-center">
          <h1 className="font-semibold">
            Schedule for {selectDate.toDate().toDateString()}
          </h1>
          <span>
            <PlusCircleIcon className="ml-2 w-6 h-6 cursor-pointer text-primary" />
          </span>
        </div>
        <ScrollArea className="pr-4 h-96">
          <div className="">
            <EventsList />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CalendarPage;
