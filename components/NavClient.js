import { useEffect, useState } from "../lib";


const NavClient = () => {
    const [project, setProject] = useState([]);
    console.log(project);

    useEffect(() => {
        fetch("http://localhost:3000/menu")
            .then((response) => response.json())
            .then((data) => setProject(data))
    }, []);


    return `
    ${project.map(({ name, path }) => `<a href="">${name}</a>`).join("")}
    `
}

export default NavClient