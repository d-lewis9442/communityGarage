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
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
      </div>
    </div>
  )
}

export default GarageCard
