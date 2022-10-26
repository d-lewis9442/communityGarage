const VehicleCard = (props) => {
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
        <h2>
          {props.year} {props.make} {props.model}
        </h2>
        <h3>{props.nickname}</h3>
      </div>
    </div>
  )
}

export default VehicleCard
