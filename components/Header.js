import { useEffect, useState } from "../lib";

const Header = () => {
  const [project, setProject] = useState([]);
  console.log(project);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => setProject(data))
  }, []);
  return `

  ${project.map(({ path, name }) => `<a href="${path}" style="margin-left:60px">${name}</a><br>`).join("")}
  `;
}

export default Header