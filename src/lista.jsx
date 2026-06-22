function ListaHyrax({ hyrax, borrar, editar }) {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Peso</th>
                        <th>Hábitat</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {hyrax.map((h, index) => (
                        <tr key={index}>
                            <td>{h.nombre}</td>
                            <td>{h.edad}</td>
                            <td>{h.peso}</td>
                            <td>{h.habitat}</td>
                            <td>
                                <button onClick={() => editar(index)} className="btn btn-warning">
                                    <i className="bi bi-pencil-fill"></i>
                                </button>
                            </td>
                            <td>
                                <button onClick={() => borrar(index)} className="btn btn-danger">
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ListaHyrax;
