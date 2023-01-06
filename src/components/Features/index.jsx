import Feature from "../Feature";
import { features } from "./data";

export default function Features() {
  return (
    <section className="text-center py-32 px-[18px]">
      <hr className="border-t border-p-dark-violet bg-p-dark-violet w-44 mx-auto" />

      <h1 className="font-header text-5xl mt-10">We're different</h1>

      <div className="mt-20">
        {features.map((feature) => (
          <Feature feature={feature} />
        ))}
      </div>
    </section>
  );
}
