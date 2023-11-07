import React from "react";
import "./works.css";
import vetLogo from "../../assets/vet-logo.svg";
import pizza from '../../assets/pizza-logo.svg';

export const Works = () => {
  return (
    <div className="container" id="works">
      <h2 className="title">My Works</h2>
      <div className="cards__wrapper">
       
        
        <div>
          <a className="card" target="_blank" href="https://pizzaproject-bazarova.netlify.app/">
            <img className="pizza__logo" src={pizza} alt="site logo" />
          </a>
        </div>

        <div >
          <a className="card" target="_blank" href="https://amazon-clone-bazarova.netlify.app/">
            <img className="pizza__logo" src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" alt="site logo" />
          </a>
        </div>

        <div>
          <a className="card" target="_blank" href="https://tickets-react-bazarova.netlify.app/">
            <img className="pizza__logo" src="https://www.svgrepo.com/show/107360/movie-tickets.svg" alt="site logo" />
          </a>
        </div>


        <div>
          <a className="card" target="_blank" href="https://vetclinik-verstka.netlify.app/">
            <img src={vetLogo} alt="site logo" />
          </a>
        </div>

      </div>
    </div>
  );
};
