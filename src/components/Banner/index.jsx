import Button from "../Button";

export default function Banner() {
  return (
    <div className="xl:flex justify-around items-center bg-p-dark-violet bg-mobile-how-we-work-bg-pattern xl:bg-desktop-how-we-work-bg-pattern bg-no-repeat bg-right-top text-center xl:text-start mx-6 px-4 py-20 xl:py-16 text-n-very-light-gray">
      <h3 className="font-header text-4xl xl:text-6xl mb-8 xl:m-0 basis-1/2 xl:px-6">
        Find out more about how we work
      </h3>

      <div>
        <Button>How we work</Button>
      </div>
    </div>
  );
}
