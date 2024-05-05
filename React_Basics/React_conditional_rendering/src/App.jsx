// conditional rendering: allows you to control what gets renderd in your app based on certin conditions 
import UserGreeting from "./UserGreeting/UserGreeting.jsx"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Daniel Mints"/>
      <UserGreeting isLoggedIn={false} username="Daniel Mints"/>
      <UserGreeting isLoggedIn={true} />
      <UserGreeting />

    </>
  )
}

export default App
