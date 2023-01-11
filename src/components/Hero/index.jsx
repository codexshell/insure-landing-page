import mobileIntroImage from "../../assets/image-intro-mobile.jpg";
import Button from "../Button";
import desktopIntroRightBgPattern from "../../assets/bg-pattern-intro-right-desktop.svg";
import desktopIntroImage from "../../assets/image-intro-desktop.jpg";

export default function Hero() {
  return (
    <div className="xl:py-32 xl:px-16 bg-p-dark-violet relative xl:flex">
      <div className="absolute top-0 right-0 hidden sm:block">
        <img src={desktopIntroRightBgPattern} alt="" />
      </div>
      <div className="xl:basis-1/2 order-1 relative">
        <img
          className="mx-auto xl:absolute right-0"
          srcSet={`${mobileIntroImage} 375w, ${desktopIntroImage} 540w`}
          sizes="(max-width: 600px) 480px,
                  540px"
          src={mobileIntroImage}
          alt="an image of a family walking"
        />
      </div>

      <div className="xl:flex flex-col xl:basis-1/2 xl:p-0 px-5 sm:px-32 md:px-48 lg:px-80 py-28 text-n-very-light-gray text-center xl:text-start bg-mobile-intro-left-pattern bg-no-repeat sm:bg-none">
        <hr className="hidden xl:block border-t-1 border-n-very-light-gray w-40" />
        <h1 className="font-header text-5xl xl:text-7xl xl:mt-16">Humanitizing your insurance.</h1>
        <p className="mt-6 font-normal mb-8">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <a href="#">
          <Button>View Plans</Button>
        </a>
      </div>
    </div>
  );
}
