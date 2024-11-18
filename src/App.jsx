import './App.css';
function App() {
  return (
    <div>
      <div className="first-sec">
        <div className="container">
          <header>
            <img src="./assets/images/logo.svg" alt="#" className="logo" />
            <ul className="navbar">
              <li>home</li>
              <li>about</li>
            </ul>
            <button className="header-btn">contact us</button>
          </header>
          <section className="main-sec">
            <h3>
              Find the best <span>talent</span>
            </h3>
            <p>
              Finding the right people and building high <br /> performing
              teams can be hard. Most companies <br /> aren’t tapping into the
              abundance of global talent. <br /> We’re about to change that.
            </p>
          </section>
        </div>
      </div>
      <div className="second-sec">
        <div className="container">
          <div className="main">
            <h3>Build & manage distributed teams like no one else.</h3>
          </div>
          <div className="extra">
            <div className="card">
              <img src="./assets/images/one.svg" alt="#" />
              <div className="text">
                <h5>Experienced Individuals</h5>
                <p>
                  Our network is made up of highly experienced professionals{" "}
                  <br /> who are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="./assets/images/two.svg" alt="#" />
              <div className="text">
                <h5>Easy to Implement</h5>
                <p>
                  Our processes have been refined over years of implementation{" "}
                  <br />
                  meaning our teams always deliver.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="./assets/images/three.svg" alt="#" />
              <div className="text">
                <h5>Enhanced Productivity</h5>
                <p>
                  Our customized platform with in-built analytics helps you{" "}
                  <br /> manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
