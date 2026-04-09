const Business = () => {
  return (
    <div className="bg-[#f2f4f7]">

      {/* HERO */}
      <section
        className="relative h-[320px] md:h-[400px] flex items-center"
        style={{
          backgroundImage: "url('src/assets/bussiness-imgs/image-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Across Asia and Beyond
          </h1>
          <p className="text-sm mt-2 opacity-90">
            Shaping the landscapes of the regions in which we operate
          </p>
        </div>
      </section>

      {/* ================= HONG KONG ================= */}
      <section className="py-20 text-center">

        <h2 className="text-2xl text-[#1f4c7c] font-medium">Hong Kong</h2>
        <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

        <p className="text-gray-600 text-sm max-w-3xl mx-auto px-6">
Gammon has been based in Hong Kong since the 1950s, a period of tremendous change in the territory. Our history here began in 1955 with a single project - a new runway for Kai Tak Airport. Since then, we've grown significantly and by the 1970s had established a market-leading position for ourselves. Today, we continue to be a leader in the Hong Kong construction industry, having worked on many projects that have come to define the urban landscape of modern Hong Kong. These projects are visible everywhere, from power stations and the airport at Chek Lap Kok to the roads, bridges and underground railway that form an integral part of Hong Kong's infrastructure, as well as the offices and flats in which people live and work        </p>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-6">

          {/* LEFT BIG IMAGE */}
          <img
            src="src/assets/bussiness-imgs/hk.png"
            className="w-full h-[400px] object-cover"
          />

          {/* RIGHT GRID */}
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6,7,8,9].map((i) => (
              <img
                key={i}
                src={`src/assets/bussiness-imgs/hk${i}.png`}
                className="w-full h-28 object-cover"
              />
            ))}
          </div>

        </div>

      </section>

      {/* ================= SINGAPORE ================= */}
      <section className="py-20 text-center">

        <h2 className="text-2xl text-[#1f4c7c] font-medium">Singapore</h2>
        <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

        <p className="text-gray-600 text-sm max-w-3xl mx-auto px-6">
Gammon Pte. Limited (GPL), a subsidiary of Gammon, has been operating in Singapore since 1980. During this period, GPL has made a significant contribution to Singapore's infrastructure including the completion of many contracts for the Land Transport Authority, as well as several major projects in the commercial and petrochemical sectors.
<br />
Projects of note include MRT Havelock and Mayflower stations for the Thomson Line, Sensoryscape and intra-island cableway stations at Sentosa, upgrading of Woodsville Interchange, ITE College West – the first education public-private partnership project in Southeast Asia – and a Global Switch data centre.
<br />

Gammon is registered with the Building Construction Authority under the A1 category for building and civils work which allows GPL to participate in public tenders of unlimited contract value. GPL also has in-house M&E, piling and design capability.        </p>

        <button className="mt-6 border border-[#1f4c7c] text-[#1f4c7c] px-6 py-2 rounded-full text-sm">
          View More
        </button>

        <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-6">

          {/* BIG IMAGE */}
          <img
            src="src/assets/bussiness-imgs/image-2.png"
            className="w-full h-[400px] object-cover"
          />

          {/* SMALL IMAGES */}
          <div className="grid grid-cols-3 gap-3">
            <img src="src/assets/bussiness-imgs/image-3.png" className="w-full h-32 object-cover" />
            <img src="src/assets/bussiness-imgs/image-4.png" className="w-full h-32 object-cover" />
            <img src="src/assets/bussiness-imgs/image-5.png" className="w-full h-32 object-cover" />
            <img src="src/assets/bussiness-imgs/image-6.png" className="w-full h-32 object-cover" />
            <img src="src/assets/bussiness-imgs/image-7.png" className="w-full h-32 object-cover" />
            <img src="src/assets/bussiness-imgs/image-8.png" className="w-full h-32 object-cover" />
            <img src="src/assets/bussiness-imgs/image-9.png" className="w-full h-32 object-cover" />
            <img src="src/assets/bussiness-imgs/image-10.png" className="w-full h-32 object-cover" />
          </div>

        </div>

      </section>

      {/* ================= MAINLAND CHINA ================= */}
      {/* <section className="py-20 text-center">

        <h2 className="text-2xl text-[#1f4c7c] font-medium">Mainland China</h2>
        <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

        <p className="text-gray-600 text-sm max-w-3xl mx-auto px-6">
          Since 1981, Gammon has been operating in Mainland China...
        </p>

        <div className="mt-10">
          <img
            src="/images/china.jpg"
            className="mx-auto w-[400px] h-[250px] object-cover"
          />
        </div>

      </section> */}

      {/* ================= OTHER ASIA ================= */}
      {/* <section className="py-20 text-center">

        <h2 className="text-2xl text-[#1f4c7c] font-medium">
          Other Asian Countries
        </h2>
        <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

        <p className="text-gray-600 text-sm max-w-3xl mx-auto px-6">
          Since the 1980s, we have been expanding across Southeast Asia...
        </p>

        <div className="mt-10">
          <img
            src="/images/asia.jpg"
            className="mx-auto w-[400px] h-[250px] object-cover"
          />
        </div>

      </section> */}

    </div>
  );
};

export default Business;