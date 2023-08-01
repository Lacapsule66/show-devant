"use client"

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'

import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header2() {


  return (
    <Disclosure as="nav" className=" w-full z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <Link href="/" className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-16 w-auto"
                    src="/logo.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src="/logo.svg"
                    alt="Workflow"
                  />
                </Link>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/manger" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                     La carte
                    </Link>
                    <Link
                      href="/sortir"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                    A propos de nous
                    </Link>
                    <Link
                      href="/decouvrir"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                     Contact
                    </Link>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      06 00 00 00 00
                    </a>
                  
                    
         
                   
                  </div>
                </div>
              </div>
             
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
               

           
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as={Link}
                href="/manger"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                La carte
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/sortir"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                A propos de nous
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/decouvrir"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                06 00 00 00 00
              </Disclosure.Button>
             
         

            </div>
       
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}