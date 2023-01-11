import { useState } from "react";
import iconCloseUrl from "../../assets/icon-close.svg";
import iconsOpenUrl from "../../assets/icon-hamburger.svg";
import logoUrl from "../../assets/logo.svg";

const navItems = ["how we work", "blog", "account", "view plans"];

export default function MainNav() {
  const handleClick = () => {
    const openIcon = document.querySelector("#openIcon");
    const closeIcon = document.querySelector("#closeIcon");
    const drawer = document.querySelector("#drawer");

    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    drawer.classList.toggle("hidden");
  };

  return (
    <nav className="xl:flex justify-between xl:px-36 2xl:px-40">
      <div className="flex justify-between p-6 xl:p-8 items-center">
        <a href="#">
          <img src={logoUrl} alt="Insure logo" />
        </a>

        <div onClick={handleClick} className="cursor-pointer xl:hidden">
          <img
            id="closeIcon"
            src={iconCloseUrl}
            alt="icon close image"
            className="hidden"
          />
          <img id="openIcon" src={iconsOpenUrl} alt="icon open image" />
        </div>
      </div>

      <div
        id="drawer"
        className="bg-n-very-dark-violet xl:bg-white bg-mobile-nav-pattern xl:bg-none bg-no-repeat bg-bottom px-16 hidden xl:flex"
      >
        <ul className="flex flex-col xl:flex-row items-center text-n-very-light-gray xl:text-n-dark-grayish-violet py-10 xl:py-0 px-4 gap-2 min-h-[75vh] md:min-h-[65vh] lg:min-h-[50vh] xl:min-h-fit">
          {navItems.map((item) => (
            <li
              className="uppercase text-xl xl:text-base w-full xl:w-auto text-center"
              key={item}
            >
              <a
                className={`w-full h-full inline-block py-4 xl:hover:text-n-very-dark-violet active:bg-n-very-light-gray xl:active:bg-n-very-dark-violet xl:active:text-n-very-light-gray active:text-n-very-dark-violet xl:px-6 xl:py-2 ${
                  item.toLowerCase() === "view plans" &&
                  "border-2 xl:border-n-very-dark-violet"
                }`}
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
