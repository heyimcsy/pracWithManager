import React from "react";
import { useInput } from "../Hooks/useInput";
import styled from "styled-components";

function Create() {
  const [title, onChangeTitleHandler] = useInput();
  const [desc, onChangeDescHandler] = useInput();
  const [price, onChangePriceHandler] = useInput();
  const [category, onCategoryHandler] = useInput();
  const [image, onImageHandler] = useInput();

  const onSubmitHandler = () => {
    return console.log("submit");
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <label htmlFor="title">제목</label>
      <input
        type="number"
        id="title"
        value={title}
        onChange={onChangeTitleHandler}
      />

      <label htmlFor="desc">설명</label>
      <input
        type="number"
        id="desc"
        value={desc}
        onChange={onChangeDescHandler}
      />

      <label htmlFor="price">가격</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={onChangePriceHandler}
      />

      <label htmlFor="category">카테고리</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={onCategoryHandler}
      />

      <label htmlFor="image">이미지</label>
      <input
        src=""
        alt=""
        type="image"
        id="image"
        value={image}
        onChange={onImageHandler}
      />

      <button type="submit">생성하기</button>
    </StForm>
  );
}

export default Create;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
