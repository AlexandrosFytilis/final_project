import React from "react";
import styled from "styled-components";
import { Dropdown } from "./DropDown.js";

export const SideBar = () => {
  return (
    <Wrapper>
      <Dropdown />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: gray;
  width: 20vw;
  min-height: 95vh;
`;
