import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css';
import '../Create/create.css';

const Create = (props) => {
  const [titleValue, setTitleValue] = useState(props.title);
  const [descValue, setDescValue] = useState(props.desc);

  const navigate = useNavigate();
  const issueStorage = JSON.parse(localStorage.getItem('Issue'));

  const onClickHandler = () => {
    const uID = Math.floor(Math.random() * 100);
    const issue = { id: uID, title: titleValue, desc: descValue };
    const value = [...issueStorage, issue];
    localStorage.setItem('Issue', JSON.stringify(value));
    navigate('/');
  };

  return (
    <div className="header">
      <br />
      <p className="text">Title:</p>
      <input
        className="color"
        placeholder="Enter Title"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <p className="text">Description:</p>
      <input
        className="color"
        placeholder="desc"
        value={descValue}
        onChange={(e) => setDescValue(e.target.value)}
      />
      <br />
      <br />
      <button className="buttenC" onClick={onClickHandler}>
        Create
      </button>
    </div>
  );
};

export default Create;
