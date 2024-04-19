import QRCode from "react-qr-code";
import "./index.css";
import { useState } from "react";

function QrCodeGenerator() {
  const [qrCodevalue, setQrCodevalue] = useState("");
  const [inputChange, setInputChange] = useState("");

  function handleInputChange(e) {
    setInputChange(e.target.value);
  }

  function handleGenerate() {
    setQrCodevalue(inputChange);
    setInputChange("");
  }

  return (
    <div className="QrCodeDiv">
      <div className="codeGenerator">
        <h1>QR Code Generator</h1>
        <div className="input">
          <input
            onChange={(e) => handleInputChange(e)}
            value={inputChange}
            type="text"
            placeholder="Enter Text..."
          />
          <button onClick={() => handleGenerate()}>Generate</button>
        </div>
        <QRCode id="qrCodeDisplay" value={qrCodevalue} />
      </div>
    </div>
  );
}

export default QrCodeGenerator;
