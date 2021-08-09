import trash from "../../assests/img/trash.svg"
import pencil from "../../assests/img/pencil.png"
function Names(props) {
  function handleDelete() {
    props.setPerson(prev => prev.filter(pet => pet.id !== props.id))
  }
  function handleEdit() {
    props.setName(props.name)
    props.setSurName(props.surName)
    props.setAge(props.age)
    props.setPerson(prev => prev.filter(pet => pet.id !== props.id))
  }
  return (
    <>
      <div className="items">
        <span>
          <span>{props.name}</span>
          <span> {props.surName} </span>
          <span>({props.age} Years Old)</span>
        </span>
        <span className="buttons">
          <button onClick={handleDelete}>
            <img src={trash} />
          </button>
          <button onClick={handleEdit}>
            <img src={pencil} />
          </button>
        </span>
      </div>
    </>
  )
}
export default Names
