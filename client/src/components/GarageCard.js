const GarageCard = (props) => {
  return (
    <div
      className="card"
      onClick={() => {
        props.onClick(props.id)
      }}
    >
      <div className="img-wrapper">
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
      </div>
    </div>
  )
}

export default GarageCard
