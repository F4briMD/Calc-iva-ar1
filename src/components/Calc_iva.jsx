import  { useState,useEffect } from 'react';

function Calc_iva() {
  const [precio, setPrecio] = useState('');
  const [tasaIVA, setTasaIVA] = useState(21); // Tasa de IVA en porcentaje
  const [iva, setIVA] = useState(0);
  const [mostrarTolIva,setMostrarTolIva] = useState(false)
  const [error,setError] = useState ('')

  const calcularIVA = () => {
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
      <h2 className='p-5 font-medium underline underline-offset-8'>Calculadora de IVA</h2>
      <div className='grid grid-cols-2 gap-5 my-5'>
      <div className='flex flex-col items-center '>
        <label className='text-3xl'>Precio: </label>
        <input
          type="text"
          value={isNaN(precio) ? '' : precio}
          onChange={(e) => setPrecio(parseFloat(e.target.value))}
          className='my-2 placeholderiva '
        />
      </div>
      <div className='flex flex-col items-center'>
        <label className='text-3xl'>Tasa de IVA (%): </label>
        <input
          type="text"
          value={isNaN(tasaIVA)? '' : tasaIVA}
          onChange={(e) => setTasaIVA(parseFloat(e.target.value))}
          className='my-2 placeholderiva '
        />
      </div>
      </div>
      <button onClick={calcularIVA }
      className='p-2 my-4 text-lg font-bold rounded-lg text-slate-600 bg-slate-200 ring-2 ring-pink-500 ring-inset'>
        Calcular IVA</button>
        {error && <p className='text-lg text-red-500'>{error}</p>}
        {mostrarTolIva && (
      <div className='grid items-center grid-rows-2 gap-3 my-5 text-3xl text-center'>
        <h3>IVA Calculado: {isNaN(iva) ? '' : iva.toFixed(2)}</h3>
        <h2>Precio Total con IVA: {isNaN(calcularTotalConIVA()) ? '':  calcularTotalConIVA().toFixed(2)}</h2>
      </div>
    )}
    <div>

</div>

    </section>
  );
}

export default Calc_iva;