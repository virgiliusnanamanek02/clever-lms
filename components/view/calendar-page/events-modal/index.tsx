"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

interface EventModalProps {
  icon: React.ReactNode;
  isHover: boolean;
  title: string;
  description: string;
  hour: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const EventModal: React.FC<EventModalProps> = ({
  icon,
  isHover,
  title,
  description,
  hour,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{isHover ? icon : null}</PopoverTrigger>
      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 items-center w-full">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Name of your event"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="hour">Hour</Label>
              <Input
                id="hour"
                type="time"
                value={hour}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Add your description..."
                className="resize-none"
                value={description}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className="flex gap-2 justify-end mt-4">
          <Button>Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EventModal;
