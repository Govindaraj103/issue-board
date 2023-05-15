import React from 'react';
import { useNavigate } from 'react-router-dom';

const View = (props) => {
  const navigate = useNavigate();

  const NavigateEdit = () => {
    navigate('/edit');
  };
  const getIssue = JSON.parse(localStorage.getItem('Issue'));

  const deleteIssue = (id) => {
    for (let i = 0; i < getIssue.length; i++) {
      if (getIssue[i].id === id) {
        getIssue.splice(i, 1);
        localStorage.setItem('Issue', JSON.stringify(getIssue));
        break;
      }
    }
  };

  return (
    <div>
      <h2>View Issue</h2>
      {props?.IssueList?.length > 0 ? (
        <div>
          {props.IssueList.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <p>title : {item.title}</p>
              <p>desc: {item.desc}</p>
              <button onClick={NavigateEdit}>Edit</button>

              <button onClick={() => deleteIssue(item.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>No Issues Found</h2>
        </div>
      )}
      {/* {' '}
      <table>
        <thead>
          <tr>
            <th className="col">Title</th>
            <br />
            <th className="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.IssueList?.title && props?.IssueList.desc ? (
            <tr>
              <td className="col">{props.IssueList.title}</td>
              <br />
              <td className="col">{props.IssueList.desc}</td>
              <td>
                {/* <button onClick={editIssue}>Edit</button> */}
      {/* <button onClick={deleteIssue}>Delete</button> */}
    </div>
  );
};

export default View;
