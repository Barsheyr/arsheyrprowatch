import React from "react";
import Hero from "@/components/home/Hero";
import BrandSample from "@/components/home/BrandSample";
import Testimonial from "@/components/home/Testimonial";
import WatchCard from "@/components/WatchCard/WatchCard";
import Container from "@/components/global/Container";

const page = () => {
  return (
    <section>
      <div className="bg-black">
        <Hero />
      </div>
      <BrandSample />

      <section className="py-20">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold"> Our Latest Products </h2>
          </div>

          <div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
              {watches.map((game) => (
                <WatchCard
                  key={game.id}
                  watchName={game.name}
                  imageUrl={game.image}
                  slug={game.slug}
                  price={game.price}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Testimonial />
    </section>
  );
};

export default page;

const watches = [
  {
    id: 1,
    price: 12,
    name: "Watch1",
    slug: "watch1",
    image:
      "https://images.unsplash.com/photo-1444881421460-d838c3b98f95?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    price: 14,
    name: "Watch2",
    slug: "watch2",
    image:
      "https://images.unsplash.com/photo-1488132828189-4e416661b680?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    price: 42,
    name: "Watch3 ",
    slug: "watch3",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheSUyMHN0YXRpb24lMjBmaWZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    price: 27,
    name: "Watch4",
    slug: "watch4",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
