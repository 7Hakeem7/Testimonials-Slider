import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi';


const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    
    function leftShifthandler(){
        if(index-1 < 0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShifthandler() {
        if(index+1 > reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1)
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
    return(
        <div className='w-[54vw] md: w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 hover:shadow-xl tansition-all duration-700'>
            <Card review = {reviews[index]}></Card>

            <div className="flex justify-center text-3xl font-bold text-violet-400 mt-5 gap-3">
                <button 
                onClick={leftShifthandler}
                className='cursor-pointer hover:text-violet-500 '>
                    <FiChevronLeft/>
                </button>
                <button 
                onClick={rightShifthandler}
                className='cursor-pointer hover:text-violet-500 '>
                    <FiChevronRight/>
                </button>
            </div>

            <div className='mt-5'>
                <button 
                onClick={surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2  rounded-md text-white font-bold text-lg'>
                    Surprise Me!
                </button>
            </div>
        </div>
    )
}
 export default Testimonials