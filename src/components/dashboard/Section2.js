import React from 'react'

export default function Section2() {
    return (
        <div className="bg-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-blue-300">Start your free trial today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-blue-300 hover:bg-blue-400"
                    >
                    Get started
                    </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                    <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-blue-50 hover:bg-blue-100"
                    >
                    Learn more
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}
