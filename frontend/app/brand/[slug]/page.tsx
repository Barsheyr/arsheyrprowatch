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
    <section className="">
      <section
        className="bg-black text-white relative py-16 md:py-20 bg-cover 
      bg-[url('https://images.unsplash.com/photo-1616353329454-4350ed03a0b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        <div className="mx-auto max-w-5xl px-20">
          <div className="lg:w-3/4 py-20 font-bold">
            <h1 className="text-4xl">{slug.toUpperCase()} Watches </h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl p-20 ">
        <h2 className="text-3xl">{slug.toUpperCase()} Brand </h2>
        <p>
          Checkout our latest collection of
          <span className="text-black"> {slug} </span> watch
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
    </section>
  );
};

export default WatchBrand;
