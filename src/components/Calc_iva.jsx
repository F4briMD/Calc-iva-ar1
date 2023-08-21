import  { useState } from 'react';

function Calc_iva() {
  const [precio, setPrecio] = useState();
  const [tasaIVA, setTasaIVA] = useState(21); // Tasa de IVA en porcentaje
  const [iva, setIVA] = useState(0);

  const calcularIVA = () => {
    const ivaCalculado = (precio * tasaIVA) / 100;
    setIVA(ivaCalculado);
  };
  const calcularTotalConIVA = () => {
    return precio + iva;
  };

  return (
    <section className='max-w-4xl p-5 text-center'>
      <h2 className='p-5'>Calculadora de IVA</h2>
      <div className='grid grid-cols-2 gap-5 '>
      <div className='flex flex-col items-center '>
        <label>Precio: </label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(parseFloat(e.target.value))}
          className='mt-1 placeholderiva '
        />
      </div>
      <div className='flex flex-col items-center'>
        <label>Tasa de IVA (%): </label>
        <input
          type="number"
          value={tasaIVA}
          onChange={(e) => setTasaIVA(parseFloat(e.target.value))}
          className='mt-1 border-none placeholderiva focus:ring-cyan-400 focus:border-cyan-400'
        />
      </div>
      </div>
      <button onClick={calcularIVA}
      className='p-2 text-lg font-bold rounded-lg text-slate-600 bg-slate-200'>
        Calcular IVA</button>
      <div>
        <h3>IVA Calculado: {iva.toFixed(2)}</h3>
        <h2>Precio Total con IVA: {calcularTotalConIVA().toFixed(2)}</h2>
      </div>
      
    </section>
  );
}

export default Calc_iva;