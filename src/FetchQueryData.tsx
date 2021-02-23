import React, { FC } from 'react';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

type PostType = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const FetchQueryData: FC = () => {
	const fetchPosts = (): Promise<AxiosResponse<PostType[]>> => {
		return axios.get('https://jsonplaceholder.typicode.com/posts');
	};

	const { data: posts, isLoading, refetch } = useQuery(
		'posts',
		// @ts-ignore
		fetchPosts,
		{
			staleTime: 30000,
		}
	);

	return (
		<div>
			<div
				style={{
					background: 'green',
					marginBottom: '1rem',
					padding: '0.875rem',
				}}
			>
				<p>
					The "data is loading..." only displays on the first mount.
					Afterwards "data is loading..." never display again.
				</p>
				<p>
					Stale time is currently set to 30 seconds so if users
					navigates to this page within that time, endpoint is not
					called again and data is automatically displayed.
				</p>
				<p>
					After 30 seconds, data is still automatically displayed and
					endpoint is called in the background. Once the data is
					fetched, it would update the UI accordingly.
				</p>
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
				onClick={() => refetch()}
			>
				Refresh data
			</button>

			{isLoading && (
				<p style={{ fontSize: '3rem' }}>Data is loading...</p>
			)}

			{posts?.data.map((item) => (
				<div
					key={item.id}
					style={{
						padding: '1rem',
						borderBottom: '0.175rem solid #dedede',
						marginBottom: '0.5rem',
					}}
				>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
				</div>
			))}
		</div>
	);
};

export default FetchQueryData;
