/*
1.Arrays
2.map()
3.Dynamic Rendering
4.Data to Card grid generate

*/

import Card from "./components/Card";
const technologies = [
  {
    id: 1,
    title: "React",
    description: "Frontend Library"
  },
  {
    id: 2,
    title: "Node.js",
    description: "Backend Runtime"
  },
  {
    id: 3,
    title: "MongoDB",
    description: "Database"
  }
];

const App = () => {
  return (
    <div className="grid" >
      {technologies.map((tech)=>(
     <Card
     key={tech.id}
     title={tech.title}
     description={tech.description}
     />
      ))}
    </div>
  )
}
export default App