import React, {useEffect, useState} from 'react';

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
                    <div
                        className="fb-post"
                        data-href={`https://www.facebook.com/102417811874407/posts/${post.id.split("_")[1]}`}
                        data-width="auto"
                        data-show-text="true"
                        // style={{height: 1000}}
                    />
                )
            )}
        </>
    );
};
export default Blogg;