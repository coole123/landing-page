import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import './NewImage.svg'
const Landing = () => {
  return (
    <>
      <section id='landing-info' className='landing-py-'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 align-self-center'>
              <p className='landing-msg'>
                Move your money forward
              </p>
              <ul>
                <li className='landing-list'>Bitcoin trading</li>
                <li className='landing-list'>investing</li>
              </ul>
              <Link className='nav-link'>
                <button className='btn-signup landing-btn-signup'>
                  Sign up for free
                </button>
              </Link>
            </div>
            <div>
              <img
                id='landing-page'
                position='absolute'
                src='https://res.cloudinary.com/du76oga2b/image/upload/v1620410515/Finance_gvlqum.jpg'
                alt='image1'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Landing;
