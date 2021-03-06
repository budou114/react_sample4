import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLInk to="/">Home</SLInk>
      <SLInk to="/users">USERS</SLInk>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLInk = styled(Link)`
  margin: 0 8px;
`;