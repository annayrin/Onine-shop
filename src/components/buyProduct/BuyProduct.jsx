import React, { useEffect, useState } from "react";
import {Button,Dropdown, Form, Header, Image, Input, Message, Modal, Segment} from "semantic-ui-react";
import BuyForm from "./BuyForm";
import "./BuyProduct.css";
import { confirmOrder } from "../../services/api";
import { useAuth0 } from "@auth0/auth0-react";
import images from "../../services/imgData";
import discounts from "../../services/discounts";

function BuyProduct({ productInfo, item }) {
  const { user, getAccessTokenSilently } =
    useAuth0();

  const { description, image, name, price,stock } = productInfo;
  const [open, setOpen] = useState(false);
  const initFormData = { address: "", phone: "", paymentMethod: "cash" };
  const [options, setOptions] = useState(initFormData);
  const [disable, setDisable] = useState(true);
  const [totalPrice, setTotalPrice]=useState();
  const [quantity, setQuantity] = useState([1]);
  const [coupon, setCoupon] = useState(0);

  async function confirmAction() {
    try {
      const token = await getAccessTokenSilently();
      const userObj = {
        id: user.sub,
        email: user.email,
        name: user.name,
        picture: user.picture,
      };
      const orderStatus = await confirmOrder(userObj, item, token, options);
      console.log(orderStatus);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (open === false) {
      resetOptions();
    }
    console.log("disable", disable);
    let status = false;
    for (let key in options) {
      if (!options[key] && key !== "paymentMethod") {
        status = true;
      }
    }

    setDisable(status);
  }, [options, open]);
  function resetOptions() {
    for (let key in options) {
      if (key !== "paymentMethod") {
        options[key] = "";
      }
    }
  }
  useEffect(() => {
      setTotalPrice( ()=> price * quantity[0] * (100-coupon) / 100)
  }, [quantity, coupon]);

  /*useEffect(() => {
    setTotalPrice( ()=> price * quantity[0] * (100-coupon) / 100);
  }, [coupon]);*/

  function changeOptions(prop) {
    setOptions({ ...options, ...prop });
  }





  return (

  <Modal id="buyProduct importantid"
      className="custom-modal"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button id="buyButton" inverted floated="right">
          BUY
        </Button>
      }
    >
      <Modal.Content id="buyFormContainer">
        <Image
            id="formImage"
          size="medium"
          src = {image?image.imagePath: images.logoColor}
        />

        <Modal.Description id="descriptionContainer">
          <Segment  id="descriptionField">
          <Header>{name}</Header>
          <p>{description}</p>
          </Segment>
          <Segment id="fields">
          <Form id="priceFields">
          <Form.Field
              id="form-totalPrice"
              control={Input}
              label="Price"
              name="price"
              readOnly
              value={price}

          />

          <Form.Field
              id="form-input-quantity"
              control={Input}
              label="Quantity"
              max={stock}
              min={1}
              type = "number"
              onChange={(e) => {
                setQuantity(e.target.value);

              }
          }
          />
            <Form.Field
                id="formDiscount"
                fluid
                control={Input}
                label="Do you have a discount coupon?"
                placeholder ="Input your coupon"
                onChange={(e) => {
                  if (Object.keys(discounts).includes(e.target.value)) {
                   let cp = discounts[e.target.value];
                    //setTotalPrice(totalPrice * (100 - discounts[e.target.value]) / 100);
                    setCoupon(cp);
                   // console.log("thisi is coupn",coupon);
                    e.target.readOnly = true;
                  }
                  //else{
                   // appers a error message
                 // }

                  }
                }
            />


          <Form.Field
              id="form-quantity"
              control={Input}
              label="Total Price"
              name="price"
              readOnly
              value={totalPrice} //need to create dropdown to choose quantity

          />
          </Form>
          <BuyForm userName={user.name} changeOptions={changeOptions} />
        </Segment>
        </Modal.Description>


      </Modal.Content>
      <Modal.Actions>
        <Segment>
          <Segment.Inline>
            <Button color="black" id="cancelOrder" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button id="confirmOrder"
              content="Confirm"
              disabled={disable}
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                setOpen(false);
                confirmAction();
              }}
            />
          </Segment.Inline>
        </Segment>
      </Modal.Actions>
    </Modal>
  );
}
export default BuyProduct;
