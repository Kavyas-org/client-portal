import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
const Home = () => {
const videos = [
  "https://player.vimeo.com/video/957497389?h=9376fc67eb&background=1&badge=0&autopause=0&loop=1&autoplay=1&player_id=0&app_id=58479",
  "https://yourdomain.com/video2.mp4",
  "https://yourdomain.com/video3.mp4",
];

const [current, setCurrent] = useState(0);
const [showVideo, setShowVideo] = useState(false);

const newsData = [
  {
    img: "src/assets/News-images/image-1.png",
    date: "10 Feb 2026",
    title: "HKUST Partners with Industry Leaders to Pilot Nature-Related Assessment for Commercial Properties",
  },
  {
    img: "src/assets/News-images/image-2.png",
    date: "24 Oct 2025",
    title: "Hongkong Land pioneers Hong Kong's first tempered and laminated glass recycling solution",
  },
  {
    img: "src/assets/News-images/image-3.png",
    date: "1 Sep 2025",
    title: "Gammon Construction Supports the Renovation of Mother’s Choice’s Kwun Tong Service Centre",
  },
  {
    img: "src/assets/News-images/image-4.png",
    date: "19 May 2025",
    title: "Gammon Construction Celebrates Completion of Two Queensway Bridge Project",
  },
  {
    img: "src/assets/News-images/image-5.png",
    date: "18 Dec 2024",
    title: "Gammon Wins Mechanical Services Contract for Changi East Depot in Singapore",
  },
];

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // const next = () => {
  //   setCurrent((prev) => (prev + 1) % videos.length);
  // };

  // const prev = () => {
  //   setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  // };

  return (
    <div className="bg-white text-black">

      {/* HERO */}
<section className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden">

  {/* VIMEO VIDEO */}
  <div className="absolute inset-0 overflow-hidden">
    <iframe
      src="https://player.vimeo.com/video/957497389?h=9376fc67eb&background=1&autoplay=1&loop=1&muted=1"
      className="absolute top-1/2 left-1/2 min-w-[120%] min-h-[120%] -translate-x-1/2 -translate-y-1/2"
      frameBorder="0"
      allow="autoplay; fullscreen"
    ></iframe>
  </div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/20"></div>

</section>

      {/* LATEST NEWS - EXACT */}
<section className="bg-[#f2f4f7] py-24">

  <div className="max-w-8xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-4xl font-medium text-[#1f4c7c]">
      Latest News
    </h2>

    {/* RED LINE */}
    <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

    {/* DESCRIPTION */}
    <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
      The latest news from across our business, from project successes and industry awards through to
      corporate social initiatives and our application of the latest technology
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-5 gap-2 mt-14">

     {newsData.map((item, i) => (
  <div key={i} className="group cursor-pointer">

    {/* IMAGE */}
    <div className="overflow-hidden">
      <img
        src={item.img}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
    </div>

    {/* BLUE BOX */}
    <div className="bg-[#1f4c7c] text-white p-6 text-left h-[220px] flex flex-col justify-between">

      <div>
        <p className="text-xs opacity-80">{item.date}</p>
        <div className="w-6 h-[2px] bg-red-500 my-2"></div>

        <h3 className="text-sm leading-snug font-medium">
          {item.title}
        </h3>
      </div>

      <p className="text-xs mt-4 opacity-90">
        Read More &gt;
      </p>

    </div>

  </div>
))}

    </div>

    {/* BUTTON */}
    <button className="mt-12 border border-[#1f4c7c] text-[#1f4c7c] px-8 py-2 rounded-full text-sm hover:bg-[#1f4c7c] hover:text-white transition">
      View More
    </button>

  </div>

</section>


{/* OUR PROJECTS */}
<section className="bg-[#f2f4f7] py-24">

  <div className="max-w-8xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-medium text-[#1f4c7c]">
      Our Projects
    </h2>

    <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

    <p className="text-gray-600 text-sm max-w-2xl mx-auto">
      A selection of past and ongoing projects that showcase our diverse skills and our ability
      to deliver the most technically complex and challenging of works
    </p>

    {/* GRID */}
    <div className="grid md:grid-cols-4 h- gap-2 mt-12">

      {[
        { img: "src/assets/Projects-images/image-1.png", title: "Terminal 2 Expansion Works" },
        { img: "src/assets/Projects-images/image-2.png", title: "M+ Museum" },
        { img: "src/assets/Projects-images/image-3.png", title: "The Ocean Park Water World" },
        { img: "src/assets/Projects-images/image-4.png", title: "Advanced Manufacturing Centre (AMC)" },
      ].map((item, i) => (
        <div key={i} className="group cursor-pointer">

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={item.img}
              className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* BLUE STRIP */}
          <div className="bg-[#1f4c7c] text-white p-4 text-left">
            <p className="text-sm pb-10">{item.title}</p>
          </div>

        </div>
      ))}

    </div>

    {/* BUTTON */}
    <button className="mt-10 border border-[#1f4c7c] text-[#1f4c7c] px-8 py-2 rounded-full text-sm hover:bg-[#1f4c7c] hover:text-white transition">
      View More
    </button>

  </div>

</section>


{/* CORPORATE VIDEOS */}
<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-medium text-[#1f4c7c]">
      Corporate Videos
    </h2>

    <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
      Take a short tour of Gammon and learn more about who we are, what we excel at, and the methods
      that have helped earn our position as an industry leader
    </p>

    {/* VIDEO BLOCK */}
<div className="relative mt-12">

  {/* IMAGE */}
  <img
    src="src/assets/Single-img1.png"
    className="w-full h-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* PLAY BUTTON */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div
      onClick={() => setShowVideo(true)}
      className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition"
    >
<FaPlay className="text-white text-lg ml-1" />
    </div>
  </div>

  {/* TEXT */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl">
    Connecting Imagination
  </div>

</div>

    {/* DOTS */}
    {/* <div className="flex justify-center gap-2 mt-4">
      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
    </div> */}

  </div>

{showVideo && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setShowVideo(false)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>

    {/* VIDEO */}
    <div className="w-[90%] md:w-[70%] h-[60vh] md:h-[70vh]">
      <iframe
        src="https://player.vimeo.com/video/1027571478?h=96797ac092&autoplay=1&loop=1"
        className="w-full h-full rounded-lg"
        frameBorder="0"
        allow="autoplay; fullscreen"
      ></iframe>
    </div>

  </div>
)}

</section>


{/* CORE VALUES */}
<section className="bg-[#f2f4f7] py-24">

  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-3xl font-medium text-[#1f4c7c]">
      Core Values
    </h2>

    <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

    <p className="text-gray-600 text-sm max-w-2xl mx-auto">
      Our Core Values of Safety, Integrity and Excellence define our work ethic and guide our workforce in today's rapidly changing and challenging world.
    </p>

    {/* MAIN CONTAINER */}
    <div
      className="relative mt-12 py-16 px-10"
      style={{
        backgroundImage: "url('src/assets/core-values-imgs/image-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
    >

      <div className="grid md:grid-cols-2 items-center">

        {/* LEFT SIDE (ARROW IMAGE) */}
        <div className="flex justify-start">
          <img
            src="src/assets/core-values-imgs/image-2.png"
            className="w-[80%] md:w-[90%]"
          />
        </div>

        {/* RIGHT SIDE (HEXAGONS) */}
        <div className="flex justify-center md:justify-end items-center gap-6 mt-10 md:mt-0">

          <img
            src="src/assets/core-values-imgs/image-3.png"
            className="w-28 md:w-42"
          />

          <img
            src="src/assets/core-values-imgs/image-4.png"
            className="w-28 md:w-42 mt-10"
          />

          <img
            src="src/assets/core-values-imgs/image-5.png"
            className="w-28 md:w-42"
          />

        </div>

      </div>

    </div>

  </div>

</section>



{/* SUSTAINABILITY + INNOVATION */}
<section className="bg-white">

  {/* TOP GRID */}
  <div className="grid md:grid-cols-2 gap-1">

    {/* LEFT - SUSTAINABILITY */}
    <div
      className="relative h-[350px] md:h-[420px] flex items-center"
      style={{
        backgroundImage: "url('src/assets/extra-images/image-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-white px-10 max-w-lg">
        <h2 className="text-3xl font-semibold mb-4">Sustainability</h2>

        <p className="text-sm leading-relaxed opacity-90">
          We prioritise responsible corporate citizenship, ensuring we operate with integrity,
          transparency and accountability. We take seriously our responsibility to create innovative
          and sustainable solutions.
        </p>

        <button className="mt-6 border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>
    </div>

    {/* RIGHT - INNOVATION */}
    <div
      className="relative h-[350px] md:h-[420px] flex items-center"
      style={{
        backgroundImage: "url('src/assets/extra-images/image-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-white px-10 max-w-lg">
        <h2 className="text-3xl font-semibold mb-4">Innovation</h2>

        <p className="text-sm leading-relaxed opacity-90">
          We are using innovation and technology to drive change within both our business and the
          industry itself, embracing new materials and robotics to improve safety and productivity.
        </p>

        <button className="mt-6 border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>
    </div>

  </div>

  {/* CAREERS FULL WIDTH */}
  <div
    className="relative h-[350px] md:h-[420px] flex items-center justify-center text-center mt-1"
    style={{
      backgroundImage: "url('src/assets/extra-images/image-3.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* CONTENT */}
    <div className="relative z-10 text-white px-6 max-w-2xl">
      <h2 className="text-3xl font-semibold mb-4">Careers</h2>

      <p className="text-sm leading-relaxed opacity-90">
        If you are looking for a challenging and rewarding career in construction, consider a position
        with an industry leader. We offer excellent opportunities for growth and development.
      </p>

      <button className="mt-6 border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
        Learn More
      </button>
    </div>
  </div>

</section>

    </div>
  );
};

export default Home;