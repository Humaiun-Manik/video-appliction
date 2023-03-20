import React from "react";
import searchImg from "./../../../assets/search.svg";

export default function Search() {
  return (
    <form>
      <input class="outline-none border-none mr-2" type="search" name="search" placeholder="Search" />
      <img class="inline h-4 cursor-pointer" src={searchImg} alt="Search" />
    </form>
  );
}
