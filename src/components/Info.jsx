import myPic from "../assets/myPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
import linkedin from '../assets/linkedin.svg'
import Main from "./Main";
import Footer from "./Footer";


const Info = () => {
  return (
    <div className="h-[88%] w-[45%] self-center bg-[#1A1B21] rounded-lg relative ">
      <img src={myPic} alt="" className="rounded-t-lg h-[35%] w-full" />
      <div className="flex flex-col items-center gap-2 mt-5">
        <h1 className="font-bold text-2xl text-white">Rebecca Mutoni</h1>
        <p className="text-lg text-amber-300">Fullstack Developer</p>
        <p className="text-sm text-white">
          <a href="https://github.com/Beccatoni">Beccatoni.github</a>
        </p>
        <div className="flex gap-4 text-sm ">
          <div className="flex items-center bg-white w-[7rem] h-[2.3rem] p-2 justify-center rounded-lg gap-2 "> 
            <FontAwesomeIcon icon={faEnvelope} className="h-[16px] w-[20px]"/>
            <p>Email</p>
          </div>
          <div className="flex items-center bg-[#0288D1] w-[7rem] h-[2.3rem] p-2 justify-center rounded-lg text-white">
            <img src={linkedin} alt="" />
            {/* <FontAwesomeIcon icon={faLinkedin} /> */}
            <p>Linkedin</p>
          </div>
        </div>
      </div>
      <Main/>
      <Footer/>
    </div>
  );
};

export default Info;
