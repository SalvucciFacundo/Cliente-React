import { Link } from "react-router-dom"

export const ListBirds = () => {
    return (
        <>
            <div>
                <div className="card text-secondary border-primary ">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="text-center">Lista de ejemplares</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card text-secondary border-primary ">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-9">
                                <input type="search" className="buscar" placeholder="Buscar ejemplar" />
                            </div>
                            <div className="col-md-3">
                                <div className="float-end">
                                    <Link className="btn btn-success mr-1 btn-agregar" to="/BirdsRecord/add">Agregar nuevo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1 m-1">
                <div className="col">
                    <div className="card h-100">
                        <h5 className="card-header text-center">Ejemplar</h5>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Numero de anillo: <h5>0001</h5>
                                </li>
                                <li className="list-group-item">
                                    Linea: <h5>blanco</h5>
                                </li>
                                <li className="list-group-item">
                                    Procedencia: <h5>casa</h5>
                                </li>
                                <li className="list-group-item">
                                    Genero: <h5>macho</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer text-center btn-group">
                            <button type="button" className="btn btn-dark card-button">Mostrar</button>
                            <button type="button" className="btn btn-danger card-button">Eliminar</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <h5 className="card-header text-center">Ejemplar</h5>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Numero de anillo: <h5>0001</h5>
                                </li>
                                <li className="list-group-item">
                                    Linea: <h5>blanco</h5>
                                </li>
                                <li className="list-group-item">
                                    Procedencia: <h5>casa</h5>
                                </li>
                                <li className="list-group-item">
                                    Genero: <h5>macho</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer text-center btn-group">
                            <button type="button" className="btn btn-dark card-button">Mostrar</button>
                            <button type="button" className="btn btn-danger card-button">Eliminar</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <h5 className="card-header text-center">Ejemplar</h5>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Numero de anillo: <h5>0001</h5>
                                </li>
                                <li className="list-group-item">
                                    Linea: <h5>blanco</h5>
                                </li>
                                <li className="list-group-item">
                                    Procedencia: <h5>casa</h5>
                                </li>
                                <li className="list-group-item">
                                    Genero: <h5>macho</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer text-center btn-group">
                            <button type="button" className="btn btn-dark card-button">Mostrar</button>
                            <button type="button" className="btn btn-danger card-button">Eliminar</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <h5 className="card-header text-center">Ejemplar</h5>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Numero de anillo: <h5>0001</h5>
                                </li>
                                <li className="list-group-item">
                                    Linea: <h5>blanco</h5>
                                </li>
                                <li className="list-group-item">
                                    Procedencia: <h5>casa</h5>
                                </li>
                                <li className="list-group-item">
                                    Genero: <h5>macho</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer text-center btn-group">
                            <button type="button" className="btn btn-dark card-button">Mostrar</button>
                            <button type="button" className="btn btn-danger card-button">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
