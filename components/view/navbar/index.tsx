import React from "react";
import SearchBar from "../searchbar";
import UserMenu from "../user-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between p-4">
      <SearchBar />
      <UserMenu />
    </nav>
  );
};

export default Navbar;
