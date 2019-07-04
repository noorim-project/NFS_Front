import React from 'react';

import { LandingButtonContent, Button } from '../../../styles/main';

const LandingButton = ({ clickEvent, changedEvent, content }) => (
  <Button onClick={() => clickEvent(changedEvent)}>
    <LandingButtonContent>{content}</LandingButtonContent>
  </Button>
);

export default LandingButton;
