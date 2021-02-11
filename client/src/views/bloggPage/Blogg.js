import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";

const axios = require('axios');

const Blogg = () => {
    const pageID = process.env.REACT_APP_FACEBOOK_ID;
    const token = process.env.REACT_APP_FACEBOOK_TOKEN;
    const url = `https://graph.facebook.com/${pageID}/feed?access_token=${token}`;
    let [fbData, setFbData] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            const data = response.data.data;
            const newData = data.map(item => {
                return {...item, page_id: item.id.split("_")[0], post_id: item.id.split("_")[1]}
            })
            console.log(newData)
            setFbData(newData)
            window?.FB?.XFBML?.parse() //Loads the JS SDK again so that the "slower" elements gets detected when they render
        });
    }, [url]);

//       style={{margin: '5px', padding: '5px', width: 800, height: 680}}>
    // <div className="fb-post" data-href="https://www.facebook.com/102417811874407/posts/106722811443907/" data-width="500" data-show-text="true"></div>


    return (<div> {fbData.map((post) => (
                <div style={{paddingTop: 40}}
                     className="col-lg-5 col-md-5 col-sm-5 container justify-content-center">
                    <Row>
                        <div
                            key={post.post_id}
                            className="fb-post"
                            data-href={`https://www.facebook.com/102417811874407/posts/${post.post_id}/`}
                            data-width="500"
                            data-show-text="true"
                        />
                    </Row>


                </div>

            )
        )} </div>

    );
};

export default Blogg;
