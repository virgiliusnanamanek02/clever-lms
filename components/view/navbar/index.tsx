import React from "react";
import SearchBar from "../searchbar";
import UserMenu from "../user-menu";
import ModeToggle from "../mode-toggle";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between p-4">
      <SearchBar />
      <div className="flex justify-center items-center space-x-2">
        <ModeToggle />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
