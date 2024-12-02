import { useState } from "react";
import Button from "react-bootstrap/Button";
import FormText from "react-bootstrap/FormText";
import useWindowSize from "./hooks/use-window-size";

const BootstrapUi = () => {
  const [arrayValues, setValuesArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(true);
  const { width, height } = useWindowSize();

  const textboxChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };

  const clickOnButton = () => {
    if (inputValue.trim()) {
      setValuesArray([...arrayValues, inputValue]);
      setInputValue("");
    } else {
      alert("Please enter the value.");
    }
  };

  return (
    <>
      <div>
        <div className="col-12">
          <FormText>Bootstrap Form</FormText>
        </div>
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              value={inputValue}
              onChange={textboxChange}
              placeholder="User Name"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input
              type="checkbox"
              checked={checkboxValue}
              onClick={checkboxChange}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Button className="customButton" onClick={clickOnButton}>
              Start Bootstrap
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table>
              <thead>
                <th>Sr.</th>
                <th>Name</th>
              </thead>
              <tbody>
                {arrayValues.length > 0 ? (
                  arrayValues.map((value, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value}</td>
                    </tr>
                  ))
                ) : (
                  <tr colspan="2">No data found</tr>
                )}
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>Width: {width}</p>
            <p>Height: {height}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootstrapUi;
