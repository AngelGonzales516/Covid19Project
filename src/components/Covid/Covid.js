import {useEffect} from 'react';
import CardSmall from "./../Cards/Card";
import CardPrincipal from "./../Cards/CardPrincipal";
import getCountryCodeTotal from './CovidApi';
import Form from "./../Forms/Form";
import FormField from "./../Forms/FormField";
import FormAction from "./../Forms/FormAction";

function Covid (){

  return (
    <section>
      <section class="m-auto my-5 flex justify-center items-center">
        <Form>
          <FormField
            type="text"
            id="username"
            fname="username"
            onChange=""
            value=""
            error=""
          ></FormField>
          <FormAction
            caption="Buscar"
            onClick=""
          ></FormAction>
        </Form>
      </section>

      <section class="h-screen">
        <CardPrincipal title="Panorama Actual"></CardPrincipal>
      </section>
      
      <section class="flex justify-center items-center">
        <h2 class="text-3xl md:text-6xl">Ultimos Datos Obtenidos</h2>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 align-center justify-center">
        <div class="flex justify-center items-center">
          <CardSmall title="Confirmados" class="col-span-1 m-auto"></CardSmall>
        </div>
        <div class="flex justify-center items-center">
          <CardSmall title="Activos" class="col-span-1 m-auto"></CardSmall>
        </div>
        <div class="flex justify-center items-center">
          <CardSmall title="Recuperados" class="col-span-1 m-auto"></CardSmall>
        </div>
        <div class="flex justify-center items-center">
          <CardSmall title="Muertos" class="col-span-1 m-auto"></CardSmall>
        </div>
      </section>
      <footer class="w-full h-20 bg-gray-900 text-white flex items-center justify-center">
        Desarrollo de Portales Web 2, Grupo 2 &copy; 2021
      </footer>
    </section>
  );
}


export default Covid;


/*
<section>
        <div class="grid gap-0.001 grid-cols-1 md:grid-cols-2 p-2">
            

            <img src="https://tec.mx/sites/default/files/styles/header_full/public/2020-07/abc-ejercicio-aprende-necesario-actividad-fisica.jpg?h=920929c4&itok=L3lqBYVp"
            class="imgn border-4 border-light-blue-500 border-opacity-50"
            ></img>
            <img src="https://img.europapress.es/fotoweb/fotonoticia_20180921083333_1200.jpg"
            class="imgn border-4 border-light-blue-500 border-opacity-50"
            ></img>
            <img src="https://tiemporeal.periodismoudec.cl/wp-content/uploads/2020/12/5-alternativas-a-Spotify-para-escuchar-musica-gratis-1068x623-1.jpg"
            class="imgn border-4 border-light-blue-500 border-opacity-50"
            ></img>
            <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2020/08/cocinar-mas-rapido.jpg"
            class="imgn border-4 border-light-blue-500 border-opacity-50"
            ></img>
            
        </div>

      </section>
*/