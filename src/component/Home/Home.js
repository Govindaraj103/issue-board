import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import View from '../View/View';
import { isCompositeComponent } from 'react-dom/test-utils';
const Home = () => {
  const navigate = useNavigate();

  const NavigateCreate = () => {
    navigate('/create');
  };

  const IssueList = JSON.parse(localStorage.getItem('Issue'));

  console.log(IssueList);
  return (
    <div>
      <button className="__btb-color" onClick={NavigateCreate}>
        Create new issue
      </button>
      <div className="flex-large">
        <h2>View users</h2>
        <View IssueList={IssueList} />
      </div>
    </div>
  );
};

export default Home;
