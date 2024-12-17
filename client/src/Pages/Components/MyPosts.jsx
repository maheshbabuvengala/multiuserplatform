import React from "react";
import "./Myposts.module.css";

const MyPosts = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Experience</th>
            <th>Designation</th>
            <th>No. of Openings</th>
            <th>Salary</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" style={{ textAlign: "center" }}>
              No Posts found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyPosts;
