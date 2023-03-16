import React from "react";
import styled from "styled-components";
import Header from "../shared/components/Header";

// {
//   "id": 1
// 	"title": "Mens Casual Premium Slim Fit T-Shirts ",
// 	"price": 22.3,
// 	"description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
// 	"category": "men's clothing",
// 	"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
// }

const DUMMY_LIST = [
  {
    id: 1,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

function ItemList() {
  return (
    <Wrap>
      <Header name="상품 목록" />
      <CardList>
        {DUMMY_LIST.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <div>
                <strong>{item.title}</strong>
                <span>{item.category}</span>
              </div>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </Card>
        ))}
      </CardList>
    </Wrap>
  );
}

export default ItemList;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.li`
  width: 300px;
  height: 200px;
  display: flex;
  gap: 30px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  p {
    width: 300px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
