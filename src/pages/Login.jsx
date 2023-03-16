import React from "react";

function Login() {
  return (
    <form>
      <label htmlFor="id">아이디</label>
      <input id="id" />
      <label htmlFor="password">패스워드</label>
      <input id="password" />
      <button>제출하기</button>
    </form>
  );
}

export default Login;
