import Esther from "/images/About-1.webp";

function AboutMe() {
  return (
    <div className="min-h-screen bg-black pt-[10rem] px-[2rem] md:pt-[13rem] pb-[3rem] flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-20">
      
      {/* Image Section */}
      <section className="lg:self-end p-2 w-full md:w-3/4 lg:w-1/2 max-w-[400px] mb-10 shrink-0">
        <img
          src={Esther}
          alt="Esther Oluwabuyi"
          className="w-full rounded-[40%] bg-secondary p-[0.45rem] h-auto z-100 flex justify-center items-center border-[0.5rem] border-primary"
          width={400}
          height={450}
          loading="eager"
          decoding="async"
        />
      </section>

      {/* Text Section */}
      <section className="w-full lg:max-w-4xl md:max-w-5xl flex flex-col gap-4 ">
        <h1 className="text-[2.5rem] font-poppins md:text-[4rem] font-bold text-primary text-center">
          About Me
        </h1>

        <p className="leading-relaxed text-center lg:text-left">
          Hello! I'm <span className="font-semibold">Esther Oluwabuyi</span>, a passionate Frontend Developer with over
          3 years of experience. I love crafting functional, user-friendly, and
          visually appealing websites, and I enjoy bringing creative ideas to
          life in the browser. Watching a project evolve from a basic structure into a dynamic, responsive, and engaging user experience is truly rewarding for me. <br />
          When I'm not coding, you’ll find me exploring new technologies, journaling
          my thoughts, dreaming of future travel adventures, or enjoying a good
          book (I'm a big V.C. Andrews fan!). <br/>I believe in continuous learning
          and always strive to sharpen my skills. I'm excited to connect with
          like-minded individuals and work on projects that make a real impact.
          Let's create something amazing together!
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-between text-[1.2rem]">
          <div className="bg-primary/10 p-5 rounded-lg shadow-md flex-1 flex flex-col justify-center items-center text-center">
            <h4 className="text-xl font-bold text-primary mb-2">Favourite Quote</h4>
            <p className="italic">"Dream big, code bigger."</p>
          </div>

           <div className="bg-primary/10 p-5 rounded-lg shadow-md flex-1 text-center">
            <h4 className="text-xl font-bold text-primary mb-2">Fun Fact</h4>
            <p>I once coded for 12 hours straight without realizing the time! (The flow was too good to stop!)</p>
          </div> 
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
