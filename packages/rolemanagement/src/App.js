// import './App.css';
// import LoginForm from './components/LoginForm';
// import AdminRoles from './components/AdminRoles';
// import Drawer from './components/Drawer/Drawer';
// import CreateNewRoleForm from './components/CreateNewRoleForm.js';
// import {CssBaseline} from '@mui/material';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// function App() {
//   return (
//     <div>
//     <CssBaseline />
//     <Router>
//      <Routes>
//       <Route exact path='/login' element={<LoginForm />}/>
//      </Routes>
//     <Drawer>
//       <Routes>
//       <Route exact path='/createRole' element={<CreateNewRoleForm />}/>
//       <Route exact path='/' element={<AdminRoles/>}/>
//       </Routes>
//     </Drawer>
//     </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';


import AdminRoles from './components/AdminRoles';



export default ({ history }) => {
  return (
    <div>
      Hi
        {/* <Router history={history}> */}
          HI
{/* //      <Routes>
//       <Route exact path='/login' element={<LoginForm />}/>
//      </Routes>
//     <Drawer>
//       <Routes>
//       <Route exact path='/createRole' element={<CreateNewRoleForm />}/>
//       <Route exact path='/' element={<AdminRoles/>}/>
//       </Routes>
//     </Drawer> */}
{/* //     </Router> */}
    </div>
  );
};