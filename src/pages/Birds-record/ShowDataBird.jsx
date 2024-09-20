export const ShowDataBird = () => {

    return (
        <>
            <div className="card text-secondary border-primary mb-2 ">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">Datos del ejemplar</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card size">
                <div className="card-body">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Procedencia</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Temporada</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Color de anillo</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Número de anillo</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Genero</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Linea</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Estado</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Observaciones del estado</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Padre</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Madre</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Postura</label>
                            <input type="text" className="form-control" value={"test"} disabled />

                            <label className="form-label mt-3">Observaciones</label>
                            <input type="text" className="form-control" value={"test"} disabled />


                            <div className="btn-group d-flex justify-content-center">
                                <button type="button" className="button btn btn-editar card-button mt-3">Editar</button>
                                <button type="button" className="button btn btn-danger card-button mt-3">Volver</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}