// Write your code here
import './index.css'

const eventActivity = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  initial: 'INITIAL',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const yetToRegisterView = () => (
    <div className="activeEventRegistrationContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetRegisterImage"
      />
      <p className="yetRegisterHeading">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall today in love with this beautiful art
        form
      </p>
      <button type="button" className="RegisterButton">
        Register Here
      </button>
    </div>
  )
  const registeredView = () => (
    <div className="activeEventRegistrationContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registerImage"
      />
      <h1 className="registerHeading">
        You have already registered for the event
      </h1>
    </div>
  )
  const registrationClosed = () => (
    <div className="activeEventRegistrationContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registerClosedImage"
      />
      <h1 className="registerClosedHeading">Registrations Are Closed Now!</h1>
      <p className="registerClosedPara">Stay tuned. We will reopen</p>
    </div>
  )
  const initialView = () => (
    <div className=" initialContainer">
      <p className="initialViewHeading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (registrationStatus) {
    case eventActivity.yetToRegister:
      return yetToRegisterView()
    case eventActivity.registered:
      return registeredView()
    case eventActivity.registrationClosed:
      return registrationClosed()
    default:
      return initialView()
  }
}

export default ActiveEventRegistrationDetails
