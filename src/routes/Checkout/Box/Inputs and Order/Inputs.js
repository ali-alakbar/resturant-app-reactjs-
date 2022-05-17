import React from 'react'
import Input from "../Input/Input";

function Inputs() {
  return (
    <div className='leftSide'>
      <div className="billing-section">
        <h2>Billing details</h2>
        <Input
          inputType={"text"}
          placeholder={"First name"}
          labelName={"First Name"}
        />
        <Input
          inputType={"text"}
          placeholder={"Last name"}
          labelName={"Last Name"}
        />
        <Input
          inputType={"text"}
          placeholder={"Company name"}
          labelName={"Company Name (optional)"}
        />
        <Input
          inputType={"text"}
          placeholder={"Street address"}
          labelName={"Street address"}
        />
        <Input
          inputType={"text"}
          placeholder={"Dallas"}
          labelName={"Town / City "}
        />
        <Input inputType={"text"} placeholder={"Texas"} labelName={"State"} />
        <Input inputType={"text"} placeholder={""} labelName={"Zip"} />
        <Input inputType={"tel"} placeholder={""} labelName={"Phone"} />
        <Input
          inputType={"email"}
          placeholder={""}
          labelName={"Email address"}
        />
      </div>
      <div className="special-address">
        <h2>Ship to a different address?</h2>
        <br />
        <label htmlFor="">Order notes (optional)</label>
        <textarea
          placeholder="Notes about your order e.g. special notes or delivery"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}

export default Inputs