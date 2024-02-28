//import { Link, useNavigate } from 'react-router-dom'



function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-green-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Fármacia do Pereira</div>
            <div className='flex gap-4'>
            <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar