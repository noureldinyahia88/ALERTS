import React from "react";
import styled from "styled-components";
import theme from "../../variables";

// Import assets
import logo from "../../assets/street suite logo-04 1.svg";
import AlertsIcon from "../../assets/Layer1.svg";
import LinkIconForHoverIcon from "../../assets/Layer1.1.svg";
import TrainingIcon from "../../assets/2.svg";
import TrainingHoverIcon from "../../assets/Group2.2.svg";
import AutomationIcon from "../../assets/Group3.svg";
import PortfolioIcon from "../../assets/Group4.svg";
import TradingIcon from "../../assets/Group5.svg";
import imageProfile from "../../assets/pro.png";
import comingSoon from "../../assets/G2.png";
import alretImage from "../../assets/L2.png";

// Styled components for Sidebar

const SidebarWrapperTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarWrapperBottom = styled.div`
  color: #424242;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

const LogoWrapper = styled.div`
  margin-bottom: 46px;
`;

const Logo = styled.img`
  max-width: 124px;
  width: 100%;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const LinkIconForHover = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 0px;
  display: none;
`;
const LinkIcon = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 0px;
`;

const LinkIconComingSoon = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 0px;
`;
const LinkWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${theme.whiteColor};
  font-size: 19px;
  font-weight: 600;
  transition: all 0.3s ease-in;

  &:hover {
    color: ${theme.AccentColor};

    ${LinkIcon} {
      display: none;
    }

    ${LinkIconForHover} {
      display: block;
    }
  }
`;

const ComingSoonBox = styled.div`
  position: absolute;
  left: -22px;
  display: none;
  transition: display 0.5s ease-in;
`;

const LinknPSoon = styled.p`
  color: #5d5d5d;
  font-size: 19px;
  font-weight: 400;
  display: none;

  &:hover {
    color: ${theme.AccentColor};
  }
`;

const LinkWrapperComingSoon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${theme.whiteColor};
  font-size: 19px;
  font-weight: 600;
  transition: all 0.5s ease-in;

  &:hover {
    ${LinkIconComingSoon} {
      opacity: 0;
    }

    ${ComingSoonBox} {
      display: block;
    }

    ${LinknPSoon} {
      opacity: 0;
    }
  }
`;
const LinknP = styled.p`
  color: inherit;
  font-size: 19px;
  font-weight: 400;
  display: none;

  &.boldLinknP {
    font-weight: 600;
  }

  &:hover {
    color: ${theme.AccentColor};
  }
`;

const AccountDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  text-align: start;
`;

const AccountImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const AccountImg = styled.img`
  max-width: 38px;
  max-height: 41px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AccountDetails = styled.div`
  display: none;
`;

const H3 = styled.h3`
  padding: 0;
  color: ${theme.whiteColor};
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 2px 0;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 13px;
  color: #979797;
`;

const PDetail = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: none;
`;

const AlertWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
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

const SidebarWrapper = styled.div`
  width: 47px;
  padding: 21px 4px 4px 4px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-left: 7px;
  background-color: ${theme.blackColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px;
  transition: width 0.2s ease;

  &:hover {
    width: 180px;
    padding: 29px 14px 26px 19px;
    border-radius: 8px;

    ${LinknPSoon} {
      display: block;
    }
    ${LinknP} {
      display: block;
    }
    ${AccountDetails} {
      display: block;
    }
    ${PDetail} {
      display: block;
    }
    ${SidebarWrapperTop} {
      width: unset;
      display: unset;
      flex-direction: unset;
      align-items: unset;
    }
    ${LinksWrapper} {
      align-items: unset;
    }
    ${LinkIcon} {
      margin-right: 12px;
    }

    ${LinkIconForHover} {
      margin-right: 12px;
    }
    ${LinkIconComingSoon} {
      margin-right: 12px;
    }
    ${AccountImgWrapper} {
      justify-content: unset;
    }
    ${AlertWrapper} {
      display: none;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarWrapperTop>
        <LogoWrapper>
          <Logo src={logo} alt="logo" />
        </LogoWrapper>

        <LinksWrapper>
          <LinkWrapper>
            <LinkIcon
              style={{ width: "17px", height: "17px" }}
              src={AlertsIcon}
              alt=""
            />
            <LinkIconForHover
              style={{ width: "17px", height: "17px" }}
              src={LinkIconForHoverIcon}
              alt=""
            />
            <LinknP className="boldLinknP">Alerts</LinknP>
          </LinkWrapper>

          <LinkWrapper>
            <LinkIcon
              style={{ width: "20px", height: "13px" }}
              src={TrainingIcon}
              alt=""
            />
            <LinkIconForHover
              style={{ width: "20px", height: "13px" }}
              src={TrainingHoverIcon}
              alt=""
            />
            <LinknP>Training</LinknP>
          </LinkWrapper>

          <LinkWrapperComingSoon>
            <LinkIconComingSoon
              style={{ width: "23px", height: "20px" }}
              src={AutomationIcon}
              alt=""
            />
            <LinknPSoon>Automation</LinknPSoon>
            <ComingSoonBox>
              <img src={comingSoon} alt="" />
            </ComingSoonBox>
          </LinkWrapperComingSoon>

          <LinkWrapperComingSoon>
            <LinkIconComingSoon
              style={{ width: "25px", height: "18px" }}
              src={PortfolioIcon}
              alt=""
            />
            <LinknPSoon>Portfolio</LinknPSoon>
            <ComingSoonBox>
              <img src={comingSoon} alt="" />
            </ComingSoonBox>
          </LinkWrapperComingSoon>

          <LinkWrapperComingSoon>
            <LinkIconComingSoon
              style={{ width: "25px", height: "21px" }}
              src={TradingIcon}
              alt=""
            />
            <LinknPSoon>Trading</LinknPSoon>
            <ComingSoonBox>
              <img src={comingSoon} alt="" />
            </ComingSoonBox>
          </LinkWrapperComingSoon>
        </LinksWrapper>
      </SidebarWrapperTop>
      <SidebarWrapperBottom>
        <AlertWrapper>
          <NumberWrapper>6</NumberWrapper>
          <AlertImg src={alretImage} alt="" />
        </AlertWrapper>
        <AccountDetailsWrapper>
          <AccountImgWrapper>
            <AccountImg src={imageProfile} alt="Profile" />
          </AccountImgWrapper>

          <AccountDetails>
            <H3>Moni Roy</H3>
            <P>Beginner</P>
          </AccountDetails>
        </AccountDetailsWrapper>
        <PDetail>Street Suite. 2.0</PDetail>
      </SidebarWrapperBottom>
    </SidebarWrapper>
  );
};

export default Sidebar;
