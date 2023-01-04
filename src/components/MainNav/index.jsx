import { useState } from "react";
import iconCloseUrl from "../../assets/icon-close.svg";
import iconsOpenUrl from "../../assets/icon-hamburger.svg";

const navItems = ["how we work", "blog", "account", "view plans"];

export default function MainNav() {
  const [drawerOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-between p-6">
        <a href="#">
          <h1 className="font-header font-bold text-3xl tracking-wider">
            INSURE
          </h1>
        </a>

        <div className="cursor-pointer" onClick={() => setIsOpen(!drawerOpen)}>
          {drawerOpen ? (
            <img src={iconCloseUrl} alt="icon close image" />
          ) : (
            <img src={iconsOpenUrl} alt="icon open image" />
          )}
        </div>
      </div>

      {drawerOpen && (
        <div className="bg-n-very-dark-violet bg-mobile-nav-pattern bg-no-repeat bg-bottom">
          <ul className="flex flex-col items-center text-n-very-light-gray py-10 px-4 gap-2 min-h-screen">
            {navItems.map((item) => (
              <li className="uppercase text-xl w-full text-center">
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
      )}
    </nav>
  );
}
