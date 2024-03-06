import { Form, redirect } from "react-router-dom";
import slugify from "slugify";

export async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get("ceoName");
    const slug = slugify(name, {
        replacement: "_",
        lower: true,
        strict: true,
    });
    const year = formData.get("ceoYear");
    // Format our Data as JSON
    const data = { name, slug, year: Number(year) };
    // const data = {name:name, slug:slug, year:}
    // API POST ROUTE
    const url = "http://localhost:8000/create";
    // Setup fetch() to POST data.name..
    const addCeo = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());

    console.log("ADD CEO RESPONSE:", addCeo);

    return redirect("/ceos");
}

const AddCeo = () => {
    return (
        <Form method="POST">
            <label>
                CEO Name
                <input type="text" name="ceoName" />
            </label>
            <label>
                Year Served
                <input type="number" name="ceoYear" min="1976" max="2100" />
            </label>
            <button type="submit">Add New CEO</button>
        </Form>
    );
};

export default AddCeo;
