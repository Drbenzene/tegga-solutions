'use client'
import React from 'react'
import UserDashboard from '@/components/layout/dashboard'
import {BsArrowRight} from 'react-icons/bs'

function Workspace() {
  return (
    <div>
      <UserDashboard  title="Your Workspace" subTitle="Welcome, xx"> 

      <div className="sm:my-6 lg:my-6 min-h-[520px] w-full border-2 rounded-xl md:p-8 pt-4 md:pt-0 ">

        <h4 className='font-bold mb-5'>Overview </h4>

        <div className='flex justify-between md:flex-row flex-col flex-wrap'> 

        <div className="w-[400px] bg-white h-[200px] shadow-lg border-primary border-t-8">

          <div className='p-2 bg-[#FBF6EA] font-bold text-xs'> 
            <p> Todays Agenda</p>
          </div>

          <div className='flex flex-1 justify-center items-center '>
            <p className='text-sm text-gray-400 my-10'>You dont have any event scheduled for today. </p>
            <span className='font-bold text-primary text-sm cursor-pointer'>Add </span>
          </div>
        </div>


        <div className="w-[400px] bg-white h-[250px] shadow-lg border-primary border-t-8">

<div className='p-2 bg-[#FBF6EA] font-bold text-xs flex justify-between items-center cursor-pointer'> 
  <p> Activity Report</p>
  <p className='text-primary font-normal text-xs flex items-center'> View full report activity <span className='pl-2'><BsArrowRight/> </span> </p>
</div>

<div className="p-4 text-xs"> 

<div className='flex justify-center items-center '>
  <p className='text-sm text-gray-400'>______________________________ Tuesday  (18th Sept. 2019)</p>
</div>

<div className='text-gray-400 mt-2'>
  <p>You added a new client</p> 
  <div className='pl-8 w-auto'>
  <p className='text-primary'>Odusote Mayokun</p>
  <p className='bg-[#FBF6EA] w-[110px] text-gray-400 font-bold text-xs p-2 border-l-4 border-primary'>Status:Pending</p>
  </div>

</div>
</div>


</div>


<div className="w-[400px] bg-white min-h-[200px] shadow-lg border-primary border-t-8 ">

<div className='p-2 bg-[#FBF6EA] font-bold text-xs flex justify-between items-center cursor-pointer'> 
  <p> Task that are due</p>
  <p className='text-primary font-normal text-xs flex items-center'> Create Tasks <span className='pl-2'><BsArrowRight/> </span> </p>
</div>

<div className='p-3 bg-[#FBF6EA] mt-4 text-xs mx-4'>

  <p className='text-black font-bold pb-2'>Follow up with <span className='text-primary'>Odusote</span> </p> 
  <p>Due on: 1/1/2021             Created on: 1/15/2021 </p>
</div>

</div>
        </div>



      </div>
      </UserDashboard>
    </div>
  )
}

export default Workspace
