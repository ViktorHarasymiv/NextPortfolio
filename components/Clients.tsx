import React from "react";
import { InfiniteMovingCards } from "./ui/InfinitMiviedCard";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden mt-10 max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 px-3">
            {companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={nameImg} className="md:w-24 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
