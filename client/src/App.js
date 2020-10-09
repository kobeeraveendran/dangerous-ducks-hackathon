import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import styled from 'styled-components';

const App = () => {
  let history = useHistory();
  return (

    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/" exact component={ CreateRoom } />
    //     <Route path="/room/:roomID" component={ Room } />
    //   </Switch>
    //   <ContentContainer>
    //   <div className="hero-body">
    //     <div className="container has-text-centered has-text-weight-bold">
    //       <h1 className="title is-size-1">This is the title</h1>
    //       <h2 className="subtitle is-size-4 has-text-weight-bold">
    //         This is the subtitle
    //       </h2>
    //       <h2
    //         className="button is-info is-size-5"
    //         onClick={() => history.push('/create')}
    //       >
    //         Create Room
    //       </h2>
    //     </div>
    //   </div>
    //   </ContentContainer>
    // </BrowserRouter>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ CreateRoom } />
        <Route path="/meeting/:roomID" component={ Room } />
      </Switch>
    </BrowserRouter>

    // <ContentContainer>
    //   <div className="hero-body">
    //     <div className="container has-text-centered has-text-weight-bold">
    //       <h1 className="title is-size-1">This is the title</h1>
    //       <h2 className="subtitle is-size-4 has-text-weight-bold">
    //         This is the subtitle
    //       </h2>
    //       <h2
    //         className="button is-info is-size-5"
    //         onClick={() => history.push('/create')}
    //       >
    //         Create Room
    //       </h2>
    //     </div>
    //   </div>
    // </ContentContainer>

    
  );
};

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact component={CreateRoom} />
//         <Route path="/room/:roomID" component={Room} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;
