import Card from "./Card/Card.jsx"
import varoom1 from "./assets/varoom1.jpg"
import varoom2 from "./assets/varoom2.jpeg"
import varoom3 from "./assets/varoom3.jpg"
import varoom4 from "./assets/varoom4.jpg"

function App() {
  return (
    <>
      <Card image={varoom1} name="GR86" description="Thing go vroom vroom"/>
      <Card image={varoom2} name="Consept Car" description="Thing go vroom vroom.. better?"/>
      <Card image={varoom3} name="GR86" description="Thing go vroom vroom but save money"/>
      <Card image={varoom4} name="GR86" description="Thing go vroom vroom nad work good"/>
      <Card image="HAHAHAHAHA" name={2345} />
    </>
  )
}



export default App
