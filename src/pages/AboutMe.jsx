import Esther from "/images/About-1.jpg";

function AboutMe() {
  return (
    <div className="min-h-screen bg-black pt-[10rem] px-[2rem] md:pt-[13rem] flex flex-col overflow-hidden">
      {/* Image  */}

      <div className=" self-center bg-secondary  w-[300px] sm:w-[400px] md:w-[450px] rounded-[40%]  p-[0.45rem] h-auto z-100 flex justify-center items-center border-[0.5rem] border-primary ">
        <img
          src={Esther}
          alt="Esther Oluwabuyi"
          className=" w-full h-full rounded-[40%]"
          width={300}
          height={300}
          loading="eager"
          // decoding="async"
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
