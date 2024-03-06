import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const { slug } = params;
    const url = `http://localhost:8000/ceos/${slug}`;
    const data = await fetch(url).then((response) => response.json());

    return { data };
}

const SingleCeo = () => {
    const { data } = useLoaderData();

    return (
        <p>
            {data.name} became CEO of Apple in {data.year}.
        </p>
    );
};

export default SingleCeo;
