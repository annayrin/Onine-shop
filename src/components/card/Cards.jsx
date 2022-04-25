import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";
import { getProducts } from "../../services/api";
import CardItem from "./CardItem";
import "./cards.css";
import Filter from "../filter/Filter";

const Cards = ({pageDivider, setResponseInfo}) => {
  const [result, setResult] = useState([]);
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);

//need to chnage the allproducts to list

  useEffect(() => {
    (async function createPagination() {
      let data = await getProducts();
      setResult(data);
    })();
  }, []);


  const [filtered, setFiltered]=useState(result);

  const childToParent = (filteredResult) => {
    setFiltered(filteredResult);
  };

  useEffect(() => {
  setProductsByPage(filtered.slice(start, start + pageDivider));
}, [start, filtered]);

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDivider - pageDivider);
  }


  return (
      <div id="cardsContainer">
      <Filter allItems={result} childToParent={childToParent}/>
    <div className="ui stackable three column grid centered productItems">
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {

          return (

            <CardItem
                item={item}
          key={item.id}
                section={item.section}
                stock={item.stock.count}
          description={item?.description.comment || ""}
          image={item.img[0]}
          name={item.name}
          price={item.price}
            />
          );
        })}

      <div className="pagination-container">
        {result && result.length > pageDivider?
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDivider)}
        />:""
}
      </div>
    </div>
      </div>
  );
};

export default Cards;
