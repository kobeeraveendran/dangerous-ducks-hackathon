import React from "react";
import { v1 as uuid } from "uuid";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const Create =  () => {

  let history = useHistory();
  let id = uuid();

  function createRoom() {
    const id = uuid();
    history.push(`/meeting/${id}`);
  }
  
  return (
    <ContentContainer>
      <div className="hero-body">
        <div className="container has-text-centered has-text-weight-bold">
          <h1 className="title is-size-1">Create Meeting Room</h1>
          <h2 className="subtitle is-size-4 has-text-weight-bold">
            Click to Create Meeting
          </h2>
          <h2
            className="button is-info is-size-5"
            onClick={ createRoom }
          >
            Create Room
          </h2>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Create;

// const CreateRoom = (props) => {
//     function create() {
//         const id = uuid();
//         props.history.push(`/room/${id}`);
//     }

//     return (
//         <button onClick={create}>Create room</button>
//     );
// };

// export default CreateRoom;
