import axios from 'axios';
import { useEffect } from 'react';

export default function MarvelApp() {
    const hash = process.env.REACT_APP_HASH;
    const key = process.env.REACT_APP_PUBLIC_KEY;
    const url = `${process.env.REACT_APP_URL}&apikey=${key}&hash=${hash}`; 

    useEffect(() => {
        axios.get(url)
            .then(resp => {
                console.log(resp.data);
            })
    }, [])

    return (
        <div>

        </div>
    )
}