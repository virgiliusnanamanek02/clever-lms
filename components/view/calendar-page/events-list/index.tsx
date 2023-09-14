import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { events } from "@/data/events";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const EventsList: React.FC = () => {
  return (
    <ul role="list" className="">
      {events.map((event, index) => (
        <li
          className="flex justify-between items-center py-2 border border-dashed px-2 mb-2"
          key={index}
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
