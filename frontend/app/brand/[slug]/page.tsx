import WatchCard from "@/components/WatchCard/WatchCard";
// import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { getBrand, getBrandWatches } from "@/lib/api";

const WatchBrand = async (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const watches = await getBrandWatches(slug);
  const { subtitle } = await getBrand(slug);

  return (
    <>
      <section>
        <div>
          <div className="lg:w-3/4">
            <h1>{slug.toUpperCase()} Games</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>{slug.toUpperCase()} Brand </h2>
        <p>
          Checkout our latest collection of
          <span className="text-primary">{slug}</span> games
        </p>
        <div className="flex rounded gap-8 flex-wrap py-10">
          {watches.map((watch) => (
            <WatchCard
              key={watch._id}
              watchName={watch.name}
              imageUrl={watch.images[0].url}
              price={watch.price}
              slug={watch.slug.current}
            />
          ))}
        </div>
      </section>

      {/* <NewsLetter /> */}
    </>
  );
};

export default WatchBrand;
