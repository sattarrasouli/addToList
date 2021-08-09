import "./App.css"
import { useState } from "react"
import Names from "./components/displayItem"
import InputField from "./components/inputField"

function App() {
  const [name, setName] = useState()
  const [surName, setSurName] = useState()
  const [age, setAge] = useState()
  const [person, setPerson] = useState([])

  return (
    <>
      <div className="container">
        <InputField person={person} setPerson={setPerson} name={name} setName={setName} surName={surName} setSurName={setSurName} setAge={setAge} age={age} />

        {person.map(per => (
          <Names name={per.name} surName={per.surName} setAge={setAge} setName={setName} setSurName={setSurName} setPerson={setPerson} age={per.age} id={per.id} />
        ))}
      </div>
    </>
  )
}

export default App
