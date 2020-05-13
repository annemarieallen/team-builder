import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: solid red 2px;
  margin: 5px;
`;

const Members = (props) => {
  return (
    <StyledDiv className="member-list">
      {props.teamMembers.map((member) => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </StyledDiv>
  );
};

export default Members;