
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { useEffect } from "react";
import { getAll } from "../actions/dent";
import usePagination from "../components/Pagination";
import Modal from '../components/Modal';


export default function DentistPage() {

    const dispatch = useDispatch();
    const users  = useSelector(state => state.users);
    // console.log(users.length);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const pageSizes = [3, 6, 9];
    useEffect(() => {
        dispatch(getAll());
        console.log(users.length);
        
    },[]);
    const [count, setCount] = useState(Math.ceil(users.length/ pageSize));
    
    const _DATA = usePagination(users, pageSize);
    
    
    const handlePageSizeChange = (e) => {
            setPageSize(e.target.value);
            setCount(Math.ceil(users.length / e.target.value))
            setPage(1);
        };
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };


    return (
        <>

            <Header />
            <div className="overflow-x-auto pt-16">
                <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                        <h1 className="font-semibold text-blueGray-700 text-2xl">Details List</h1>
                                    </div>
                                </div>
                                <Modal/>
                            </div>
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Project</th>
                                        <th className="py-3 px-6 text-left">Client</th>
                                        <th className="py-3 px-6 text-center">Users</th>
                                        <th className="py-3 px-6 text-center">Status</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {
                                        _DATA.currentData() ? ( _DATA.currentData().map((person) => (
                                            <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                                <td className="py-3 px-6 text-left">
                                                    <div className="flex items-center">
                                                        <div className="mr-2">
                                                            <img className="w-6 h-6" src="https://img.icons8.com/color/100/000000/vue-js.png" />
                                                        </div>
                                                        <span className="font-medium">{person.username}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-left">
                                                    <div className="flex items-center">
                                                        <div className="mr-2">
                                                            <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" />
                                                        </div>
                                                        <span>{person.email}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <div className="flex items-center justify-center">
                                                        <img className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                        <img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg" />
                                                        <img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg" />
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <div className="flex item-center justify-center">
                                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        </div>
                                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>))) : null
                                    }
                                    <div className="rounded-t mb-0 px-4 py-4 border-0">
                                        <div className=" flex flex-row ">
                                            {"Items per Page: "}<select className="flex flex-col" onChange={handlePageSizeChange} value={pageSize}>
                                                {pageSizes.map((size) => (
                                                    <option key={size} value={size}>
                                                        {size}
                                                    </option>
                                                ))}
                                            </select>
                                            <Pagination
                                                count={count}
                                                page={page}
                                                variant="outlined"
                                                shape="rounded"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
