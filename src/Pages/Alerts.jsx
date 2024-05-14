import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../Components/UiComponents/Sidebar";

import alretImage from "../assets/L2.png";
import searchImg from "../assets/Search.png";
import AlertCard from "../Components/UiComponents/AlertCard";

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
  font-size: 46px;
  color: #fff;
  font-weight: 700;
  margin-left: 14px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
`;

const Input = styled.input`
  padding: 8px 19px 8px 17px;
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: #313131;
  color: #ffff;
  &::placeholder {
    color: #ffff; 
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

const FilterWrapper = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div`
  margin-left: 30px;
  width: 100%;
  padding: 20px;
  overflow-y: scroll;
  height: 85vh;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #424242;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 20px;

    background-color: #202020;
    border-radius: 6px;
  }
`;
const EmptyDiv = styled.div``

const Alerts = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const alertsData = [
      { title: "AMZN", number: "200", number2: "-0.25 %", risk: "Low Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "TSLA", number: "200", number2: "-0.25 %", risk: "Low Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      { title: "ABQQ", number: "200", number2: "-0.25 %", risk: "High Risk" },
      // Add more data as needed
    ];
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value.toLowerCase());
    };
  
    const filteredAlerts = alertsData.filter((alert) =>
      alert.title.toLowerCase().includes(searchTerm)
    );

  return (
    <>
      <Sidebar />
      <ParentWrapper>
        <EmptyDiv></EmptyDiv>
        <AlertsWrapper>
          <div>
            <AlertHeader>
              <PageNameWrapper>
                <H2>ALERTS</H2>
              </PageNameWrapper>
              <SearchWrapper>
                <Input
                  type="text"
                  placeholder="Search By..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <SearchIconBtn>
                  <img src={searchImg} alt="" />
                </SearchIconBtn>
              </SearchWrapper>
              <AlertWrapper>
                <NumberWrapper>{filteredAlerts.length}</NumberWrapper>
                <AlertImg src={alretImage} alt="" />
              </AlertWrapper>
            </AlertHeader>
            <Container>
              {filteredAlerts.map((alert, index) => (
                <AlertCard
                  key={index}
                  title={alert.title}
                  number={alert.number}
                  number2={alert.number2}
                  risk={alert.risk}
                />
              ))}
            </Container>
          </div>
          <div>
            {/* Additional content for FilterWrapper can be added here */}
          </div>
        </AlertsWrapper>
      </ParentWrapper>
    </>
  );
};

export default Alerts;
