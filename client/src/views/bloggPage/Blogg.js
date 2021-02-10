import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import ReactDOM from 'react-dom'

const axios = require('axios');

const Blogg = () => {
    const pageID = process.env.REACT_APP_FACEBOOK_ID;
    const token = process.env.REACT_APP_FACEBOOK_TOKEN;
    const url = `https://graph.facebook.com/${pageID}/feed?access_token=${token}`;
    let [fbData, setFbData] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => setFbData(response.data.data));
    }, [url]);
//       style={{margin: '5px', padding: '5px', width: 800, height: 680}}> style={{paddingTop: 40}}

    const facebookEl = (postID: string) => {
        const url = `https://www.facebook.com/102417811874407/posts/${postID}&adapt_container_width=true`
        const iframeBase = 'https://www.facebook.com/plugins/post.php?href=';
        const iframeSrc = `${iframeBase}${url}`;
        const element = <iframe
            style={{
                marginTop: 40,
                //width: 400,
                overflow: "hidden", maxHeight: 700
            }}
            src={iframeSrc}
            scrolling="no"
            frameBorder={0}
            width="100%"
       />



       // const obj = document.body.getElementsByTagName("iframe")
        //console.log([...obj])
        return element
    }
    return (
        <>
            {fbData.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            maxWidth: 640, overflow: 'auto',
                        }}
                        className="col-lg-5 col-md-5 col-sm-5 container justify-content-center ">


                        <Row style={{
                            overflow: "auto", textAlign: "center",

                            display: "inline-block"
                        }}>
                            {facebookEl(post.id.split("_")[1])}
                        </Row>
                    </div>
                )
            )}
        </>
    );
};
export default Blogg;

class SmartIFrame extends React.Component {
    render() {
        return <iframe srcDoc={this.props.srcDoc}
                       scrolling="no"
                       frameBorder={0}
                       width="100%"
                       onLoad = {e => setTimeout(() => {
                           const obj = ReactDOM.findDOMNode(this);
                           obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
                       }, 50)}/>
    }
}