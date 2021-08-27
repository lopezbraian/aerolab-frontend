import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 42px;
  .logo {
    margin: 22px auto 22px 0;
    width: 38px;
    height: 36px;
  }
  .info {
    display: flex;
    align-items: center;
    .name {
      font-size: 24px;
      color: #616161;
      margin-right: 10px;
    }
  }
`;
