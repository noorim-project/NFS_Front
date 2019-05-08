import React from 'react';

import { LandingButtonContent, Button } from '../../styles/main';

const LandingButton = ({ pathURL, content }) => (
  <Button to={pathURL}>
    <LandingButtonContent>{content}</LandingButtonContent>
  </Button>
);

export default LandingButton;
