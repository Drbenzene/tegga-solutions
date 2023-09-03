'use client'
import React from 'react'
import UserDashboard from '@/components/layout/dashboard'
import Button from '@/components/buttons/button'
import { FaUserAlt } from 'react-icons/fa'
import { useRouter } from 'next/navigation'



function ClientDetails() {

  const router = useRouter()

  return (
    <div>
      <UserDashboard title='Client Profile' subTitle="View Client Profile here">
        <div className="sm:my-6 lg:my-6 bg-white min-h-[520px] w-full border-2 rounded-xl  p-5 md:p-8">

          <div className='bg-[#FAFAFA] p-3 min-h-[180px]'>
            <p className='font-bold '>Clients Picture</p>

            <div className='flex flex-col md:flex-row items-center mt-5' >
              <FaUserAlt
                size={80}
                className='mr-10 rounded-full text-gray-400'
              />
              <div className="mt-5 md:mt-0">
                <p className='font-bold text-md'>Odusote Mayokun</p>
                <p className='py-3 text-sm text-gray-500'>adegoketemitope1909@gmail.com</p>
                <p className='text-sm text-gray-400 font-bold'>
                  <span>Female</span>
                  <span className='mx-10'>54 Years</span>
                  <span>Nigerian</span>
                </p>
              </div>
            </div>
          </div>

          <section className="py-10">

            <div className="flex items-center flex-col md:flex-row  my-8" >
              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3'>Full Name</p>
                <p className='font-bold text-sm'>Odusote Mayokun</p>
              </div>

              <div className="w-full md:w-1/2 my-2 ">
                <p className='text-gray-500 text-sm mb-3 '>Email</p>
                <p className='font-bold text-sm'>adegoketemitope1909@abc.com</p>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row  my-8" >
              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3'>Applicant Fullname <span className='text-red-600 text-xs'>(as shown in passport)</span></p>
                <p className='font-bold text-sm'>Odusote Mayokun Kemi</p>
              </div>

              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3 '>Gender</p>
                <p className='font-bold text-sm'>Female</p>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row  my-8" >
              <div className="w-full md:w-1/2 my-2">
                <div className='flex items-center 0'>
                <div className="mr-32">
                  <p className='text-gray-500 text-sm mb-3'>Place of Birth</p>
                  <p className='font-bold text-sm'>Nigeria</p>
                </div>

                <div>
                  <p className='text-gray-500 text-sm mb-3'>Date of Birth</p>
                  <p className='font-bold text-sm'>4/11/2012</p>
                </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3 '>Country of Citizenship</p>
                <p className='font-bold text-sm'>Nigeria, Uganda</p>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row  my-8" >
              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3'>Marital Status</p>
                <p className='font-bold text-sm'>Married</p>
              </div>

              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3 '>Education <span className='text-red-600 text-xs'>(Client highest level of Education)</span></p>
                <p className='font-bold text-sm'>Bachelors Degree</p>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row  my-8" >
              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3'>Current Occupation</p>
                <p className='font-bold text-sm'>Engineer</p>
              </div>

              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3 '>Phone Number</p>
                <p className='font-bold text-sm'>+234(0)8160730668</p>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row  my-8" >
              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3'>Residential Address</p>
                <p className='font-bold text-sm'>No 2 Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria</p>
              </div>

              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3 '>Mailing Address</p>
                <p className='font-bold text-sm'>No 2 Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row  my-8" >
              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3'>Country of Interest</p>
                <p className='font-bold text-sm'>Iceland</p>
              </div>

              <div className="w-full md:w-1/2 my-2">
                <p className='text-gray-500 text-sm mb-3 '>Purpose of Travelling</p>
                <p className='font-bold text-sm'>Trading</p>
              </div>
            </div>

          </section>


          <div className='flex mt-5 justify-end'> 
          <Button
          text="Back"
          onClick = {() => router.push('/admin/clients')}
          />
          </div>
        </div>
      </UserDashboard>
    </div>
  )
}


export default ClientDetails