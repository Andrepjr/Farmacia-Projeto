import React from 'react';
import homeLogo from '../../assets/images/8507170-removebg-preview.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="b flex justify-center">
          <div className='container grid grid-cols-2 text-green-500'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Farmácia do Pereira</h2>
              <p className='text-xl'>Consulte nossos produtos</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-black py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;