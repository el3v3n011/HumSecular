import img1 from "../../../public/images/homepage/gr1.jpeg";
import img2 from "../../../public/images/homepage/ss1.jpeg";


import img3 from "../../../public/images/homepage/poster.png";


function HomeSection1() {
  return (
    <>
      <div className=" pt-10 main lg:hidden ">
        <div className=" l=w-screen h-screen bg-[url('../../public/images/homepage/gr1.jpeg')] bg-cover bg-no-repeat bg-center ">
          <div className="flex flex-col bg-slate-50 opacity-70 h-24 justify-center items-center content-center text-2xl py-10">
            <h3>हिंदुस्तान अवाम मोर्चा सेक्युलर</h3>
            <p>Political Party in Bihar,India</p>
          </div>
        </div>
        <div className="w-screen h-screen bg-[url('../../public/images/homepage/ss1.jpeg')] bg-cover bg-no-repeat bg-center ">
          <div className="flex flex-col bg-slate-50 opacity-70 h-24 justify-center items-center content-center text-2xl py-10">
            <h3>हमारा लक्ष्य</h3>
            <p>बेहतर बिहार, विकसित बिगर</p>
          </div>
        </div>
      </div>

      {/* for lg deives */}
      <div className="hidden  pt-10 lg:flex border-2  justify-center ">
        <img src={img3}className=" w-3/4 h-auto" alt="" />
      </div>

      <div className="hidden lg:grid grid-rows-1 grid-cols-3 w-screen h-screen">
        <div className="row-span-2">
          <img src={img1} className="object-contain h-screen" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-4xl bg-slate-100  bg-no-repeat">
          <h3>हिंदुस्तान अवाम मोर्चा सेक्युलर</h3>
          <p>Political Party in Bihar,India</p>
          <div className="flex flex-col justify-center items-center text-4xl bg-slate-100">
         
         <h3>हमारा लक्ष्य</h3>
         <p>बेहतर बिहार, विकसित बिहार</p>
       </div>
        </div>
        <div className="row-span-2">
          <img src={img2} className="object-contain h-screen" alt="" />
        </div>
      
      </div>
    </>
  );
}
export default HomeSection1;
