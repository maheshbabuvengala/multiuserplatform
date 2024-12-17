import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          height: "72px",
          backgroundColor: "burlywood",
          alignItems: "center",
        }}
      >
        <h1>Name: </h1>
        <button
          style={{
            width: "80px",
            height: "40px",
            borderRadius: "10px",
            backgroundColor: "red",
          }}
        >
          Logout
        </button>
      </div>
      <div style={{ marginTop: "2%" }}>
        <h1>My posts</h1>
      </div>
      <div style={{ float: "right", marginRight: "10px" }}>
        <button
          style={{
            padding: "10px",
            height: "50px",
            width: "90px",
            borderRadius: "10px",
            backgroundColor: "blanchedalmond",
          }}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default Navbar;
