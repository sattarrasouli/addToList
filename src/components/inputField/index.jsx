function InputField(props) {
  function firstName(e) {
    e.preventDefault()
    if (props.name.length > 2 && props.surName.length > 2) {
      props.setPerson(prev => prev.concat({ name: props.name, surName: props.surName, age: props.age, id: Date.now() }))
      props.setName("")
      props.setSurName("")
      props.setAge("")
    }
  }
  return (
    <form onSubmit={firstName}>
      <label for="name">Name:</label>
      <input id="name" value={props.name} onChange={e => props.setName(e.target.value)} placeholder="Type Your Name" />
      <label for="lastName">LastName:</label>
      <input id="lastName" value={props.surName} onChange={e => props.setSurName(e.target.value)} placeholder="Type Your LastName" />
      <label for="age">Age:</label>
      <input id="age" value={props.age} onChange={e => props.setAge(e.target.value)} type="number" placeholder="Type Your Age" />
      <input className="inputButton" type="submit" />
    </form>
  )
}
export default InputField
