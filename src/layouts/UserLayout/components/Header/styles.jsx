import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  padding-top: 5px;
  padding: 0 16px;
  width: 100%;
  height: 150px;

  background-color: #e6e6e6;
  z-index: 99;
`;

export const NavLinkContainer = styled.nav`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 8vh;
  width: 100vw;
`;

export const HeadBottom = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 200px) {
    display: none;
  }
  @media screen and (min-width: 900px) {
    display: block;
  }
`;
export const HeadTopHamburgerNavbar = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 200px) {
    display: block;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const Logo = styled.a`
  display: block;
  cursor: pointer;
  height: 100%;
`;

export const LogoImg = styled.img`
  height: 100px;
  height: 100px;
`;

export const TopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RouteLink = styled.div`
  height: 40px;
  width: 120px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.3rem;

  color: red;
  align-items: center;

  &:hover {
    background-color: rgb(215, 211, 211);
  }
`;

export const HeadTop = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`;

export const UserBar = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
`;

export const LoginLogoutBar = styled.div`
  margin-right: 4vw;
`;

export const Log = styled.a`
  text-decoration: none;
  color: #151515;
  /* cursor: pointer; */
  &:hover {
    color: #282020;
  }
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80px;
`;

export const Icon = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

export const Channel = styled.a`
  color: black;

  &:hover {
    color: black;
  }
`;
