import Esther from "/images/avatar-esther.jpg";


function Footer() {
    return (
        <div className=" relative z-200">
             <div className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-[50%] border-2 border-primary bg-secondary p-[2.5px] mb-7">
                      <img
                        src={Esther}
                        alt="Esther's avatar"
                        loading="eager"
                        className="w-full h-full rounded-[50%] object-cover"
                      />
                    </div>
            
            HELLO FOOTER
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
    )
}

export default Footer
