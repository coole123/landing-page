import React from 'react';
import { Link } from 'react-router-dom';
import './Landing_alt.css';
const Landing = () => {
  return (
      <>
        <section id="landing-info" className="landing-py-">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">

                            <p  className="landing-msg">A whole new way to manage your spending</p>
                            <ul>
                                <li className="landing-list">know how you spend</li>
                                <li className="landing-list">Manage your finances</li>
                            </ul>
                            <Link to="/register" className="nav-link">
                                    <button className="btn-signup">Sign up for free</button>
                            </Link>
                            </div>
                            <div>
                                <img src="https://res.cloudinary.com/du76oga2b/image/upload/v1620409655/Finance_ygz45t.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
            </section>

          </>


  )

}
export default Landing;
