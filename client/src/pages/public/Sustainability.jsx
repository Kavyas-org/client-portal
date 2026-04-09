import React from "react";

const data = [
  { img: "src/assets/sust-imgs/image-1.png", title: "On the path to net zero energy" },
  { img: "src/assets/sust-imgs/image-2.png", title: "Double wins at the Hong Kong Awards for Environmental Excellence" },
  { img: "src/assets/sust-imgs/image-3.png", title: "Gammon introduces the first battery-powered crawler crane to Hong Kong to reduce carbon emissions" },
  { img: "src/assets/sust-imgs/image-4.png", title: "Building Belonging through Allyship" },
  { img: "src/assets/sust-imgs/image-5.png", title: "Technology meets environment on Sai Sha Road project" },
  { img: "src/assets/sust-imgs/image-6.png", title: "Working towards Zero Carbon" },
  { img: "src/assets/sust-imgs/image-7.png", title: "Gammon Construction becomes first company in Hong Kong to be Verified Against ISO 14064" },
  { img: "src/assets/sust-imgs/image-8.png", title: "Gammon becomes the first company in Hong Kong to achieve WELL Gold" },
  { img: "src/assets/sust-imgs/image-9.png", title: "Conservation of Giant Native Twin Trees" },
  { img: "src/assets/sust-imgs/image-10.png", title: "Next-generation Clean Power for Construction Sites" },
  { img: "src/assets/sust-imgs/image-11.png", title: "Gammon Going Solar" },
  { img: "src/assets/sust-imgs/image-12.png", title: "Taking the BMI pledge" },
  { img: "src/assets/sust-imgs/image-13.png", title: "Early Collaboration Reduces Environmental Impacts" },
  { img: "src/assets/sust-imgs/image-14.png", title: "Avoiding Timber Waste at One Taikoo Place" },
  { img: "src/assets/sust-imgs/image-15.png", title: "Clutch Pipe Pile Design for Deep Excavations" },
];

const Sustainability = () => {
  return (
    <div className="bg-[#f2f4f7]">

      {/* HERO */}
      <section className="relative h-[70vh]">
        <img
          src="src/assets/extra-images/image-1.png"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 md:px-20 text-white">
          <p className="text-sm mb-2 opacity-80">
            Home • Sustainability • Highlights
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Showcasing Sustainability
          </h1>

          <p className="max-w-xl text-sm md:text-base opacity-90">
            Committed to being a responsible business by providing best practice
            solutions that bring positive change to the environment and community.
          </p>
        </div>
      </section>

      {/* TITLE */}
      <section className="py-16 text-center">
        <h2 className="text-2xl text-[#1f4c7c] font-medium">
          Highlights
        </h2>
        <div className="w-[2px] h-10 bg-red-600 mx-auto my-4"></div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6  pb-20">

        <div className="grid sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">

          {data.map((item, i) => (
            <div key={i} className="group">

              {/* IMAGE */}
              <div className="h-[200px] overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TEXT */}
              <div className="bg-[#1f4c7c] text-white p-4 min-h-[120px] flex items-start">
                <p className="text-sm leading-snug">
                  {item.title}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Sustainability;