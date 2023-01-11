export default function Feature({ feature }) {
  return (
    <div className="[&:not(:first-child)]:mt-14 [&:not(:first-child)]:xl:mt-0 basis-1/2">
      <div className="inline-block">
        <img src={feature.img} alt="" />
      </div>

      <h3 className="font-header text-3xl mt-6">{feature.name}</h3>

      <p className="mt-5 text-n-dark-grayish-violet">{feature.description}</p>
    </div>
  );
}
