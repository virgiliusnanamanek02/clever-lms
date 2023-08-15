import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  progressValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressValue }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressValue), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Progress value={progress} className="w-full h-2" />
    </div>
  );
};

export default ProgressBar;
