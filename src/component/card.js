

function Card(props) {
  console.log(props)
  const deleteIconClick = () => {
    props.delete(props.incidentNumber)
  }
  return (
    <div className="card">
      <div className="header-container">
        <div className='incident-info-container'>
          <div className='badge' style={{
            backgroundColor: props.status === "in_progress" ? "yellow" : "cyan",
          }} >{props.status}</div>
          <span>{props.incidentNumber}</span>
        </div>
        <div className='header-menu-container'>
          <i class="fa-solid fa-trash" onClick={deleteIconClick}></i>
        </div>
      </div>
      <h5>{props.title}</h5>
      <small>{props.time}</small>
      <hr />
      <div className='further-detail-container'>
        <div className='further-detail-item-container'>
          <span>Priority</span> <br />
          <span>{props.priority}</span>
        </div>
        <div className='further-detail-item-container'>
          <span>Priority</span> <br />
          <span>{props.priority}</span>
        </div>
      </div>
    </div>
  )
}
export default Card;