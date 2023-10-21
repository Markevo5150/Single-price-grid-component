import "./App.scss";
export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="whitePart">
          <h1 className="title">Join our community</h1>
          <h2 className="promo">30-day. hassle-free money back guarantee</h2>
          <p className="description">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="greenPart">
          <h2 className="subscriptionTitle">Monthly Subscription</h2>
          <div className="prices">
            <span className="actPrice">$29</span>
            <span className="time">per month</span>
          </div>
          <p className="accesInfo">Full access for less than $1 a day</p>
          <button className="btn">Sign Up</button>
        </div>
        <div className="softGreenPart">
          <h2 className="us">Why us</h2>
          <p className="ourInfo">
            Tutorials by industry experts <br />
            Peer & expert code review <br />
            Coding exercises <br />
            Acces to our GitHub repos <br />
            Community forum <br />
            Flashcard decks <br />
            New videos every week.
          </p>
        </div>
      </div>
    </>
  );
}
