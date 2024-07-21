import React from 'react'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import insta from '../assets/insta.svg'

const Footer = () => {
  return (
    <div className='bg-[#161619] h-[10%] flex gap-10 px-3 justify-center items-center'>
      <img src={twitter} alt="" className='bg-slate-400 h-7 rounded-md' />
      <img src={facebook} alt="" className='bg-slate-400  h-7 rounded-md'/>
      <img src={insta} alt="" className='bg-slate-400  h-7 rounded-md' />
      <img src={github} alt="" className='bg-slate-400  h-7 rounded-md'/>
       
    </div>
  )
}

export default Footer