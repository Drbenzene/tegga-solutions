'use client'
import React from 'react'
import UserDashboard from '@/components/layout/dashboard'
import SearchInputField from '@/components/input/search'
import DataTable from '@/components/table/dataTable'
import Button from '@/components/buttons/button'

function Home() {
  return (
    <div>
      <UserDashboard title='Clients' subTitle="Here's the clients list">
        <div className="sm:my-6 lg:my-6 bg-white min-h-[520px] w-full border-2 rounded-xl p-8">

          <div className='flex justify-between items-center'>
            <div className='md:w-5/6 w-full'>
            <SearchInputField />
            </div> 

            <div className=''>
              <Button
              text='Add new Client'
              onClick={()=> console.log('Add')}
              />
            </div>

          </div>

          <div>
            <DataTable />
          </div>

        </div>
      </UserDashboard>
    </div>
  )
}

export default Home

