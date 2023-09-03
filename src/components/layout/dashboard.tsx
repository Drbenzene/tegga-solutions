import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import {FaTasks, FaFileInvoice} from 'react-icons/fa'
import {GrSchedules}  from 'react-icons/gr'
import {TbReportAnalytics} from 'react-icons/tb'
import {MdOutlineDashboard} from 'react-icons/md'
import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import  useRouter  from 'next/router'
import Link from 'next/link'


interface IDashboard {
  children: any,
  title: string,
  subTitle: string,
}


const navigation = [
  { name: 'Workspace', href: '/admin/workspace', icon: MdOutlineDashboard, current: true },
  { name: 'Clients', href: '/admin/clients', icon: UserGroupIcon, current: false },
  { name: 'Schedule Appointment', href: '#', icon: GrSchedules, current: false },
  { name: 'Payment', href: '#', icon: FaFileInvoice, current: false },
  { name: 'Task', href: '#', icon: FaTasks, current: false },
  { name: 'Message', href: '#', icon:   ChatBubbleOvalLeftEllipsisIcon, current: false },
  { name: 'Reports', href: '#', icon: TbReportAnalytics, current: false },
]



function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function UserDashboard({children, title, subTitle}:IDashboard ) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>
            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>


                  <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 bg-white">
                    <div className="flex h-16 my-10 shrink-0 items-center justify-center">
                    <Image
                className="h-28 w-auto"
                src= {Logo}
                alt="Tegga Solutions"
              />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-primary'
                                      : 'text-gray-700 hover:text-primary hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md py-4 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-primary' : 'text-gray-400 group-hover:text-primary',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">



          {/* Sidebar component*/}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex  mt-20 h-24 shrink-0 items-center justify-center">
              <Image
                className="h-28 w-auto"
                src= {Logo}
                alt="Tegga Solutions"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-primary'
                              : 'text-gray-700 hover:text-primary hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md py-4 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-primary' : 'text-gray-400 group-hover:text-primary',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden={true}
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                <div className="relative flex flex-1">
                    </div>

              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 relative">
                  <span className="sr-only">View notifications</span>
                  {/* <p className='absolute bg-red-600 rounded-full p-0.5 text-white text-xs left-6 bottom-5'>
                    2
                  </p> */}
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile  */}
                <div className="relative">
                  <div className="-m-1.5 flex items-center p-1.5">
                    <span className="hidden lg:flex lg:items-center">
                      <span className=" text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Kelin
                      </span>
                    </span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50 mx-5 cursor-pointer"
                      src="https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        {/* THE DASHBOARD CONTENTNST STARTS HERE  */}

          <main className="md:p-12 p-3">
            <section >
              <p className='font-bold text-xl'>
                {title}
              </p>
              <p className='text-gray-500 text-sm'> {subTitle} </p>
            </section>
              {children}
          </main>
        </div>
      </div>
    </>
  )
}