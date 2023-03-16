import styled from "styled-components";

export default function Header({ name }) {
  return <HeaderLayout>{name}</HeaderLayout>;
}

const HeaderLayout = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
`;
