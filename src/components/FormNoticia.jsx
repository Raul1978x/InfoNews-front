import React from "react";

const FormNoticia = () => {
  return (
    <div className="container bg-warning bg-opacity-75 rounded text-dark">
      <form
        className="formulario"
        action="@{/admin/carga}"
        method="POST"
        enctype="multipart/form-data"
      >
        <div className="mb-3">
          <label for="titulo" className="form-label">
            Tìtulo de la noticia
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            placeholder="Ingrese el tìtulo de la noticia"
          />
        </div>
        <div className="mb-3">
          <label for="bajada" className="form-label">
            Bajada de la noticia
          </label>
          <textarea
            className="form-control"
            id="bajada"
            name="bajada"
            rows="3"
            placeholder="Ingrese la bajada de la noticia"
          ></textarea>
        </div>
        <div className="mb-3">
          <label for="cuerpo" className="form-label">
            Cuerpo de la noticia
          </label>
          <textarea
            className="form-control"
            id="cuerpo"
            name="cuerpo"
            rows="10"
            placeholder="Ingrese el cuerpo de la noticia"
          ></textarea>
        </div>
        <div className="mb-3">
          <label for="formFile" className="form-label">
            Cargar imagen del producto
          </label>
          <input
            className="form-control"
            type="file"
            name="archivo"
            id="formFile"
          />
        </div>
        <button type="submit" className="btn btn-dark m-3 text-right">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default FormNoticia;
