import React from "react";
import CssLogo from "../../assets/images/item3.svg";
import WordpressLogo from "../../assets/images/item8.svg";
import JsLogo from "../../assets/images/item5.svg";
import HtmlLogo from "../../assets/images/item4.svg";
import ExpressLogo from "../../assets/images/expressjs-icon.svg";
import ReactLogo from "../../assets/images/item6.svg";
import FireBaseLogo from "../../assets/images/firebase-icon.svg";
import NodeJsLogo from "../../assets/images/NodeJs.svg";
import ArrowImg from "../../assets/images/aright.svg";
const HomeScreen = () => {
    return (
        <div className="h-screen w-screen relative">
            {/*html logo */}
            <div className="absolute top-[55%] right-[16%]">
                <img src={HtmlLogo} />
            </div>
            {/*css logo */}
            <div className="absolute top-[28%] right-[18%]">
                <img src={CssLogo} />
            </div>
            {/*js logo */}
            <div className="absolute top-[75%] right-[50%]">
                <img src={JsLogo} />
            </div>
            {/*react js logo */}
            <div className="absolute top-[65%] left-[15%]">
                <img src={ReactLogo} />
            </div>
            {/*express logo */}
            <div className="absolute top-[10%] left-[20%] w-10">
                <img src={ExpressLogo} className="w-[100%] " />
            </div>
            <div className="absolute top-10 right-32">
                {/*wordpress logo */}
                <img src={WordpressLogo} />
            </div>

            {/*firebase  logo */}
            <div className="absolute top-[28%] left-[20%] w-8">
                <img src={FireBaseLogo} className="w-[100%] " />
            </div>
            <div className="absolute top-[70%] right-[10%] w-16">
                {/*Nodejs logo */}
                <img src={NodeJsLogo} className="w-[100%]" />
            </div>

            <div className="absolute top-[80%] right-[8%] ">
                {/*work with me Btn*/}
                <button className="relative text-left text-3xl hover:text-4xl text-white bg-[rgb(255,46,0)] py-3 transition ease-in-out dey-1000 rounded-3xl w-40 hover:w-44 flex justify-start items-center flex-col shadow-[rgba(255,0,0,0.3)_0px_22px_70px_4px]">
                    <h4 className="text-left ">
                        work <br /> with me
                    </h4>
                    <div className="absolute top-[45%] w-36 h-36">
                        
                        {/*arrow image */} <img cclassName="w-[100%] h-[100%]" src={ArrowImg} />
                    </div>
                </button>
            </div>
            {/* animated text box */}
            <div className="w-14 h-14 bg-[rgb(255,122,0)] absolute rounded-2xl top-[34%] left-[3%] " >
        <div className="relative border size-full  ">
        <div className="absolute top-[40%] left-[40%] border bg-white rounded-2xl p-1  ">
   <div className="">
      <p>01</p>
      </div>
         <div className="">
      <p>02</p>
      </div>
         <div className="">
      <p>03</p>
      </div>
        </d>
        </div>
            </div>
            
        </div>
    );
};

export default HomeScreen;
