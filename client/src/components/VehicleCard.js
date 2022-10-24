const VehicleCard = (props) => {
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
        <h2>
          {props.make} {props.model}
        </h2>
        <h3>{props.nickname}</h3>
      </div>
    </div>
  )
}

export default VehicleCard
