'use client'

import Image from "next/image";
import InputField from "@/components/input/inputField";
import bg from '../../public/images/login-background.svg'
import Logo from '../../public/images/logo.png'
import Link from "next/link";



export default function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-bg bg-white">
        
        <div className='bg-white sm:mx-auto md:w-[500px] md:h-[500px] p-10 border-2 shadow-md '>
          <div className=" flex justify-between items-center px-4">
            <h2 className="text-sm font-bold">
              Login
              <p className="text-sm font-normal mt-2">Login to your account</p>
            </h2>

            <Image
              className="h-20 w-auto"
              src={Logo}
              alt="Tegga Solutions"
            />

          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">

              <InputField
                label="Email Address"
                type='email' 
                name="password"
                id="email"
                onChange={(e:any) => console.log(e.target.value)}
                value='admin@teggasolutions.com'
                required={true}
              />


              <InputField
                label="Password"
                type='password' 
                name="password"
                id="password"
                onChange={(e:any) => console.log(e.target.value)}
                value='Admin12345'
                required={true}
              />

              <div className='pt-8 px-5'>
                <Link
                href={'/admin/workspace'}
                >
                <button
                  type="button"
                  className="flex w-full justify-center bg-primary p-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Login
                </button>
                </Link>

              </div>
            </form>

          </div>
        </div>

      </div>
    </>
  )
}
