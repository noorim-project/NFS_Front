import React from 'react';

import { Component } from '../../styles/gloobalStlye';
import { MainComponent } from '../../styles/main';
import  { Header_div, Design_text, Header_Content , Content_div , Design_div , Content_title , Content_table , Content_tbody , Content_td , Content_tr , Content_th}  from './Main_content';
import MainFirstPage from './MainFirstPage';  
import MainSecondPage from './MainSecondPage';

const Main = () => (
    <MainComponent>
      <Component>
        <MainFirstPage />
        <MainSecondPage />
      </Component>
    </MainComponent>
);

export default Main;
