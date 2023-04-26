import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="mx-1 px-2">
      <div className="card bg-secondary text-light d-flex">
        <img
          src="https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2023-04/718894-1674768322230126685-20-281-29.jpg?h=03ab90db&itok=3_Zhw9ee"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center h3">
            Una sociedad de bolsa se disculpó por haber contribuido a la corrida
            cambiaria
          </h5>
          <p className="card-text align-justify card-news-body bg-light text-dark rounded p-2 h6">
            El Ministerio de Economía abrirá un sumario. En un comunicado, la
            empresa admitió que los rumores "sólo generan incertidumbre y
            atentan contra el buen funcionamiento de la economía". Envió una
            carta a Sergio Massa. 22 de abril de 2023 - 14:08 La disculpa llega
            después de una semana de tensiones por la suba brusca del dólar.
            (Fuente: NA) La disculpa llega después de una semana de tensiones
            por la suba brusca del dólar. . Imagen: NA La sociedad de corredores
            de bolsa Max Capital pidió este sábado disculpas públicamente por
            haber difundido un "rumor infundado" de una presunta devaluación en
            el tipo de cambio, acción que llevó al Ministerio de Economía a
            plantear una apertura de sumario a la empresa. El mensaje emitido
            por la sociedad de bolsa a su cartera de clientes locales y del
            exterior, y que luego se viralizó, afirmaba que en "el mercado
            local" circulaban "rumores muy fuertes de una devaluación cambiaria
            el (próximo) lunes".
          </p>
          <div className="d-flex">
            <a className="btn btn-primary mx-3">
              <Link className="text-decoration-none text-white" to="/">
                Volver
              </Link>
            </a>
            <a href="#" className="btn btn-success mx-3">
              Editar
            </a>
            <a href="#" className="btn btn-danger mx-3">
              Eliminar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
