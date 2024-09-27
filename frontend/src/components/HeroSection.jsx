import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center text-white'>
            <div className='flex flex-col gap-5 my-10'>
                <h1 className='text-5xl font-bold'>Search & Apply Your <span className='text-blue-700'>Dream Jobs</span></h1>
                <div className='flex w-[60%] shadow-lg border border-white pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-black'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-blue-700">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection