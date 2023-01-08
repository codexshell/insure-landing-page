import data, { socialIcons } from "./data";
import logoUrl from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="text-center bg-n-very-light-gray py-24 bg-mobile-footer-bg-pattern bg-no-repeat px-6">
      <div className="flex flex-col items-center gap-8 border-b border-n-dark-grayish-violet pb-8">
        <div className="inline-block">
          <img src={logoUrl} alt="Insure logo" />
        </div>

        {/* social icons */}
        <div className="flex gap-8">
          {socialIcons.map(({ imgUrl }) => (
            <div className="cursor-pointer hover:brightness-0" key={imgUrl}>
                <img src={imgUrl} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* secondary navigation */}
      <div className="uppercase pt-8">
        {data.map(({ heading, links }) => (
          <div key={heading}>
            <h3
              className={`text-n-dark-grayish-violet ${
                heading !== "our company" && "mt-6"
              }`}
            >
              {heading}
            </h3>
            <ul className="mt-6">
              {links.map((link) => (
                <li className="mt-2" key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
