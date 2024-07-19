import React from 'react'

const Main = () => {
  return (
    <div className='text-white p-6  flex flex-col gap-4'>

    <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-sm'>About</h1>
        <p className='text-xs'>
            I am a fullstack developer with a particular interest in making things simple and automating
            daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
        </p>
    </div>
<div className='flex flex-col gap-1'>
    <h1 className='font-bold text-sm'>Interests</h1>
    <p className='text-xs'>Music scholar. Basketball player. Reader. Naturopath. Prayer warrier. Morning bird.</p>
</div>
    </div>
  )
}

export default Main