import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import { useState } from 'react';

export default function DetailProduct(){

    let {id} = useParams()

    const [data, setData] = useState(null)
    
    let onGetData = async() => {
        try {
            let getData = await axios.get(`http://localhost:5000/products/${id}`)
            setData(getData.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        onGetData()
    }, [])

    if(data === null){
        return(
            <div>
                Loading...
            </div>
        )
    }

    return(
        <div>
            <div>

            </div>
            <div className="flex items-center bg-green-800" style={{ height: '300px' }}>
                <div className="basis-2/5 flex justify-center">
                    <img src={data.image} className='rounded-full w-[200px]' />
                </div>
                <div className="basis-3/5 text-white">
                    <h1 className="text-4xl font-bold ">
                        {data.name}
                    </h1>
                    <h1 className="basis-3/5 text-2xl mt-2">
                        {data.size[0].calories} Calories
                    </h1>
                    <h1 className="basis-3/5 text-2xl mt-2">
                        Rp. {data.size[0].price.toLocaleString()}
                    </h1>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="basis-1/3 px-24">
                    <h1 className="text-2xl font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                        Size Options
                    </h1>
                    <select className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            data.size.map((value, index) => {
                                return(
                                    <option key={index}>{value.option}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="basis-2/5">
                    <h1 className="text-2xl font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                            Topping
                    </h1>
                    <select className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            data.topping.map((value, index) => {
                                return(
                                    <option key={index}>{value}</option>
                                )
                            })
                        }
                    </select>

                    <h1 className="text-2xl font-bold pb-2 mt-3" style={{ borderBottom: '3px solid silver' }}>
                        Sugar
                    </h1>
                        <select className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Less</option>
                        </select>
                    </div>
            </div>
            <div className="flex justify-end px-24">
                <div style={{ position: 'relative' }}>
                    <button className="bg-green-800 text-white px-3 py-3 rounded-full">
                        Add to order
                    </button>
                    <div style={{ position: 'absolute', top: '-18px', right: '-10px', zIndex: '-1' }} className='bg-red-600 px-[10px] py-[2px] text-white rounded-full'>
                        3
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}