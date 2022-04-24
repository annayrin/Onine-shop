
import {Container, Grid, Header, Icon, Image, List, Segment} from "semantic-ui-react";
import React from "react";
import "../footer/Footer.css";
import images from "../../services/imgData";

function Footer() {
  return (
      <div className="footer">
        <Segment fixed="bottom" inverted vertical >
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Image centered size="tiny" src={images.logoWhite} />
              </Grid.Row>
              <Grid.Row>
                <Grid.Column centered>
                  <Header inverted as="h4" content="About Us" />
                  <List link inverted id="socialIcons">
                    <List.Item as="a"><Icon size="large" name='facebook' /> </List.Item>
                    <List.Item as="a"><Icon size="large" name='instagram' /> </List.Item>
                    <List.Item as="a"><Icon size="large" name='twitter square' /> </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column centered >
                  <Header as="h4" inverted>
                    All Rights Reserved
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
  );
}

export default Footer;
