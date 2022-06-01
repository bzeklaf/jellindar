import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import "./styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";




ReactDOM.render(<Router><CardList /></Router>, document.getElementById('root'));

