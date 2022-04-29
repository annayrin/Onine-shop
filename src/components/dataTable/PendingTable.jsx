import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";

import { Grid, Segment, List, Image, Dropdown, Item } from "semantic-ui-react";
import "./dataTable.css";
import images from "../../services/imgData";

function PendingTable({ list, changeStatus }) {
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 4;

  useEffect(() => {
    setProductsByPage(list.slice(start, start + pageDevider));
  }, [start, result]);

  useEffect(() => {
    if (list && list.length > 0) setResult(list);
  }, [list]);

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }

  return (
    <>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          console.log("item", item);
          return (
          
            // <Grid className="grid-table" key={nanoid()}>
            //   <Grid.Row>
            //     <Grid.Column width="4">
            //       <Segment.Inline>
            //     <Image
            //       id="product-icon"
            //       src={item.product.img[0]?.imagePath || images.logoColor}
            //     />
            //         </Segment.Inline>
            //     </Grid.Column>
            //     <Grid.Column width="2">
            //     <Item.Content>{item.orderStatus}</Item.Content>
            //     </Grid.Column>
            //     <Grid.Column width="5">
            //     <Item.Content>
            //       <Item.Header> {item.product.name}</Item.Header>
            //       <Item.Extra>{item.product.description.comment} </Item.Extra>
            //     </Item.Content>
            //     </Grid.Column>
            //     <Grid.Column width="5">
            //     <Item.Content>
            //       <Item.Header>
            //         <Dropdown pointing="top left" text="Edit Status">
            //           <Dropdown.Menu>
            //             <Dropdown.Item
            //               onClick={() => {
            //                 changeStatus("PENDING", item.id);
            //               }}
            //               text="Pending"
            //               icon="plus"
            //             />
            //             <Dropdown.Item
            //               onClick={() => {
            //                 console.log("text");
            //                 changeStatus("SENT", item.id);
            //               }}
            //               text="Sent"
            //               icon="calendar"
            //             />
            //             <Dropdown.Item
            //               onClick={() => {
            //                 changeStatus("PAID", item.id);
            //               }}
            //               text="Paid"
            //               icon="calendar"
            //             />
            //             <Dropdown.Item
            //               onClick={() => {
            //                 changeStatus("DONE", item.id);
            //               }}
            //               text="Done"
            //               icon="calendar"
            //             />
            //           </Dropdown.Menu>
            //         </Dropdown>{" "}
            //       </Item.Header>
            //       <Item.Meta></Item.Meta>
            //       <Item.Description>Address {item.address}</Item.Description>
            //       <Item.Extra>Phone {item.phone}</Item.Extra>
            //     </Item.Content>
            //     </Grid.Column>
            //       </Grid.Row>
            //
            // </Grid>

              <Item.Group className="pendingContainer" key={nanoid()}>

                      <Image
                          size="tiny"
                          id="product-icon"
                          src={item.product.img[0]?.imagePath || images.logoColor}
                      />

                <Item>

                    <Item.Content>{item.orderStatus}</Item.Content>
                    <Item.Content>
                      <Item.Header> {item.product.name}</Item.Header>
                      <Item.Extra>{item.product.description.comment} </Item.Extra>
                    </Item.Content>

                    <Item.Content>
                      <Item.Header>
                        <Dropdown pointing="top left" text="Edit Status">
                          <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => {
                                  changeStatus("PENDING", item.id);
                                }}
                                text="Pending"
                                icon="plus"
                            />
                            <Dropdown.Item
                                onClick={() => {
                                  console.log("text");
                                  changeStatus("SENT", item.id);
                                }}
                                text="Sent"
                                icon="calendar"
                            />
                            <Dropdown.Item
                                onClick={() => {
                                  changeStatus("PAID", item.id);
                                }}
                                text="Paid"
                                icon="calendar"
                            />
                            <Dropdown.Item
                                onClick={() => {
                                  changeStatus("DONE", item.id);
                                }}
                                text="Done"
                                icon="calendar"
                            />
                          </Dropdown.Menu>
                        </Dropdown>{" "}
                      </Item.Header>
                      <Item.Meta></Item.Meta>
                      <Item.Description>Address {item.address}</Item.Description>
                      <Item.Extra>Phone {item.phone}</Item.Extra>
                    </Item.Content>
                </Item>
              </Item.Group>
          );
        })}
      <div className="pagination-container">
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      </div>
    </>
  );
}

export default PendingTable;
