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
    <nav>
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
        className="bg-n-very-dark-violet bg-mobile-nav-pattern bg-no-repeat bg-bottom px-16 hidden xl:block"
      >
        <ul className="flex flex-col items-center text-n-very-light-gray py-10 px-4 gap-2 min-h-[75vh] md:min-h-[65vh] lg:min-h-[50vh]">
          {navItems.map((item) => (
            <li className="uppercase text-xl w-full text-center" key={item}>
              <a
                className={`w-full h-full inline-block py-4 hover:bg-n-very-light-gray hover:text-n-very-dark-violet active:bg-n-very-dark-violet active:text-n-very-light-gray ${
                  item.toLowerCase() === "view plans" && "border-2"
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
