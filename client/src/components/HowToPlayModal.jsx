import React from "react";
import ModalBackdrop from './ModalBackdrop';
import howToPlayCircle from "../howToPlayCircle.svg";
import howToPlayCircleGreen from "../howToPlayCircleGreen.svg";
import howToPlayCircleUp from "../howToPlayCircleUp.svg";
import howToPlayCircleDown from "../howToPlayCircleDown.svg";
import '../styles/howToPlay.scss';
import '../styles/modals.scss';
import closeSymbol from "../closeSymbol.svg";

const HowToPlayModal = ({closeHowToPlayModal}) => {
  return (
    <>
      <div className="how-to-play modal">
        <div className="modal-content">
          <button className="close-button" onClick={closeHowToPlayModal}>
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <div className="modal-text">
            <h1 className="modal-title">
              How to Play
            </h1>
            <h3>
              Guess the name of the Premier League player within 6 attempts
            </h3>
            <ul className="modal-list">
              <li>Use the search bar to guess a name</li>
              <li>After your first guess, you'll get some feedback:</li>
              <div className="modal-circles">
                <img className="circle two" src={howToPlayCircleGreen} />
                <img className="circle three" src={howToPlayCircle} />
                <img className="circle four" src={howToPlayCircleGreen} />
                <img className="circle five" src={howToPlayCircleUp} />
                <img className="circle six" src={howToPlayCircleDown} />
              </div>
              <li>The first three items will turn green if you've correctly guessed the player's Nationality, Team, or Position</li>
              <li>The last two indicate whether the mystery player's age and number are higher or lower than that of the player you guessed</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToPlayModal;