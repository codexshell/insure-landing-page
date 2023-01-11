import Feature from "../Feature";
import { features } from "./data";

export default function Features() {
  return (
    <section className="text-center xl:text-start py-32 px-[18px]">
      <hr className="border-t border-n-dark-grayish-violet w-44 mx-auto xl:mx-0" />

      <h2 className="font-header text-5xl mt-10 xl:mt-14 xl:text-7xl">We're different</h2>

      <div className="mt-20 xl:flex xl:gap-10">
        {features.map((feature) => (
          <Feature feature={feature} key={feature.name} />
        ))}
      </div>
    </section>
  );
}
