import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
import axios from "axios";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true})
    history.push("/users");
  }
  const onClickGeneral = () => {
    setUserInfo({isAdmin: false})
    history.push("/users");
  }

  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    }).catch((err) => console.log(err));
  }
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((res) => {
      console.log(res.data);
    }).catch((err) => console.log(err));
  }

  return (
    <SContainer>
      <h2>Topページです。</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のユーザー</button>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;