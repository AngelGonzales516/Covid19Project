
function CardSmall ({title}) {
    return (
        <section className="flex justify-center w-11/12 h-80 my-7 md:w-11/12 Cards align-center">
            <section className="flex flex-col items-center justify-center w-full border-2 border-black border-solid rounded-3xl">
                <div className="flex items-center justify-center w-full h-full mt-5 text-white bg-gray-600">Gráfico</div>
                <h2>{title}</h2>
            </section>
        </section>
      );
}

export default CardSmall;