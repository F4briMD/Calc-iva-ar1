// import { useState } from 'react'
import Calc_iva from './components/Calc_iva'


function App() {


  return (
    <main className='flex flex-col items-center justify-center h-screen max-w-6xl mx-auto text-4xl font-normal text-white font-Poppins items-cernter'>
      <h2 className='p-5 font-medium underline mb-7 underline-offset-8 decoration-blue-600'>Calculadora de <span className='text-blue-500'>IVA</span></h2>
      <section>
        <Calc_iva/>
      </section>
      
    </main>
  )
}

export default App
