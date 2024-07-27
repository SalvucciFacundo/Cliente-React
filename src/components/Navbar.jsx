import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarExample-expand-lg"
            aria-controls="offcanvasNavbarExample-expand-lg"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#offcanvasNavbarExample-expand-lg"
            ></span>
          </button>
          <Link className="navbar-brand" to="/home">
            <img
              src="src\assets\logoBlanco.png"
              alt=""
              width="30"
              height="30"
            />
            <Link className="navbar-brand  me-2" to="/home">
              Mis Canarios
            </Link>
          </Link>
          <div
            className="offcanvas offcanvas-start bg-primary"
            data-bs-hideresize="true"
            tabIndex={-1}
            id="offcanvasNavbarExample-expand-lg"
            aria-labelledby="offcanvasNavbarExample-expand-lg"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasLabel"
                style={{ color: "white" }}
              >
                Mis Canarios
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body bg-primary">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/home">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/BirdsRecord/list">
                    Canarios
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="#">
                    Parejas
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="#">
                    Estadisticas
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/auth/login"
                  >
                    Nomenclador
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-nav ml-auto">
            <Link className="btn btn-outline-light btn-sm rou" to="/auth/login">
              Ingresar
            </Link>
            <Link
              className="btn btn-outline-light btn-sm ms-1"
              to="/auth/register"
            >
              Registrarce
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
