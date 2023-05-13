import React from 'react';
import { useNavigate } from 'react-router-dom';

const View = (props) => {
  const navigate = useNavigate();
  const deleteIssue = () => {
    localStorage.removeItem('Issue');
  };

  const editIssue = () => {
    const result = JSON.parse(localStorage.getItem('Issue'));
  };
  return (
    <div>
      {' '}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.IssueList?.title && props?.IssueList.desc ? (
            <tr>
              <td>{props.IssueList.title}</td>
              <td>{props.IssueList.desc}</td>
              <td>
                <button onClick={editIssue}>Edit</button>
                <button onClick={deleteIssue}>Delete</button>
              </td>
            </tr>
          ) : (
            <tr>No data found</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default View;
