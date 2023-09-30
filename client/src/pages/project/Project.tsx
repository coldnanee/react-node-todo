import { Layout } from "../../layout/Layout";

import { useParams } from "react-router-dom";

export const ProjectPage = () => {
	const { name } = useParams();

	return (
		<Layout>
			<div>{name}</div>
		</Layout>
	);
};
