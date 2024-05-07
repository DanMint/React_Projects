import React, {useState} from "react"

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
       setName("Daniel");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const updtaeEmployed = () => {
        if (isEmployed)
            setIsEmployed(false)

        else    
            setIsEmployed(true)

    }

    return( <>

        <div> 
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Add age</button>

            <p>Employment: {(isEmployed ? "Yes" : "No")}</p>
            <button onClick={updtaeEmployed}>Change status</button>
        </div>

    </>)

}

export default MyComponent