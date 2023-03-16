import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DUMMY = {
  id: 1,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
};

function Detail() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <Stpadding>
      <Stimg src={DUMMY.image} alt={DUMMY.title} />
      <h3>
        <strong>{DUMMY.title}</strong>
      </h3>
      <p>{DUMMY.description}</p>

      <button onClick={handleButtonClick}>이전페이지로</button>
    </Stpadding>
  );
}

export default Detail;

const Stimg = styled.img`
  width: 50%;
  padding: 20px;
  margin: 0 auto;
`;
const Stpadding = styled.div`
  gap: 10px;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;
