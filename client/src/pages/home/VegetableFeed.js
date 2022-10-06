import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { SingleVegetable } from "./SingleVegetable.js";
import { WateringTracker } from "./WateringTracker.js";

export const VegetableFeed = () => {
  const { vegetables } = useContext(CurrentUserContext);
  console.log(vegetables);

  if (!vegetables) {
    return null;
  }

  return (
    <Wrapper>
      <WateringTracker />
      {vegetables.map((item, index) => {
        return <SingleVegetable key={index} item={item}/>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
`;
