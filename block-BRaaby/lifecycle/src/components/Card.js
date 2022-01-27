function Card(props){
  return (
    <div className='card-container'>
      <div className='card-box-top'>
        <img src={props.img} className='avatar' />
      </div>
      <div className='card-box-bottom'>
        <h5>My {props.title} is</h5>
        <h1 className='heading'>{props.value}</h1>
        <ul className='hover-menu'>
          <li className='menu-item'>
            <i id="person" onMouseOver={props.handleMouseOver} className="fas fa-user"></i>
          </li>
          <li className='menu-item'>
            <i id="email" onMouseOver={props.handleMouseOver} className="fas fa-envelope-open"></i>
          </li>
          <li className='menu-item'>
            <i id="age" onMouseOver={props.handleMouseOver} className="fas fa-calendar-times"></i>
          </li>
          <li className='menu-item'>
            <i id="address" onMouseOver={props.handleMouseOver} className="fas fa-map"></i>
          </li>
          <li className='menu-item'>
            <i id="phone" onMouseOver={props.handleMouseOver} className="fas fa-phone"></i>
          </li>
          <li className='menu-item'>
            <i id="password" onMouseOver={props.handleMouseOver} className="fas fa-lock"></i>
          </li>
        </ul>
        <button className='btn' onClick={props.handleClick}>{!props.data ? "Loading..." : "Random User"}</button>
      </div>
    </div>
  )
}

export default Card;