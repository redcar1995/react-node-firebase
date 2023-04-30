import react from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";





export default function Appointment() {

    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    return (
        <div className="w-full mt-16">


            <div className="mt-5">
                <h1 className="text-3xl font-bold text-center">Appointment</h1>
            </div>
            <div className="appoinment-form my-8">
                <form action="#">
                    <div className="flex flex-col mx-16 space-y-8 my-8">
                        <div className="flex flex-row justify-between space-x-8">
                            <div className="w-1/2">
                                <input type="text" placeholder="Name" className="w-full py-4 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-indigo-500" required/>
                            </div>
                            
                            <div className="w-1/2">
                                <input type="email" placeholder="Email" className="w-full py-4 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-indigo-500" required/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between space-x-8">
                            <div className="w-1/2">
                                <input type="phone" placeholder="Phone" className="w-full py-4 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-indigo-500" required/>
                            </div>
                            <div className="w-1/2">
                                <input type="text" placeholder="Subject" className="w-full py-4 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-indigo-500" required/>
                            </div>
                        </div>
                        <div>
                            <label for="fileupload" className="sr-only">Fileupload</label>

                            <div className="relative">
                                <input
                                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    type="file"
                                    id="formFile" />

                            </div>
                        </div>

                        <div>
                            <textarea name="Message" cols="30" rows="10" placeholder="Message" className="w-full py-2 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-indigo-500"></textarea>
                        </div>
                        <div className="col-span-2 text-center">
                            <a href="/login" className="inline-block">
                                <button className="w-[200px] bg-blue-500 text-white py-4 px-6 rounded-md hover:bg-indigo-700">Submit</button>
                            </a>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}