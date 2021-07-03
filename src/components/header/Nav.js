import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Help', href: '#' },
]

export default function Nav() {
    return (
        <Popover>
            {({ open }) => (
                <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                        aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                                />
                            </a>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-grey-900 rounded-md p-2 inline-flex items-center justify-center text-blue-300 hover:text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="font-medium text-gray-50 hover:text-gray-200">
                                {item.name}
                            </a>
                            ))}
                            <a href="#" className="font-medium text-blue-100 hover:text-blue-300">
                            Log in
                            </a>
                        </div>
                    </nav>
                </div>
    
                <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                    <div className="rounded-lg shadow-md bg-blue-400 ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                            alt=""
                            />
                        </div>
                        <div className="-mr-2">
                            <Popover.Button className="bg-blue-400 rounded-md p-2 inline-flex items-center justify-center text-gray-50 hover:text-gray-400 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-grey-200 hover:bg-gray-80"
                            >
                            {item.name}
                            </a>
                        ))}
                        </div>
                        <a
                            href="#"
                            className="block w-full px-5 py-3 text-center font-medium text-blue-400 bg-gray-50 hover:bg-gray-100"
                            >
                            Log in
                        </a>
                    </div>
                    </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
    )
}
