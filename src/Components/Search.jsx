import React from 'react';
import { Upload } from 'lucide';

function Search() {
  return (
    <div className='bg-white'>
    <div className='flex bg-white sticky top-0 z-10 flex-row h-20 p-1 w-[1240px] items-center justify-end  '>
      <div className='bg-white text-black flex items-center flex-grow ml-52  '>
        <input 
          type="text" 
          placeholder='Search' 
          className='border border-black w-[640px] rounded-l-xl p-2' 
        />
        <button className='text-black rounded-r-xl border border-black p-2'><img src="src\Logo\Search.svg" alt="" className='h-6' /></button>
      </div>
      <div className='text-black flex ml-32'>
        <button className='p-2'><img src="src\Logo\Upload.svg" className='h-8 w-10' alt="" /></button>
        <button className='p-2'><img src="src\Logo\Bell.svg" alt="" className='h-8 w-10' /></button>
        <button className='p-2'><img src="src\Logo\Account.svg" alt=""  className='h-8 w-10'/></button>
      </div>
    </div>
    </div>
  );
}

export default Search;
