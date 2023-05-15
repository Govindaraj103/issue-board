import React, { useState, useEffect } from 'react';
import '../Home/Home.css';
import '../Create/create.css';

const Create = (props) => {
  const [titleValue, setTitleValue] = useState(props.title);
  const [descValue, setDescValue] = useState(props.desc);

  const [data, setData] = useState('');

  const getIssue = JSON.parse(localStorage.getItem('Issue'));

  const uID = Math.floor(Math.random() * 100);

  const Edit = () => {
    const issue = { title: titleValue, desc: descValue };
    localStorage.setItem('Issue', JSON.stringify(issue));
  };

  const Create = () => {
    const issue = { id: uID, title: titleValue, desc: descValue };
    const value = [...getIssue, issue];
    console.log(value);

    localStorage.setItem('Issue', JSON.stringify(value));
    // const data1 = localStorage.getItem('Issue');
    // setData(data1);
  };

  const deleteIssue = () => {
    localStorage.removeItem('Issue');
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
      <button className="buttenC" onClick={Create}>
        Create
      </button>
      {/* <button className="buttenE" onClick={Edit}>
        Edit
      </button>
      <button className="buttenD" onClick={deleteIssue}>
        Delete
      </button> */}
      <h3>{data}</h3>
    </div>
  );
};

export default Create;
