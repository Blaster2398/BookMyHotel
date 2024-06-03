import './mailList.css'

function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, Save money!</h1>
        <span className="mailDesc">Sign up and we'll send you the best deals to you</span>
        <div className="mailInputContainer">
            <input type="email" placeholder="Enter your email" className="mailInput" />
            <button className="mailButton">Subscribe</button>
        </div>
    </div>
  )
}

export default MailList