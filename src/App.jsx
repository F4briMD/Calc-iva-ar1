import { useState, useEffect } from "react";
import Calc_iva from "./components/Calc_iva";
import ValorDolar from "./components/ValorDolar";
import Footer from "./components/Footer";

function App() {
  const [dolarBlueData, setDolarBlueData] = useState([]);


  const [loading, setLoading] = useState(true);


  const getDolarBlue = async () => {
    try {
      const res = await fetch(`https://api.bluelytics.com.ar/v2/latest`);
      const data = await res.json();

      setDolarBlueData(data);
    } catch (error) {
      console.error("Error fetching Dolar Blue data", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDolarBlue();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen max-w-6xl mx-auto text-4xl font-normal text-white font-Poppins ">
      <ValorDolar dolarBlueData={dolarBlueData} loading={loading}/>

      <section className="flex flex-col items-center justify-center h-screen mx-auto ">
        <h2 className="p-5 font-medium underline mb-7 underline-offset-8 max-md:text-center decoration-blue-600">
          Calculadora de <span className="text-blue-500">IVA</span>
        </h2>
        <Calc_iva/>
      </section>
      <Footer/>
    </main>
  );
}

export default App;
