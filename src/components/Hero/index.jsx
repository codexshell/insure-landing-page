import mobileIntroImage from "../../assets/image-intro-mobile.jpg";
import Button from "../Button";
import desktopIntroLeftBgPattern from "../../assets/bg-pattern-intro-right-desktop.svg";
import desktopIntroImage from "../../assets/image-intro-desktop.jpg";

export default function () {
  return (
    <div className="bg-p-dark-violet relative sm:px-16">
      <div className="absolute top-0 right-0">
        <img src={desktopIntroLeftBgPattern} alt="" />
      </div>
      <div>
        <img
          className="mx-auto"
          src={mobileIntroImage}
          alt="an image of a family walking"
        />
      </div>

      <div className="px-5 py-28 text-n-very-light-gray text-center bg-mobile-intro-left-pattern bg-no-repeat sm:bg-none">
        <h1 className="font-header text-5xl">Humanitizing your insurance.</h1>
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
