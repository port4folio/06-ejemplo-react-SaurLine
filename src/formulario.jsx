import { useRef, useState, useEffect } from "react";
import ListaHyrax from "./lista";

const KEY="hyrax"


function Formulario(){
    const [hyrax,setHyrax]=useState(
        JSON.parse(localStorage.getItem(KEY))?JSON.parse(localStorage.getItem(KEY)):[]
    );
    useEffect(()=>{
        localStorage.setItem(KEY,JSON.stringify(hyrax));
        },[hyrax]);
    
    const [editando, setEditando] = useState(null);

    const nom=useRef();
    const eda=useRef();
    const pes=useRef();
    const habit=useRef();

    const Guardar=()=>{
        const nombre=nom.current.value;
        const edad=eda.current.value;
        const peso=pes.current.value;
        const habitat=habit.current.value;
        if (nombre ===""||edad===""||peso===""||habitat===""){
            Swal.fire({
            icon:"error",
            title:"Oops...",
            text:"Debe rellenar todos los campos",
            footer:""
        })
        }
        else{
            const nuevoHyrax = {
                nombre,
                edad,
                peso,
                habitat
            }
    if (editando !== null) {
        setHyrax(prev =>
            prev.map((item, i) =>
                i === editando ? nuevoHyrax : item
            )
        );
        setEditando(null);
    } 
    else {
        setHyrax(prev => [...prev, nuevoHyrax]);
    }            
        nom.current.value="";
        eda.current.value="";
        pes.current.value="";
        habit.current.value="";
    }
        }
    const Borrar = (index) => {
    setHyrax((prev) => prev.filter((_, i) => i !== index));
};
    const Editar = (index) => {
        const h = hyrax[index];

        nom.current.value = h.nombre;
        eda.current.value = h.edad;
        pes.current.value = h.peso;
        habit.current.value = h.habitat;

        setEditando(index);
};

    
    return (
        <>
            <h1>Formulario</h1>
            <p>Ingrese los datos de su hryax:</p>
            <div className="input-group mb-3 mt-4">
                <input ref={nom} placeholder="Nombre" className="form-control" type="text" name="" id="">
                </input>

                <input ref={eda} placeholder="edad" className="form-control" type="text" name="" id="">
                </input>

                <input ref={pes} placeholder="Peso" className="form-control" type="text" name="" id="">
                </input>

                <input ref={habit} placeholder="Habitat" className="form-control" type="text" name="" id="">
                </input>
                <button onClick={Guardar} className="btn btn-success ms-2"><i className="bi bi-plus-circle-fill">
                    </i></button>
            </div>
            <h1>Lista</h1>
            <ListaHyrax
                hyrax={hyrax}
                borrar={Borrar}
                editar={Editar}
            />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaq1UGR0iBYhe21XirfOJ8wxn6SlK1ZoYaixxRQXffcg&s=10" width="300px" alt="" />
            <img src="https://hyrax.world/wp-content/uploads/2024/06/381493196_837620917768581_635107292374656496_n-1024x1024-1.jpeg"width="262px" alt="" />
        </>
    );
}

export default Formulario