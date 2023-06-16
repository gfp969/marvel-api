import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MarvelApp() {
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

    return (
        <div className="card-group">
            {personajes.map(per => (
                <div class="card" key={per.id}>
                    <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} class="card-img-top" width="200px" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{per.name}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}