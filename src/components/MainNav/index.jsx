import { useState } from "react";
import iconCloseUrl from "../../assets/icon-close.svg";
import iconsOpenUrl from "../../assets/icon-hamburger.svg";
import logoUrl from "../../assets/logo.svg";

const navItems = ["how we work", "blog", "account", "view plans"];

export default function MainNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isXl, setIsXl] = useState(false);

  const resizeObserver = new ResizeObserver((entries) => {
    // when the size of the body is greater than 1280px show main menu
    for (const entry of entries) {
      const borderBoxSize = entry.borderBoxSize[0];
      const inlineSize = borderBoxSize.inlineSize;
      if (inlineSize >= 1280) {
        setIsXl(true);
        setIsDrawerOpen(true);
      } else {
        setIsXl(false);
      }
    }
  });

  resizeObserver.observe(document.body);

  return (
    <nav>
      <div className="flex justify-between p-6 xl:p-8 items-center">
        <a href="#">
          <img src={logoUrl} alt="Insure logo" />
        </a>

        <div
          className="cursor-pointer xl:hidden"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? (
            <img src={iconCloseUrl} alt="icon close image" />
          ) : (
            <img src={iconsOpenUrl} alt="icon open image" />
          )}
        </div>
      </div>

      {isDrawerOpen && (
        <div className="bg-n-very-dark-violet bg-mobile-nav-pattern bg-no-repeat bg-bottom px-16">
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
      )}
    </nav>
  );
}
