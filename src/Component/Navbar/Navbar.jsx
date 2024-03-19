import React from 'react'
import DragImg from '../../assets/images/drag.svg'
import HomeImg from '../../assets/images/acc.svg'
import BioImg from '../../assets/images/bio.svg'
import ProjectImg from '../../assets/images/rea.svg'
import Draggable from 'react-draggable';
const Navbar = () => {
  return (
    <>
  <Draggable handle=".handle" > 
    
    <div className="fixed  bg-white rounded-lg right-5 bottom-60 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]  w-10 h-53  flex flex-col justify-center items-center " >
 {/* home logo */}
    <div className="" >
    <a href=""   className="rounded-2xl cursor-pointer " >
     <img src={HomeImg} alt="home" />
    </a>
    </div>
     {/* project section logo */}
         <div className="" >
          <img src={ProjectImg} alt="project" />
    </div>
         {/* Bio section logo */}
         <div className="" >
          <img src={BioImg} alt="Bio" />
    </div>
         {/* arrow */}
         <div className="handle py-2" >
         <img src={DragImg} alt="arrow" />
    </div>
    </div>
    
    
   </Draggable> 
    
    </>
  )
}

export default Navbar