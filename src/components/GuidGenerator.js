import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import CopyToClipboard from "react-copy-to-clipboard";

const GuidGenerator = () => {
  const [guid, setGuid] = useState("");
  const [copied, setCopied] = useState(false);

  const generateGuid = () => {
    const guid = (
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      })
    ).toUpperCase();

    setGuid(guid);
    setCopied(false);
  };

  return (
    <div>
      <Button onClick={generateGuid}>Générer un GUID</Button>
      <InputGroup className="mt-3">
        <FormControl value={guid} readOnly />
        <InputGroup.Append>
          <CopyToClipboard text={guid} onCopy={() => setCopied(true)}>
            <Button>{copied ? "Copié" : "Copier"}</Button>
          </CopyToClipboard>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export {GuidGenerator};