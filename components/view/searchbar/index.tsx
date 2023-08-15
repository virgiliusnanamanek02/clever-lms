import React from "react";
import { Input } from "@/components/ui/input";

const SearchBar: React.FC = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
};

export default SearchBar;
