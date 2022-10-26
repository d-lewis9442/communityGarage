const GarageCard = (props) => {
  return (
    <div className="card">
      <div
        className="img-wrapper"
        onClick={() => {
          props.onClick(props.id)
        }}
      >
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
