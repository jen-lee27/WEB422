import './App.css';
import React from "react"
import ControlledForm from './Components/ControlledForm';
import UnControlledForm from './Components/UnControlledForm';
import LoginPage from './LoginForm';

function App() {
  return (
    <div className="App">
      {/* <UnControlledForm/> */}
      {/* <ControlledForm/> */}
      <LoginPage/>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
