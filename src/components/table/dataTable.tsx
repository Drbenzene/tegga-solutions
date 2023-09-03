'use client'

import { useRouter } from 'next/navigation'



const people = [
    {id: 1, name: 'Adegoke Oluwadailare', address: 'No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria', email: 'adegoketemitope1909@gmail.com', phone: '09160730668' },
    {id: 2, name: 'Adegoke Oluwadailare', address: 'No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria', email: 'adegoketemitope1909@gmail.com', phone: '09160730668' },
    {id: 3, name: 'Adegoke Oluwadailare', address: 'No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria', email: 'adegoketemitope1909@gmail.com', phone: '09160730668' },
    {id: 4, name: 'Adegoke Oluwadailare', address: 'No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria', email: 'adegoketemitope1909@gmail.com', phone: '09160730668' },
    {id: 5, name: 'Adegoke Oluwadailare', address: 'No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria', email: 'adegoketemitope1909@gmail.com', phone: '09160730668' },
    {id: 6, name: 'Adegoke Oluwadailare', address: 'No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria', email: 'adegoketemitope1909@gmail.com', phone: '09160730668' },
  ]
  
  export default function DataTable() {
      const router = useRouter()

    return (
      <div className="">
        <div className="sm:flex sm:items-center">

        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-[#FBF6EA] border-b-2 border-[#FCC056]">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                       Email
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Phone
                      </th>
                      <th scope="col" className="px-3 py-3.5  text-left text-sm font-semibold text-gray-900">
                        Residential Address
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white ">
                    {people.map((person) => (
                      <tr 
                      onClick={() => {
                        router.push(`client?id=${person.id}`)
                      }}
                      key={person.email} className='hover:bg-[#FBF6EA] hover:border-l-4 hover:border-[#FCC056] hover:cursor-pointer'  >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
