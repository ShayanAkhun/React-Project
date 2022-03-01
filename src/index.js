import faker from "faker";
import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Navbar from "./Navbar";
// eslint-disable-next-line no-unused-vars
import components from "./components/components";



const App = () => {
  return (
    <div className="ui container">
      <components>
      <Navbar/>
      <ApprovalCard >
        <CommentDetail
          author="Shayan"
          date="Today 6:00AM"
          text="Revloutionary!!!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Salman"
          date="Today 4:20 PM"
          text="prachtig!!!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sajid "
          date="Yesterday 3:14 PM"
          text="wunderbarr!!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      </components>
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
