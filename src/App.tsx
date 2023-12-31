import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Success } from "./components/Success";
import backgroundImageDesktop from "./assets/bg-main-desktop.png";
import backgroundImageMobile from "./assets/bg-main-mobile.png";
import cardFrontImage from "./assets/bg-card-front.png";
import cardBackImage from "./assets/bg-card-back.png";
import cardLogo from "./assets/card-logo.svg";

const initialInputState = {
  value: "",
  isTouched: false,
};

function App() {
  const [cardholderName, setCardholderName] = useState(initialInputState);
  const [cardNumber, setCardNumber] = useState(initialInputState);
  const [expirationMonth, setExpirationMonth] = useState(initialInputState);
  const [expirationYear, setExpirationYear] = useState(initialInputState);
  const [cvc, setCvc] = useState(initialInputState);

  const [isFormComplete, setIsFormComplete] = useState(false);

  function handleCompleteForm() {
    setIsFormComplete(true);
  }

  function resetForm() {
    setCardholderName(initialInputState);
    setCardNumber(initialInputState);
    setExpirationMonth(initialInputState);
    setExpirationYear(initialInputState);
    setCvc(initialInputState);
  }

  return (
    <div className="page-container">
      <div className="image-container">
        <img className="mobile-background" src={backgroundImageMobile} alt="" />
        <img
          className="desktop-background"
          src={backgroundImageDesktop}
          alt=""
        />
        <div className="card-front">
          <img src={cardFrontImage} alt="" />
          <div className="card-info">
            <img src={cardLogo} alt="" />
            <span className="card-number">
              {cardNumber.value || "0000 0000 0000 0000"}
            </span>
            <span>{cardholderName.value || "John Doe"}</span>
            <span>
              {expirationMonth.value || "00"}/{expirationYear.value || "00"}
            </span>
          </div>
        </div>
        <div className="card-back">
          <img src={cardBackImage} alt="" />
          <div className="card-info">
            <span className="card-cvc">{cvc.value || "000"}</span>
          </div>
        </div>
      </div>
      <main className="main-content">
        {isFormComplete ? (
          <Success
            onContinue={() => {
              setIsFormComplete(false);
              resetForm();
            }}
          />
        ) : (
          <Form
            cardholderName={cardholderName}
            setCardholderName={setCardholderName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expirationMonth={expirationMonth}
            setExpirationMonth={setExpirationMonth}
            expirationYear={expirationYear}
            setExpirationYear={setExpirationYear}
            cvc={cvc}
            setCvc={setCvc}
            onCompleteForm={handleCompleteForm}
          />
        )}
      </main>
      <footer className="footer">Desenvolvido por Sergio Manica</footer>
    </div>
  );
}

export default App;
