import React from "react";
import styled from "styled-components";
import { useInput } from "../Hooks/useInput";
import Header from "../shared/components/Header";

function Signup() {
  const [id, setId, inputIdHandler] = useInput();
  const [password, setPassword, inputPasswordHandler] = useInput();
  const [nickname, setNickname, inputNicknameHandler] = useInput();

  return (
    <Home>
      <Header name="회원가입" />
      <SignupBox>
        <InputArea>
          <SignupLabel htmlFor="id"> 아이디 </SignupLabel>
          <SignupInput id="id" type="text" value={id} onChange={setId} />
        </InputArea>
        <InputArea>
          <SignupLabel htmlFor="password">패스워드</SignupLabel>
          <SignupInput
            id="password"
            type="text"
            value={password}
            onChange={setPassword}
          />
        </InputArea>
        <InputArea>
          <SignupLabel htmlFor="nickname">닉네임</SignupLabel>
          <SignupInput
            id="nickname"
            type="text"
            value={nickname}
            onChange={setNickname}
          />
        </InputArea>
      </SignupBox>
    </Home>
  );
}

const Home = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
`;

const SignupLabel = styled.label`
  font-weight: bold;
`;

const SignupInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 10px;

  border: 2px solid black;
`;

export default Signup;
