import React from 'react';

import {
  HeaderComponent,
  PerpendicularSortComponent,
  LogoStyle,
} from '../../styles/default/header';
import nfsRogo from '../../assets/Main/NFS_Logo.png';

const Header = () => (
  <HeaderComponent>
    <PerpendicularSortComponent>
      <LogoStyle src={nfsRogo} alt="NFS 로고" />
    </PerpendicularSortComponent>
  </HeaderComponent>
);

export default Header;
