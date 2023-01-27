import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { FaSearchLocation } from 'react-icons/fa';

interface IHeaderProps {
  setIsOpenListUp: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenListUp: boolean;
}

const Header = ({ setIsOpenListUp, isOpenListUp }: IHeaderProps) => {
  return (
    <>
      <GlobalStyle />
      <FaSearchLocation
        style={{ width: '30px', height: '40px', marginLeft: '50%' }}
        onClick={() => setIsOpenListUp(!isOpenListUp)}
      />
    </>
  );
};

export default Header;
