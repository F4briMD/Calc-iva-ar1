const ValorDolar = ({ dolarBlueData, loading }) => {
  return (
    <>
      {loading ? (
        <span className="mt-4 text-sm text-center">Cargando...</span>
      ) : (
        <section className="flex flex-row gap-3 mt-5 text-center ">
          <p className="text-lg font-medium text-gray-300 underline max-md:text-sm underline-offset-4 decoration-blue-500">
            Dólar Compra:{" "}
            <span className="text-xl text-blue-500">
              ${dolarBlueData.oficial.value_buy}
            </span>
          </p>
          <p className="text-lg font-medium text-gray-300 underline max-md:text-sm underline-offset-4 decoration-blue-500">
            Blue Compra:{" "}
            <span className="text-xl text-blue-500">
              ${dolarBlueData.blue.value_buy}
            </span>
          </p>
          <p className="text-lg font-medium text-gray-300 underline max-md:text-sm underline-offset-4 decoration-blue-500">
            Blue Venta:{" "}
            <span className="text-xl text-blue-500">
              ${dolarBlueData.blue.value_sell}
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default ValorDolar;
