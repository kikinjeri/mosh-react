import { Children } from "react";
import { ReactNode } from "react";

interface Props {
    children: React.ReactNode; 
    onClose: () => void;
}


// rafce react arrow function component export

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type ="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert

// This code defines a simple React component named `Alert` that returns a `div` containing the text "alert".
