"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import ProgressBar from "../../charts/progress-bar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDataType } from "@/types/card-type";

interface SubjectCardProps {
  data: CardDataType;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-medium text-primary">
          {data.subject}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 mb-4">
          <div className="flex justify-between items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={data.avatar} />
                <AvatarFallback>{data.acronym}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">
                  {data.professor}
                </p>
                <p className="text-sm text-muted-foreground">{data.email}</p>
              </div>
            </div>
          </div>
        </div>
        <ProgressBar progressValue={data.progress} />
        <small className="text-sm text-muted-foreground">
          Your progress: <span className="text-primary">{data.progress}%</span>
        </small>
      </CardContent>
      <CardFooter className="">
        <Button variant="secondary" className="justify-center w-full">
          View Class
          <ArrowLongRightIcon className="ml-2 w-6 h-6" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
