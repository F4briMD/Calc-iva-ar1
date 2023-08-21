import  { useState } from 'react';

function Calc_iva() {
  const [precio, setPrecio] = useState(0);
  const [tasaIVA, setTasaIVA] = useState(21); // Tasa de IVA en porcentaje
  const [iva, setIVA] = useState(0);

  const calcularIVA = () => {
    const ivaCalculado = (precio * tasaIVA) / 100;
    setIVA(ivaCalculado);
  };

  return (
    <div className=' mx-auto'>
      <h2 className=''>Calculadora de IVA</h2>
      <div>
        <label>Precio: </label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Tasa de IVA (%): </label>
        <input
          type="number"
          value={tasaIVA}
          onChange={(e) => setTasaIVA(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calcularIVA}>Calcular IVA</button>
      <div>
        <h3>IVA Calculado: {iva.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Calc_iva;