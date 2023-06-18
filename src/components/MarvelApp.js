import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function MarvelApp() {
    const navigate=useNavigate();
    const [personajes, setPersonajes] = useState([]);
    const hash = process.env.REACT_APP_HASH;
    const key = process.env.REACT_APP_PUBLIC_KEY;
    const url = `${process.env.REACT_APP_URL}&apikey=${key}&hash=${hash}`;

    useEffect(() => {
        axios.get(url)
            .then(resp => {
                setPersonajes(resp.data.data.results);
                console.log(resp.data);
            })
            .catch(error => { console.log(error) })
    }, [])
    console.log(personajes);
    
    function handleClick(id){
        navigate(`/${id}`);
    }

    return (
        <Fragment>
            <img src="../img/marvel.png" width="300px" alt="" />
            <h1>MARVEL</h1>

            <div className="card-group">
                {personajes.map(per => (
                    <div class="card" key={per.id}>
                        <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} class="card-img-top" width="200px" alt="..." />
                        <div className="card-body">
                            <button onClick={()=>(navigate(`/home/${per.id}`))} className="card-title">{per.name}</button>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}