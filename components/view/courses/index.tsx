import React from "react";
import SubjectCard from "../cards/subject";
import { CardDataType } from "@/types/card-type";

interface CousesPageProps {
  data: CardDataType[];
}

const CoursesPage: React.FC<CousesPageProps> = ({ data }) => {
  return (
    <section className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Courses</h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <SubjectCard data={item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CoursesPage;
