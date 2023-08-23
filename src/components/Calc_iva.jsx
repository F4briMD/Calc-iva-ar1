import  { useState,useEffect } from 'react';

function Calc_iva() {
  const [precio, setPrecio] = useState('');
  const [tasaIVA, setTasaIVA] = useState(21); // Tasa de IVA en porcentaje
  const [iva, setIVA] = useState(0);
  const [mostrarTolIva,setMostrarTolIva] = useState(false)
  const [error,setError] = useState ('')


  // const isNumero=(value)=>{
  //     return /^-?\d+(?:[.,]\d*?)?$/.test(value)
  // }

  const calcularIVA = () => {

    // const precioSinComas = precio.replace(",", ".");
    // const tasaIVASinComas = tasaIVA.replace(",", ".");

    if (!isNaN(precio) && !isNaN(tasaIVA)) {
      const ivaCalculado = (parseFloat(precio) * parseFloat(tasaIVA)) / 100;
        setIVA(ivaCalculado);
        setMostrarTolIva(true)
        setError('')
    }else  {
      setError('Ingresa valores numéricos válidos para realizar el cálculo.');
      setMostrarTolIva(false);
    }
    
  };
  const calcularTotalConIVA = () => {
    if (!isNaN(precio) && !isNaN(tasaIVA)) {
      return parseFloat(precio) + iva;
    } else  {
      return 0; 
    }
  };

  useEffect(() => {
    if (mostrarTolIva && !isNaN(precio)) {
      setIVA((parseFloat(precio) * parseFloat(tasaIVA)) / 100);
    }
  }, [precio, tasaIVA, mostrarTolIva]);


  return (
    <section className='max-w-4xl p-5 text-center'>
      
      <div className='grid grid-cols-1 grid-rows-2 gap-5 my-5 md:grid-cols-2 md:grid-rows-1'>
      <div className='flex flex-col items-center '>
        <label className='text-2xl text-slate-400'>Precio</label>
        <input
          type="number"
          value={isNaN(precio) ? '' : precio}
          onChange={(e) => setPrecio(parseFloat(e.target.value))}
          className='my-2 placeholderiva '
        />
      </div>
      <div className='flex flex-col items-center'>
        <label className='text-2xl text-slate-400'>Tasa de IVA (%)</label>
        <input
          type="text"
          value={isNaN(tasaIVA)? '' : tasaIVA}
          onChange={(e) => setTasaIVA(parseFloat(e.target.value))}
          className='my-2 placeholderiva '
        />
      </div>
      </div>
      <button onClick={calcularIVA }
      className='btncal'>
        Calcular IVA</button>
        {error && <p className='text-lg text-red-500'>{error}</p>}
        {mostrarTolIva && (
      <div className='grid items-center grid-rows-2 my-5 text-2xl font-normal text-left gap-y-5'>
        <p className='text-slate-400'>IVA Calculado : <span className='pl-5 text-3xl text-white'>{isNaN(iva) ? '' : iva.toFixed(2)}</span></p>
        <p className='text-slate-400'>Precio Total con IVA : <span className='pl-5 text-3xl text-white underline underline-offset-8 decoration-blue-700'>{isNaN(calcularTotalConIVA()) ? '':  calcularTotalConIVA().toFixed(2)}</span></p>
      </div>
    )}
    <div>

</div>

    </section>
  );
}

export default Calc_iva;