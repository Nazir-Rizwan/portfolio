import React,{useState} from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";


const Navbar = () => {
  
  const [nav,setnav]=useState(false);
  const links =[
    {
        id:1,
        link:'home',
    },
    {
        id:2,
        link:'about',
    },
    {
        id:3,
        link:'portfolio',
    },
    {
        id:4,
        link:'experience',
    },
    {
        id:5,
        link:'contact',
    },    
  ]


    return (
    <>
<div className=' flex items-center justify-between w-full h-20 p-4 bg-black fixed text-white '>

<h1 className='font-signature text-4xl ml-1'>Nazir Rizwan.</h1>

<ul className="hidden md:flex gap-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
            text-[#9ca3af] hover:scale-105 duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>


<div onClick={()=>setnav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
  
{nav?  <FaTimes size={30}/> :<FaBars size={30}/>}
</div>


{
  nav&& (
    <ul className='flex flex-col 
justify-center items-center absolute top-20 left-0 w-full h-screen
 bg-black '>
 {
    links.map((id, link)=>{
        return(
        <li  key={id} className='text-[#9ca3af] capitalize cursor-pointer px-4 py-4 text-4xl'>
    <Link to={link} smooth duration={500}>
              {link}
            </Link>
        </li>
        )
    })
  }
</ul>
  )
}



</div>

    </>
  )
}

export default Navbar