import React, { useEffect, useState } from 'react';
import styles from './Blogg.module.css';
import axios from 'axios';
import ContentLoader from 'react-content-loader';

const Blogg = () => {
	let [fbData, setFbData] = useState([]);
	let [loading, setLoading] = useState(false);

	useEffect(() => {
		axios.get('/facebook').then((response) => {
			const data = response.data.data;
			const newData = data.map((item) => ({
				...item,
				page_id: item.id.split('_')[0],
				post_id: item.id.split('_')[1],
			}));
			setFbData(newData);
			setLoading(true);
			window?.FB?.XFBML?.parse(); //Loads the JS SDK again so that the "slower" elements gets detected when they render
		});
	}, []);

	const SkeletonLoader = () => (
		<ContentLoader
			className={`${styles.SkeletonLoader}`}
			speed={2}
			width={500}
			height={600}
			viewBox="0 0 400 460"
			backgroundColor="#d9d9d9"
			foregroundColor="#969696">
			<rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
			<rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
			<rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
			<rect x="0" y="72" rx="3" ry="3" width="410" height="6" />
			<rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
			<circle cx="20" cy="20" r="20" />
			<rect x="0" y="110" rx="2" ry="2" width="500" height="600" />
		</ContentLoader>
	);

	return (
		<>
			<div className={`${styles.mainContainer}`}>
				{loading ? (
					fbData.map((post) => (
						<div key={post.post_id} className={`align-self-center text-center ${styles.post}`}>
							<div
								data-href={`https://www.facebook.com/102417811874407/posts/${post.post_id}/`}
								key={post.post_id} //PostID is unique and a good key
								className="fb-post"
								data-width="1200"
								data-show-text="true"
								style={{ boxShadow: '5px 5px 5px #b3b3b3' }}
							/>
						</div>
					))
				) : (
					<div className={`align-self-center text-center ${styles.post}`}>
						<SkeletonLoader />
					</div>
				)}
			</div>
		</>
	);
};

export default Blogg;

// https://www.npmjs.com/package/react-content-loader
