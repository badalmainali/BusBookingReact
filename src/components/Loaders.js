import React,{useState} from 'react'
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";


function Loaders() {
    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        `;
    let [loading, setLoading] = useState(true);
    

    return (
        <div style={{marginTop:'180px'}} className="sweet-loading text-center ">
           

            <RingLoader color='#000' loading={loading} css='' size={85} />
        </div>
    )
}

export default Loaders