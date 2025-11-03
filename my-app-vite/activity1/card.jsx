import React from 'react';

function Card(){
    return(
        <div className='border-2 border-white h-[500px] w-[500px] flex flex-col justify-center items-center bg-gray-400 rounded-xl'>
            <img src="https://static.vecteezy.com/system/resources/previews/034/339/512/non_2x/bgm-letter-logo-creative-design-bgm-unique-design-vector.jpg" className='h-[100px] w-[100px] rounded-full border-4 border-blue-800 '/>
            <h2 className='text-black italic p-4 text-sm-xl'>"Tailwind CSS made designig so simple i could create responsive layouts without writing a single css file"</h2><br/>
            <h3 className='text-black font-bold'>-Ankit Sharma</h3>
            <h4 className='text-black font-bold'>Frontend Developer</h4>
        </div>
    )
}
export default Card;