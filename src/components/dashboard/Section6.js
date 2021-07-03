import React from 'react'
import {useForm} from 'react-hook-form'

export default function Section6() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(JSON.stringify(data));
    // console.log(data)

    return (
        <div className="relative bg-gray-800 px-5 py-1 overflow-hidden">
            <div className="p-5">
                <h1 className="text-blue-300 text-5xl">
                    Join Here !
                </h1>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-gray-800 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-50">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("firstname")}
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Firstname"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full py-2 px-3 border bg-gray-800 border-gray-100 text-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                                    />

                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-50">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("lastname")}
                                        name="lastname"
                                        id="lastname"
                                        placeholder="lastname"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full py-2 px-3 border bg-gray-800 border-gray-100 text-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                                    />

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="bandwith" className="block text-sm font-medium text-gray-50">
                                            Bandwith
                                        </label>
                                        <select
                                            id="bandwith"
                                            {...register("bandwith")}
                                            name="bandwith"
                                            autoComplete="bandwith"
                                            className="mt-1 block w-full py-2 px-3 border bg-gray-800 border-gray-300 text-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                                        >
                                            <option value="3 Mbps">3 Mbps</option>
                                            <option value="5 Mbps">5 Mbps</option>
                                            <option value="10 Mbps">10 Mbps</option>
                                            <option value="20 Mbps">20 Mbps</option>
                                        </select>
                                    </div>

                                    <div className="px-4 py-3 bg-gray-800 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-900 bg-indigo-300 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <h1 className="text-gray-50 text-2xl">Make sure you already now our network.</h1>
                                    <h1 className="text-gray-50 text-2xl">We will give you best experience diving in network.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
