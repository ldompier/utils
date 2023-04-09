import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import CopyToClipboard from "react-copy-to-clipboard";

const ConvertCase = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToCamelCase = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (conversion) => {
    let result;
    switch (conversion) {
      case "upper":
        result = input.toUpperCase();
        break;
      case "lower":
        result = input.toLowerCase();
        break;
      case "camel":
        result = convertToCamelCase(input);
        break;
      default:
        result = "";
    }
    setOutput(result);
    setCopied(false);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl value={input} onChange={handleChange} />
      </InputGroup>
      <Button onClick={() => handleClick("upper")}>Majuscules</Button>
      <Button onClick={() => handleClick("lower")} className="ml-2">Minuscules</Button>
      <Button onClick={() => handleClick("camel")} className="ml-2">CamelCase</Button>
      <InputGroup className="mt-3">
        <FormControl value={output} readOnly />
        <InputGroup.Append>
          <CopyToClipboard text={output} onCopy={() => setCopied(true)}>
            <Button>{copied ? "Copié" : "Copier"}</Button>
          </CopyToClipboard>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export {ConvertCase};
