import React from "react";

import {
  Form,
  Input,
  Radio,
} from "semantic-ui-react";


const FormFieldError = ({ userName, changeOptions }) => {
  function handleChange(event) {
    
    changeOptions({ [event.target.name]: event.target.value });
  
  }
  /*
  return (
    <Form>

      <Form.Field
        id="form-input-control-full-name"
        control={Input}
        label="Full name"
        placeholder="Full name"
        value={userName}
        required
      />
      <Form.Field
        id="form-input-control-address"
        control={Input}
        label="Address"
        placeholder="Address"
        name="address"
        onChange={(e) => {
          handleChange(e)
        }}
        required
      />
      <Form.Field
        id="form-input-control-phone-number"
        control={Input}
        label="Phone number"
        placeholder="Phone number"
        name="phone"
        type = "number"
        required
        onChange={(e) => {
          handleChange(e)
        }}
      />
<Form.Field
    label="Payment Option"
    >
</Form.Field>


        <Form.Field>
        <Radio
          label="Pay In Cash"
          name="paymentMethod"
          value="cash"
          checked={true}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </Form.Field>
      <Form.Field>
        <Radio label="Pay Online(not available)"
               name="card"
               value="card"
               readOnly />
      </Form.Field>
    </Form>
    */
  );
};

export default FormFieldError;
