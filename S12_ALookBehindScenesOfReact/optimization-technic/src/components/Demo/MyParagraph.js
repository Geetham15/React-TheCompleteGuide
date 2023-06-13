import React from "react";

const MyParagraph = (props) => {
  console.log("My Paragraph running");
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};

export default MyParagraph;
