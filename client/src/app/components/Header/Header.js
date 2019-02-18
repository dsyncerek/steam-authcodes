import React from 'react';
import { DescriptionStyled, HeaderStyled, TitleStyled } from './Header.styled';

const Header = () => (
  <HeaderStyled>
    <TitleStyled>
      Steam AuthCodes
    </TitleStyled>
    <DescriptionStyled>
      All your Steam auth codes in one place.
    </DescriptionStyled>
  </HeaderStyled>
);

export default Header;
