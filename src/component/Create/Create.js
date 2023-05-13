import React, { useState } from 'react';
import '../Home/Home.css';

const Create = (props) => {
  const [titleValue, setTitleValue] = useState(props.title);
  const [descValue, setDescValue] = useState(props.desc);

  const [data, setData] = useState('');

  const handleSave = () => {
    const issue = { title: titleValue, desc: descValue };
    localStorage.setItem('Issue', JSON.stringify(issue));
    // console.log(localStorage.getItem('Issue'));
    // const data1 = localStorage.getItem('Issue');
    // setData(data1);
    // console.log(localStorage.removeItem('Issue'));
  };
  return (
    <div>
      <input
        className="color"
        placeholder="Enter Title"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <input
        className="color"
        placeholder="desc"
        value={descValue}
        onChange={(e) => setDescValue(e.target.value)}
      />
      <button onClick={handleSave}>Create</button>
      <h3>{data}</h3>
    </div>
  );
};

export default Create;
