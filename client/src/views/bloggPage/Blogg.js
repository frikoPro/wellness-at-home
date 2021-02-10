import React, {useEffect, useState} from 'react';
import {Facebook} from 'reactjs-social-embed';
import {Row} from "react-bootstrap";
const axios = require('axios');

const Blogg = () => {
    const pageID = process.env.REACT_APP_FACEBOOK_ID;
    const token = process.env.REACT_APP_FACEBOOK_TOKEN;
    const url = `https://graph.facebook.com/${pageID}/feed?access_token=${token}`;
    let [fbData, setFbData] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => setFbData(response.data.data));
    }, [url]);
//       style={{margin: '5px', padding: '5px', width: 800, height: 680}}>
    return (
        <>
            {fbData.map((post) => (
                <div style={{paddingTop: 40}}
                     className="col-lg-5 col-md-5 col-sm-5 container justify-content-center">
                    <Row>
                            <Facebook type="post"
                                      width="800px"
                                      height="680"
                                      url={`https://www.facebook.com/102417811874407/posts/${post.id.split("_")[1]}`} />
                    </Row>
                </div>
            )
            )}
        </>
    );
};
export default Blogg;
