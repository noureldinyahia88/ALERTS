import React, { useState } from "react";
import styled from "styled-components";

import icon1 from "../../assets/card1.png";
import icon2 from "../../assets/card2.png";
import icon3 from "../../assets/crad3.png";
import icon4 from "../../assets/card4.png";
import theme from "../../variables";

// Styled components for AlertCard
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 37px;
  border-right: 1px solid #414040;

  &:last-child {
    border-right: none;
  }
`;

const AlertCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${theme.gray};
  padding: 10px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    background-color: ${theme.AccentColor};
    color: ${theme.whiteColor};
    ${Box} {
      border-right: 1px solid #fff;
      &:last-child {
        border-right: none;
      }
    }
  }

  &.MB {
    margin-bottom: 16px;
  }
  &.bg {
    background-color: ${theme.AccentColor};
    ${Box} {
      border-right: 1px solid #fff;
      &:last-child {
        border-right: none;
      }
    }
  }
`;

const Img = styled.img`
  /* Adjust image styles here */
`;

const H4 = styled.h4`
  font-size: 15px;
  color: ${theme.whiteColor};
  font-weight: 400;

  &.redFont {
    color: #d94111;
  }
  &.redFontBold {
    color: #d94111;
    font-weight: 700;
  }
`;

const Description = styled.div`
  padding: 10px 75px;
  font-size: 12px;
  color: ${theme.whiteColor};
  display: ${(props) => (props.visible ? "block" : "none")};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  background-color: #181818;
  border-radius: 0 0 8px 8px;
  margin-bottom: 5px;
  margin-top: -3px;
  transition:  all 0.3s ease;
`;
const Wrapper = styled.div``;

const AlertCard = ({title, number, number2, risk}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Wrapper onClick={toggleDescription}>
      <AlertCardWrapper className={`${showDescription ? "bg" : "MB"}`}>
        <Box>
          <Img src={icon1} alt="Icon 1" />
          <H4>{title}</H4>
        </Box>

        <Box>
          <Img src={icon2} alt="Icon 2" />
          <H4 bold>{number}</H4>
        </Box>

        <Box>
          <Img src={icon3} alt="Icon 3" />
          <H4 className={`${showDescription ? "redFontBold" : "redFont"}`}>
            {number2}
          </H4>
        </Box>

        <Box>
          <Img src={icon4} alt="Icon 4" />
          <H4>{risk}</H4>
        </Box>
      </AlertCardWrapper>
      <Description visible={showDescription}>
      $TSLA just announced an acquisition of $NFLX at $200 B. 

      This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is long/short $ABC
      </Description>
    </Wrapper>
  );
};

export default AlertCard;
