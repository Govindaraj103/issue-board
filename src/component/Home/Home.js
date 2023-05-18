import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import View from '../View/View';

const Home = () => {
  const navigate = useNavigate();

  const NavigateCreate = () => {
    navigate('/create');
  };

  const IssueList = JSON.parse(localStorage.getItem('Issue'));

  return (
    <div className="header1">
      <button className="__btb-color" onClick={NavigateCreate}>
        Create new issue
      </button>
      <div className="flex-large">
        <View IssueList={IssueList} />
      </div>
    </div>
  );
};

export default Home;
