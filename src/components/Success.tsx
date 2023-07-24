import successSvg from "../assets/icon-complete.svg";

type SuccessProps = {
  onContinue:() => void
}


export function Success(props:SuccessProps) {
  return (
    <div className="success-container">
      <img src={successSvg} alt="" />
      <div className="success-content">
        <h1 className="success-title">Thank You!</h1>
        <p className="success-description">We've added your card details</p>
      </div>
    
      <button className="button" onClick={props.onContinue}>Continue</button>
    </div>
  );
}
