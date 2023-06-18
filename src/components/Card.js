import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Card() {
    const { id } = useParams();
    const [item, setItem] = useState();

    const f = async () => {
        const resp = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=16d26f80df88ddbbbaf81cb21a170de0&hash=ac9171e9dabec1e0d4f75aea8173a825`);
        setItem(resp.data.data.results[0]);
    };

    useEffect(()=>{f();},[]); 

    return (
        <>
            {
                (!item) ? "" : (
                    <div className="box-content">
                        <div className="right-box">
                            <img width="200px" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                        </div>
                    </div>
                )
            }
        </>
    )
}