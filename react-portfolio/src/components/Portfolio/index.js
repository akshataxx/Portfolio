import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';

import portfolioData from "./portfolio.json";
import "./flight.png";
import FP from '../../components/Portfolio/flight.png'
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  console.log(portfolioData);
  // const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  });

  /*useEffect(() => {
    getPortfolio();
  }, []);*/

  /*const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'));
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  }*/

  const renderPortfolio = (portfolioData) => {
    return (
      <div className="images-container">
        {
          portfolioData.map((port,idx) => {
            console.log(portfolioData);
            console.log(port);
            return (
              <div className="image-box" key={idx}>

                <img
                  src={port.path}
                  className="portfolio-image"
                  alt="portfolio" />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>

                </div>
              </div>
            )
          })
        }
      </div>
    );
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;

// <button
//   className="btn"
//   onClick={() => window.open(port.url)}
// >View</button>