import React, {useEffect, useState} from "react";
import { Facebook } from 'reactjs-social-embed'
import "./Nyheter.css"
const axios = require('axios');

const Nyheter = () => {

    const pageID = process.env.REACT_APP_FACEBOOK_ID
    const token = process.env.REACT_APP_FACEBOOK_TOKEN

    const url = `https://graph.facebook.com/${pageID}/feed?access_token=${token}`

    let [ fbData, setFbData ] = useState([])

    useEffect(()=>{
        axios.get(url).then(response => setFbData(response.data.data))
    },[])

    return (
        <>
            {fbData.map((post) =>
                <div style={{border: "1px solid black", margin: "5px", padding: "5px"}}>
                    <p>postID: {post.id.split("_")[0]}</p>
                    <p>pageID: {post.id.split("_")[1]}</p>

                    <Facebook type="post" width="100%"
                        url={`https://www.facebook.com/102417811874407/posts/${post.id.split("_")[1]}`} />
                </div>
            )}


        </>
    )
}
export default Nyheter;