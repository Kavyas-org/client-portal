const About = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section
        className="relative w-full h-[300px] md:h-[380px] flex items-center"
        style={{
          backgroundImage: "url('src/assets/about-imgs/image-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-semibold">
            About Us
          </h1>

          {/* SMALL LINE */}
          <div className="w-10 h-[2px] bg-red-500 mt-3"></div>

          {/* OPTIONAL SUBTEXT */}
          <p className="mt-3 text-sm opacity-90 max-w-md">
            Building excellence through innovation, sustainability and expertise
          </p>

        </div>

      </section>


      {/* COMPANY OVERVIEW */}
<section className="py-20">

  <div className="max-w-4xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-2xl md:text-3xl font-medium text-[#1f4c7c]">
      Corporate Profile
    </h2>

    {/* RED LINE */}
    <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

    {/* TEXT */}
    <p className="text-gray-600 text-sm leading-relaxed">
      Gammon Group Companies is a leading construction and engineering contractor,
      delivering high-quality infrastructure, building, and civil engineering projects
      across multiple regions. With decades of experience, the company has built a strong
      reputation for excellence, innovation, and reliability.
    </p>

    <p className="text-gray-600 text-sm leading-relaxed mt-4">
      Our expertise spans a wide range of sectors including commercial developments,
      infrastructure projects, and advanced engineering solutions. We are committed to
      delivering projects safely, efficiently, and sustainably while maintaining the
      highest standards of quality.
    </p>

  </div>

</section>




{/* SPLIT SECTION */}
<section className="py-20 bg-[#f8f9fb]">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* IMAGE */}
    <div>
      <img
        src="src/assets/News-images/image-1.png"
        className="w-full h-[350px] object-cover"
      />
    </div>

    {/* TEXT */}
    <div>

      <h3 className="text-xl font-medium text-[#1f4c7c] mb-4">
        Delivering Excellence in Construction
      </h3>

      <div className="w-10 h-[2px] bg-red-500 mb-4"></div>

      <p className="text-gray-600 text-sm leading-relaxed">
        With a strong foundation in engineering and project management,
        Gammon has successfully delivered numerous landmark projects.
        Our ability to manage complex construction challenges sets us apart
        in the industry.
      </p>

      <p className="text-gray-600 text-sm leading-relaxed mt-4">
        We integrate advanced technology and innovative construction methods
        to ensure efficiency, safety, and sustainability in all our projects.
      </p>

    </div>

  </div>

</section>


{/* CORPORATE PROFILE GRID */}
<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-center text-2xl font-medium text-[#1f4c7c] mb-12">
      Corporate Profile
    </h2>

    {/* GRID */}
    <div className="grid md:grid-cols-2">

      {/* ROW 1 */}
      <img src="src/assets/about-imgs/image-2.png" className="w-full h-[300px] object-cover" />

      <div className="bg-[#1f4c7c] text-white p-10 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-4">
          To be the Contractor of Choice
        </h3>
        <p className="text-sm leading-relaxed">
          Headquartered in Hong Kong, Gammon has a reputation for delivering
          high-quality projects throughout China and Southeast Asia. Our integrated
          business focuses on civil, building, foundations, electrical and mechanical,
          facades and interiors works.
        </p>
      </div>

      {/* ROW 2 */}
      <div className="bg-[#1f4c7c] text-white p-10 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-4">
          Customer Focused
        </h3>
        <p className="text-sm leading-relaxed">
          At Gammon, we focus on our customers' needs and have never been more
          committed to delivering high quality solutions.
        </p>
      </div>

      <img src="src/assets/about-imgs/image-3.png" className="w-full h-[300px] object-cover" />

      {/* ROW 3 */}
      <img src="src/assets/about-imgs/image-4.png" className="w-full h-[300px] object-cover" />

      <div className="bg-[#1f4c7c] text-white p-10 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-4">
          Local Presence, Global Strength
        </h3>
        <p className="text-sm leading-relaxed">
          We have a strong presence in Hong Kong, Singapore and across Asia,
          delivering world-class infrastructure and engineering solutions.
        </p>
      </div>

      {/* ROW 4 */}
      <div className="bg-[#1f4c7c] text-white p-10 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-4">
          Shareholders – Jardine Matheson
        </h3>
        <p className="text-sm leading-relaxed">
          Jardine Matheson is a diversified Asian-based group with strong
          presence across multiple sectors and industries.
        </p>
      </div>

      <img src="src/assets/about-imgs/image-5.png" className="w-full h-[300px] object-cover" />

      {/* ROW 5 */}
      <img src="src/assets/about-imgs/image-6.png" className="w-full h-[300px] object-cover" />

      <div className="bg-[#1f4c7c] text-white p-10 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-4">
          Shareholders – Balfour Beatty
        </h3>
        <p className="text-sm leading-relaxed">
          Balfour Beatty is a leading international infrastructure group that
          delivers complex engineering and construction projects.
        </p>
      </div>

    </div>

  </div>

</section>


{/* CORE VALUES - MISSION / VISION */}
<section className="bg-[#f2f4f7] py-20">

  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-2xl font-medium text-[#1f4c7c]">
      Core Values
    </h2>

    {/* RED LINE */}
    <div className="w-[2px] h-10 bg-red-600 mx-auto my-6"></div>

    {/* DESC */}
    <p className="text-gray-600 text-sm max-w-3xl mx-auto">
      Gammon has a set of Core Values that define our work ethic and guide our workforce
      in today’s rapidly changing and challenging world. The Core Values – Safety, Integrity
      and Excellence – have been incorporated into a philosophy called The Gammon Way.
    </p>

  </div>

  {/* GRID */}
  <div className="mt-12 grid md:grid-cols-2">

    {/* ROW 1 */}
    <img
      src="src/assets/about-imgs/image-7.png"
      className="w-full h-[320px] object-cover"
    />

    <div className="bg-[#1f4c7c] text-white flex flex-col justify-center items-center text-center px-10">
      <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
      <div className="w-6 h-[2px] bg-white mb-4"></div>
      <p className="text-sm max-w-xs leading-relaxed">
        To build for a better quality of life and living environment in a safe and sustainable manner.
      </p>
    </div>

    {/* ROW 2 */}
    <div className="bg-[#1f4c7c] text-white flex flex-col justify-center items-center text-center px-10">
      <h3 className="text-lg font-semibold mb-3">Our Vision</h3>
      <div className="w-6 h-[2px] bg-white mb-4"></div>
      <p className="text-sm max-w-sm leading-relaxed">
        To be the contractor of choice in Hong Kong, China and Southeast Asia. Deliver high quality,
        safely and responsibly through innovation and excellence.
      </p>
    </div>

    <img
      src="src/assets/about-imgs/image-8.png"
      className="w-full h-[320px] object-cover"
    />

  </div>

</section>

    </div>
  );
};

export default About;