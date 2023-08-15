import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const events = [
  {
    event: "View house with real estate agent",
    date: "2023-08-10",
    time: "10:00 AM",
  },
  {
    event: "Meeting with clients",
    date: "2023-08-12",
    time: "2:30 PM",
  },
  {
    event: "Conference call with team",
    date: "2023-08-15",
    time: "11:00 AM",
  },
  {
    event: "Lunch with business partner",
    date: "2023-08-18",
    time: "12:30 PM",
  },
  {
    event: "Gym workout",
    date: "2023-08-20",
    time: "5:00 PM",
  },
  {
    event: "Dinner reservation",
    date: "2023-08-22",
    time: "7:00 PM",
  },
  {
    event: "Doctor's appointment",
    date: "2023-08-25",
    time: "9:15 AM",
  },
  {
    event: "Visit art exhibition",
    date: "2023-08-28",
    time: "3:00 PM",
  },
  {
    event: "Movie night",
    date: "2023-08-30",
    time: "8:30 PM",
  },
  {
    event: "Shopping for groceries",
    date: "2023-09-02",
    time: "10:00 AM",
  },
];

const EventsList: React.FC = () => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {events.map((event) => (
        <li
          className="flex justify-between items-center py-6"
          key={event.event}
        >
          <div className="">
            <p className="text-sm font-medium text-gray-900">{event.event}</p>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="text-sm text-gray-500">{event.time}</p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <EllipsisVerticalIcon className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Remove</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EventsList;
