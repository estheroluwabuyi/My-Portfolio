import Esther from "/images/About-1.webp";

function AboutMe() {
  return (
    <div className="min-h-screen bg-black pt-[10rem] px-[2rem] md:pt-[13rem] flex flex-col overflow-hidden">
      {/* Image  */}

      <div className=" self-center p-2 w-full md:w-3/4 lg:w-1/2 max-w-[450px]  ">
        <img
          src={Esther}
          alt="Esther Oluwabuyi"
          className=" w-full rounded-[40%] bg-secondary p-[0.45rem] h-auto z-100 flex justify-center items-center border-[0.5rem] border-primary"
          width={400}
          height={450}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Texts */}
      <div>
        <h1 className="font-poppins">About me</h1>
      </div>
    </div>
  );
}

export default AboutMe;
// md:max-w-6xl
// convert img to webp