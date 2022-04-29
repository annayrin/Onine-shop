import "./dataTable.css";
import { nanoid } from "nanoid";
import {
  Grid,
  Segment,
  List,
  Image,
  Pagination,
  Dropdown,
  Item,
  Button,
  Icon,
  Input, Form,
} from "semantic-ui-react";
import "./dataTable.css";
import { useState, useEffect, Fragment } from "react";
import images from "../../services/imgData";

function DataTable({ list, uploadImg }) {
  const [imgFile, setImgFile] = useState();
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDivider = 5;

  function onChange(e) {
    console.log(e.target.files);
    setImgFile(e.target.files[0]);
  }
  useEffect(() => {
    if (list && list.length > 0) setResult(list);
  }, [list]);


  useEffect(() => {
    if (result && result.length > 0)
      setProductsByPage(result.slice(start, start + pageDivider));
  }, [start, result]);

  console.log("result", list);
  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDivider - pageDivider);
  }
  return (
    <>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          return (
            <Item.Group className="grid-table" key={nanoid()}>
              <Item className="allProducts">
              <Image
                      avatar
                      id="product-icon"
                      src={
                        item.img[item.img.length - 1]?.imagePath || images.logoColor
                      }
                    />

                      <Item.Content>{item.name}</Item.Content>
                      <Item.Content>
                      {item.price}
                      <span className="currency">{item.currency}</span>
                      </Item.Content>

                  <Item.Content className="image-upload-form" >
                      <Form
                        onSubmit={(e) => {
                          console.log(imgFile);
                          console.log(item.id);
                          e.preventDefault();
                          uploadImg(imgFile, item.id);
                        }}
                      >
                          <label htmlFor="file-input" className="img-icon">
                            <Icon
                                id="imageIcon"
                              className="btn-icon"
                              name="images"
                              size="large"
                            />
                          </label>
                          <input
                            type="file"
                            id="file-input"
                            onChange={onChange}
                          />
                          <Button className="btn-upload" type="submit">
                            <Icon
                                id="imageSubmitIcon"
                              className="btn-icon"
                              name="upload"
                              size="large"
                            />
                          </Button>
                      </Form>
                  </Item.Content>
              </Item>
            </Item.Group>
          );
        })}
      <div className="pagination-container">
        {/* semantic pagination */}
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDivider)}
        />
      </div>
    </>
  );
}

export default DataTable;