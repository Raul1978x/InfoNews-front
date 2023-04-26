import React from "react";

const ListaUsuarios = () => {
  const usuario = {
    nombre: "Raúl Gómez",
  };

  return (
    <div className="container ">
      <div className="row  bg-warning bg-opacity-50 ">
        <div className="">
          <table className="table table-striped">
            <input hidden value="${id}" name="id" />

            <thead className="my-2">
              <th>Nombre</th>
              <th>Email</th>
              <th>Tipo de usuario</th>
              <th>Imagen</th>
              <th className="text-left">Accion</th>
            </thead>
            <tbody className="my-2 align-middle" each="usuario: ${usuarios}">
              <tr className="text-left">
                <td scope="row" value="${usuario.nombre}">
                  nombre
                </td>
                <td scope="row" text="${usuario.email}">
                  email
                </td>
                <td scope="row" className="fw-bold " text="${usuario.rol}">
                  rol
                </td>
                <td scope="row">
                  <img
                    width="50em"
                    src="@{/imagen/perfil/__${usuario.id}__}"
                  ></img>
                </td>
                <td>
                  <ul>
                    <li>
                      <a
                        href="@{/admin/editarUsuario/__${usuario.id}__}"
                        className="text-dark text-decoration-none"
                      >
                        🖋Editar
                      </a>
                    </li>
                    <li>
                      <a
                        href="@{/admin/cambiarRol/__${usuario.id}__}"
                        className="text-dark text-decoration-none"
                      >
                        🪶Cambiar rol
                      </a>
                    </li>
                    <li>
                      <a
                        href="@{/admin/eliminarUsuario/__${usuario.id}__}"
                        className="text-dark text-decoration-none"
                      >
                        👎Eliminar
                      </a>
                    </li>
                    <li>
                      <a
                        href="@{/admin/enviarEmail/__${usuario.id}__}"
                        className="text-dark text-decoration-none"
                      >
                        📨Enviar Email
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListaUsuarios;
