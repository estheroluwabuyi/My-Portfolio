import React from "react";

function AboutMe() {
  return (
    <div className="px-6 py-10 md:px-20 md:py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        About Me
      </h1>

      <p className="text-lg md:text-xl text-neutral-800 mb-10 text-center">
        Hi! I’m Esther, a passionate Frontend Developer with a love for creating
        clean and user-friendly web experiences. I enjoy learning new
        technologies and bringing ideas to life.
      </p>

      {/* Timeline Section */}
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          My Journey
        </h2>

        <div className="flex flex-col gap-6">
          {/* Timeline Item */}
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-primary rounded-full mt-2" />
            <div>
              <h3 className="font-bold text-lg">2023</h3>
              <p className="text-neutral-700">
                Started learning HTML, CSS, and JavaScript. Built my first mini projects.
              </p>
            </div>
          </div>

          {/* Timeline Item */}
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-primary rounded-full mt-2" />
            <div>
              <h3 className="font-bold text-lg">2024</h3>
              <p className="text-neutral-700">
                Built “Grilli” and other projects. Completed a Virtual Assistant course.
              </p>
            </div>
          </div>

          {/* Timeline Item */}
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-primary rounded-full mt-2" />
            <div>
               <h3 className="font-bold text-lg">2024</h3>
              <p className="text-neutral-700">
                Gained more skills with React, APIs, and building dynamic web apps.
              </p>
            </div>
          </div>

          {/* Timeline Item */}
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-primary rounded-full mt-2" />
            <div>
              <h3 className="font-bold text-lg">2025</h3>
              <p className="text-neutral-700">
                Created my portfolio and continued exploring Frontend Development with React and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
