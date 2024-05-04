//props = read only properties that are shared between components. Parent -> Child. <Component key=value>
//prop type = making sure the prop is of correct data type
//default props = default values if none were passed from parent
import Student from "./Student/Student.jsx"

function App() {

  return (
    <>
      <Student name="Spongbob" age={30} isStudent={true}/>
      <Student name="Patrick" age={30} isStudent={false}/>
      <Student name="Squidward" age={35} isStudent={false}/>
      <Student />
      <Student name="Sandey" isStudent={true}/>
    </>
  );
}

export default App
