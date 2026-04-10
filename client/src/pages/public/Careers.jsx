import React from "react";

const jobs = [
  { title: "Civil Engineer", date: "Posted 8-April-2026" },
  { title: "Site Engineer", date: "Posted 8-April-2026" },
  { title: "Project Engineer", date: "Posted 7-April-2026" },
  { title: "Construction Supervisor", date: "Posted 7-April-2026" },
  { title: "Site Supervisor", date: "Posted 7-April-2026" },
  { title: "Safety Officer", date: "Posted 6-April-2026" },
  { title: "QA/QC Engineer", date: "Posted 6-April-2026" },
  { title: "Quantity Surveyor", date: "Posted 6-April-2026" },
  { title: "Foreman", date: "Posted 5-April-2026" },
  { title: "Electrician", date: "Posted 5-April-2026" },
  { title: "Plumber", date: "Posted 5-April-2026" },
  { title: "Welder", date: "Posted 4-April-2026" },
  { title: "Fitter", date: "Posted 4-April-2026" },
  { title: "Steel Fixer", date: "Posted 4-April-2026" },
  { title: "Shuttering Carpenter", date: "Posted 3-April-2026" },
  { title: "Mason", date: "Posted 3-April-2026" },
  { title: "Tile Mason", date: "Posted 3-April-2026" },
  { title: "Painter", date: "Posted 2-April-2026" },
  { title: "Gypsum Worker", date: "Posted 2-April-2026" },
  { title: "HVAC Technician", date: "Posted 2-April-2026" },
  { title: "Pipe Fitter", date: "Posted 1-April-2026" },
  { title: "Mechanical Technician", date: "Posted 1-April-2026" },
  { title: "Crane Operator", date: "Posted 1-April-2026" },
  { title: "Excavator Operator", date: "Posted 1-April-2026" },
  { title: "Driver", date: "Posted 31-March-2026" },
  { title: "Helper", date: "Posted 31-March-2026" },
  { title: "Store Keeper", date: "Posted 30-March-2026" },
  { title: "Warehouse Assistant", date: "Posted 30-March-2026" },
  { title: "Document Controller", date: "Posted 30-March-2026" },
  { title: "Accountant", date: "Posted 29-March-2026" },
];

const Careers = () => {
  return (
    <div className="bg-[#f2f4f7]">

      {/* HERO */}
      {/* HERO */}
<section className="relative h-[50vh]">

  <img
    src="/carrer-img.png"
    className="w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* CONTENT */}
  <div className="absolute inset-0 flex items-center px-10 md:px-20 text-white">
    
    <div>
      <p className="text-sm opacity-80 mb-2">
        Home • Careers
      </p>

      <h1 className="text-3xl md:text-5xl font-semibold">
        A Place to Thrive.
      </h1>

      <p className="mt-3 text-sm md:text-base max-w-xl opacity-90">
        Join our team and build a rewarding career with one of the leading construction companies.
      </p>
    </div>

  </div>

</section>

      {/* JOB LIST */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-md shadow-sm p-8">

          <div className="border-t border-gray-200 mb-6"></div>

          {/* JOBS */}
          <div className="space-y-8">

            {jobs.map((job, i) => (
              <div
                key={i}
                className="flex items-center justify-between flex-wrap gap-4 border-b pb-6"
              >

                {/* LEFT */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1f4c7c]">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.date}
                  </p>
                </div>

                {/* RIGHT */}
                {/* <button className="border border-[#1f4c7c] text-[#1f4c7c] px-6 py-2 rounded hover:bg-[#1f4c7c] hover:text-white transition">
                  Apply
                </button> */}

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Careers;