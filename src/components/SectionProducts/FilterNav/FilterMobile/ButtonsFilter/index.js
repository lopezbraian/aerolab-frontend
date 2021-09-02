import useChangeFilter from "components/hooks/useChangeFilter";
import React from "react";
import styled from "styled-components";
import Button from "../../../common/Button";

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;
const Li = styled.li`
  list-style: none;
  margin-right:5px;
`;

export default React.memo(function ButtonsFilter() {
  const [buttonsData, changeButtonActive] = useChangeFilter();
  return (
    <div>
      <Ul>
        {Object.keys(buttonsData).map((k, index) => (
          <Li key={index} onClick={() => changeButtonActive(k)}>
            <Button size="sm" active={buttonsData[k].active}>
              {buttonsData[k].name}
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
});
