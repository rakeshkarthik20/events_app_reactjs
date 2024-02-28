import './index.css'

const EventItem = props => {
  const {eachItem, checkRegistration} = props
  const {imageUrl, name, location, registrationStatus} = eachItem

  const checkingRegistration = () => {
    checkRegistration(registrationStatus)
  }
  return (
    <li>
      <button type="button" className="button" onClick={checkingRegistration}>
        <img src={imageUrl} className="eventImage" alt="event" />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
