import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/UiComponents/Sidebar";

import alretImage from "../assets/L2.png";
import searchImg from "../assets/Search.png";
// Styled components for Alerts component
const ParentWrapper = styled.div`
  display: grid;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-rows: auto;
  grid-template-columns: 9% 91%;
  grid-auto-columns: 1fr;
`;
const AlertsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-auto-rows: auto;
  grid-auto-columns: 1fr;
  grid-column-gap: 28px;
`;
const EmptyeDiV = styled.div`
  /* width: ; */
`;
const AlertHeader = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: auto;
  grid-template-columns: 0.5fr 2.5fr 0.25fr;
  grid-auto-columns: 1fr;
  padding: 20px;
`;

const PageNameWrapper = styled.div`
  border-left: 5px solid #53acff;
  border-radius: 2px;
`;

const H2 = styled.h2`
  /* Styles for the heading */
  font-size: 46px;
  color: #fff;
  font-weight: 700;
  margin-left: 14px;
`;

const SearchWrapper = styled.div`
  /* Styles for the search wrapper */
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
`;

const Input = styled.input`
  /* Styles for the input field */
  padding: 8px 19px 8px 17px;
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: #313131;
  color: #ffff;
  &::placeholder {
    color: #ffff; /* Set placeholder color to white */
  }
  &:focus {
    outline: none;
  }
`;

const SearchIconBtn = styled.button`
  position: absolute;
  right: 9px;
  top: 28%;
  background-color: transparent;
  border: none;
  padding: 0;
  border-radius: 4px;
  cursor: pointer;
`;

const AlertWrapper = styled.div`
  /* margin-top: 16px; */
  position: relative;
  max-width: 38px;
  width: 100%;
  height: 50px;
  top: 34%;
`;
const NumberWrapper = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #118f4b;
  font-weight: 700;
  color: #fff;
  font-size: 9px;
  display: grid;
  place-items: center;
  top: -3px;
  right: 13px;
`;
const AlertImg = styled.img`
  width: 21px;
  height: 21px;
`;

const FilterWrapper = styled.div`
  /* Styles for the filter wrapper */
`;

const Alerts = () => {
  return (
    <>
      <Sidebar />
      <ParentWrapper>
        <EmptyeDiV></EmptyeDiV>
        <AlertsWrapper>
          <AlertHeader>
            <PageNameWrapper>
              <H2>ALERTS</H2>
            </PageNameWrapper>
            <SearchWrapper>
              <Input type="text" placeholder="Search By..." />
              <SearchIconBtn>
                <img src={searchImg} alt="" />
              </SearchIconBtn>
            </SearchWrapper>
            <AlertWrapper>
              <NumberWrapper>6</NumberWrapper>
              <AlertImg src={alretImage} alt="" />
            </AlertWrapper>
          </AlertHeader>
          <FilterWrapper>
            {/* Additional content for FilterWrapper can be added here */}
          </FilterWrapper>
        </AlertsWrapper>
      </ParentWrapper>
    </>
  );
};

export default Alerts;
