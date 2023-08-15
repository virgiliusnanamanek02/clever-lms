import { minLength, maxLength, string, object } from "valibot";

export const EventSchema = object({
  title: string("Event title must be a string", [
    minLength(3, "Event title must be at least 3 characters"),
    maxLength(50, "Event title must be at most 50 characters"),
  ]),
  description: string("Event description must be a string", [
    minLength(3, "Event description must be at least 3 characters"),
    maxLength(500, "Event description must be at most 500 characters"),
  ]),
  date: string("Event date must be a string", [
    minLength(3, "Event date must be at least 3 characters"),
    maxLength(50, "Event date must be at most 50 characters"),
  ]),
});
