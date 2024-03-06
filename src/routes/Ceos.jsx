import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
    const url = "http://localhost:8000/ceos";
    const data = await fetch(url).then((response) => response.json());

    return { data };
}

const Ceos = () => {
    const { data } = useLoaderData();
    return (
        <>
            <h2>CEO List</h2>
            <ul>
                {data.map((ceo, index) => {
                    return (
                        <li key={index}>
                            <Link to={ceo.slug}>
                                {ceo.name} - {ceo.year}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Ceos;
