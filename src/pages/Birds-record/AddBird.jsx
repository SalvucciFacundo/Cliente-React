
export const AddBird = () => {
    return (
        <>
            <div className="card text-secondary border-primary mb-2 ">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center">Registrar ejemplar</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card size">
                <div className="card-body">
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Procedencia</label>
                            <input type="text" className="form-control" placeholder="Ingrese procedencia" />

                            <label className="form-label mt-3">Temporada</label>
                            <input type="text" className="form-control" placeholder="Ingrese temporada" />

                            <label className="form-label mt-3">Color de anillo</label>
                            <select className="form-select">
                                <option value="sn">Sin anillo</option>
                                <option value="violeta">Violeta</option>
                                <option value="verde">Verde</option>
                                <option value="negro">Negro</option>
                                <option value="rojo">Rojo</option>
                                <option value="azul">Azul</option>
                                <option value="naranja">Naranja</option>
                            </select>

                            <label className="form-label mt-3">Número de anillo</label>
                            <input type="text" className="form-control" placeholder="Ingrese número" />

                            <label className="form-label mt-3">Genero</label>
                            <select className="form-select">
                                <option value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                                <option value="desconocido">Desconocido</option>
                            </select>

                            <label className="form-label mt-3">Linea</label>
                            <input type="text" className="form-control" placeholder="seleccione linea" />

                            <label className="form-label mt-3">Estado</label>
                            <select className="form-select">
                                <option value="criadero">Criadero</option>
                                <option value="vendido">Vendido</option>
                                <option value="muerto">Muerto</option>
                                <option value="otro">Otro</option>
                            </select>

                            <label className="form-label mt-3">Observaciones del estado</label>
                            <textarea className="form-control" placeholder="Ingrese informacion adicional del estado del ejemplar">
                            </textarea>

                            <label className="form-label mt-3">Padre</label>
                            <input type="text" className="form-control" placeholder="seleccione ejemplar" />

                            <label className="form-label mt-3">Madre</label>
                            <input type="text" className="form-control" placeholder="seleccione ejemplar" />

                            <label className="form-label mt-3">Postura</label>
                            <input type="text" className="form-control" placeholder="Ingrese número de postura" />

                            <label className="form-label mt-3">Observaciones</label>
                            <textarea className="form-control" placeholder="Ingrese informacion adicional del ejemplar">
                            </textarea>


                            <div className="btn-group d-flex justify-content-center">
                                <button type="button" className="button btn btn-primary card-button mt-3">Aceptar</button>
                                <button type="button" className="button btn btn-danger card-button mt-3">Cancelar</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
