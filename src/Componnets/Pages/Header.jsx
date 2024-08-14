import React, { useEffect, useState } from 'react'
import Container from '../Commonelemts/Container'
import logo from '../../assets/Logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import '../../App.css'
import { Link } from 'react-router-dom';
function Header() {
  const [show , setshow]=useState(true)
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={isSticky ? 'navbar sticky' : 'navbar'}>
      <div className='py-5 md:px-0 px-2'>
      <Container>
        <div className='flex flex-wrap items-center justify-between'>
            <div>
            <img src={logo} alt='logo'/>
            </div>
            <div className=''>
                <ul className={`lg:flex gap-x-10 absolute top-0 left-0 lg:static ${show == true ? "left-[-300px] top-[120px] w-[50%] py-5 duration-700 ease-in-out z-50":"left-[0px] top-[55px] bg-[gray] lg:bg-transparent w-[100%] py-5 duration-700 ease-in-out text-center z-50"}`}>
                <li className='font-sans py-3 lg:py-0 lg:text-black text-[16px] font-normal hover:text-[#262626] hover:font-bold cursor-pointer'><Link to="/">Home</Link></li>
                <li className='font-sans py-3 lg:py-0 lg:text-black text-[16px] font-normal hover:text-[#262626] hover:font-bold'><Link to="/shop">Shop</Link></li>
                <li className='font-sans py-3 lg:py-0 lg:text-black text-[16px] font-normal hover:text-[#262626] hover:font-bold cursor-pointer'>About</li>
                <li className='font-sans py-3 lg:py-0 lg:text-black text-[16px] font-normal hover:text-[#262626] hover:font-bold cursor-pointer'>Contacts</li>
                <li className='font-sans py-3 lg:py-0 lg:text-black text-[16px] font-normal hover:text-[#262626] hover:font-bold cursor-pointer'>Journal</li>
                </ul>
            </div>
            <div onClick={()=>setshow(!show)} className='lg:hidden cursor-pointer'>
              {show == true ?  <FaBars />:<RxCross2 />}
            </div>
        </div>
    </Container>
      </div>

    </header>
   
  )
}

export default Header