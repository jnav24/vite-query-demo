import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

type PostType = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const FetchData: FC = () => {
	const [localData, setLocalData] = useState<Array<PostType>>([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleRefresh = async () => {
		const { status, data } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);

		if (status === 200) {
			setLocalData(data);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		handleRefresh();
	}, []);

	return (
		<div>
			<div
				style={{
					background: '#dedede',
					marginBottom: '1rem',
					padding: '0.875rem',
				}}
			>
				Endpoint is being called everytime user navigates to this page
				and "data is loading..." always displays on mount.
			</div>

			<button
				style={{
					backgroundColor: 'blue',
					border: '0',
					borderRadius: '0.375rem',
					color: '#fff',
					cursor: 'pointer',
					padding: '1rem',
				}}
				type="button"
				onClick={() => {
					setIsLoading(true);
					setLocalData([]);
					handleRefresh();
				}}
			>
				Refresh data
			</button>
			{isLoading && (
				<p style={{ fontSize: '3rem' }}>Data is loading...</p>
			)}

			{localData.map((data) => (
				<div
					key={data.id}
					style={{
						padding: '1rem',
						borderBottom: '0.175rem solid #dedede',
						marginBottom: '0.5rem',
					}}
				>
					<h3>{data.title}</h3>
					<p>{data.body}</p>
				</div>
			))}
		</div>
	);
};

export default FetchData;
