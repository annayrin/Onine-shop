import { Card, Icon, Image, Button } from "semantic-ui-react";
import "./cardItem.css";
import BuyProduct from "../buyProduct/BuyProduct";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import images from "../../services/imgData";
function CardItem({
                      description,
                      image,
                      name,
                      price,
                      item,
                      currency,
                      setResponseInfo,
                      imageList,
                      stock,
                      section
                  }) {
    const { isAuthenticated, user } = useAuth0();

    return (
        <Card id="card">
            <Image id="imageContainer" src={image?image.imagePath: images.logoColor} wrapped ui={false} />
            <Card.Content id="cardContent">
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    <h4>{description}</h4>
                    <p>Price AMD {price}</p>
                     </Card.Description>

            </Card.Content>

            <Card.Content extra className="buy-info">
                {price}
                {currency}
                {isAuthenticated ? (
                    <BuyProduct
                        item={item}
                        productInfo={{ description, image, name, price, stock }}
                        setResponseInfo={setResponseInfo}
                        imageList = {imageList}
                        stock={stock}
                    />
                ) : (

                    <Button as={Link} to="/login" id="buyButton" inverted floated="right">
                        BUY
                    </Button>
                )}
            </Card.Content>
        </Card>
    );
}
export default CardItem;


