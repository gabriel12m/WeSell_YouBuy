import axios from "axios";
import { useEffect, useState } from "react";
import "./AllProducts.css";
import image from "../../assets/i7-10700k.JPG";
import * as FcIcons from "react-icons/fc";

function AllProducts() {
  const [listaProdutos, setListaProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/produtos").then((response) => {
      setListaProdutos(response.data);
    });
  }, []);
  return (
    <div className="container main-content">
      {listaProdutos.map((produto) => {
        return (
          <div className="row product">
            <div className="col-md-2">
              {/* TODO : Arranjar a imagem, de modo a que esta venha da base de dados e não de um import */}
              <img
                className="rounded"
                src={image}
                height="125"
                border="1px solid"
              />
            </div>
            <div className="col-md-6 product-detail">
              <h3>{produto.nome}</h3>
              <h6>{produto.marca}</h6>
              {produto.stock == "1" ? (
                <h7>
                  STOCK : <FcIcons.FcApproval />
                </h7>
              ) : (
                <h7>
                  STOCK : <FcIcons.FcCancel />
                </h7>
              )}
            </div>
            <div className="col-md-2 product-price">{produto.preco} €</div>
            <div className="col-md-2 btn">
              <FcIcons.FcNext size="80px" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
