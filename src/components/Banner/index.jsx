import Button from "../Button";

export default function Banner() {
  return (
    <div className="bg-p-dark-violet bg-mobile-how-we-work-bg-pattern bg-no-repeat bg-right-top text-center mx-6 px-4 py-20 text-n-very-light-gray">
      <h3 className="font-header text-4xl mb-8">
        Find out more about how we work
      </h3>

      <Button>How we work</Button>
    </div>
  );
}
