import CoursesPage from "@/components/view/courses";
import React from "react";
import subjectData from "@/data/subjets";

const Courses: React.FC = () => {
  return <CoursesPage data={subjectData} />;
};

export default Courses;
