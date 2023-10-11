import React from 'react'
import icon from '../assets/c40e36b5bb13a6f405be9f4f07c8d596.jpg'
import back from '../assets/Back.svg'
import edit from '../assets/edit-05.svg'
import dots from '../assets/dots-vertical.svg'

function ChatHeader() {
  return (
    <>
     <div className='p-5'>
    <div className='grid grid-rows-2 bg-custom-gray'>
    <div className="w-full justify-start items-center gap-3 inline-flex">
        <img src={back} alt="" />
   
    <div className="grow shrink basis-0 text-neutral-900 text-2xl font-bold font-['Mulish']">Trip 1</div>
    <div className="w-5 h-5 relative float-right" />
    <img src={edit} alt="" />
</div>

    <div className="w-[343px] h-12 justify-start items-center gap-3 inline-flex mt-1 mb-3 bg-custom-gray">
    <div className="grow shrink basis-0 h-12 justify-start items-start gap-4 flex">
        <div className="grid grid-cols-2 rounded-xl">
            <div>      <img className="w-[26px] h-[26px] border-white rounded-tl-[48px] " src={icon} />
            <img className="w-[26px] h-[26px] border-white rounded-bl-[48px]" src={icon} /></div>
            <div>      <img className="w-[26px] h-[26px] border-white rounded-tr-[48px] " src={icon} />
            <img className="w-[26px] h-[26px] border-white rounded-br-[48px] " src={icon}/></div>
      
        </div>
        <div className="w-[215px]"><span className="text-zinc-600 text-base font-medium font-['Mulish']">From</span><span className="text-neutral-900 text-lg font-semibold font-['Mulish']"> </span><span className="text-neutral-900 text-lg font-bold font-['Mulish']">IGI Airport, T3<br/></span><span className="text-zinc-600 text-base font-medium font-['Mulish']">To</span><span className="text-neutral-900 text-lg font-semibold font-['Mulish']">  </span><span className="text-neutral-900 text-lg font-bold font-['Mulish']">Sector 28</span></div>
    </div>
    <img src={dots} alt="" />
    
</div>
</div>
<div className="w-full h-0.5 px-4 pt-5 pb-4 border-b border-stone-200 flex-col justify-start items-start gap-4 inline-flex"></div>
</div>
</>
  )
}

export default ChatHeader