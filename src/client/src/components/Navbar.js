// import React, { useContext } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import styled from 'styled-components';
// import Colors from '../common/Colors';
// import { AuthContext } from '../context';

// const NavBarItems = styled.div`
//   &:hover {
//     cursor: pointer;
//   }
// `;

// function Navbar() {
//   const auth = useContext(AuthContext);
//   const history = useHistory();

//   async function handleLogout() {
//     await auth.logout();
//   }

//   return (
//     <nav className="navbar" style={{ background: `${Colors.blue}44` }}>
//       <div className="container">
//         <div className="navbar-brand">
//           <a href="/" className="navbar-item title is-4">
//             🚀 TS-Boilerplate
//           </a>
//         </div>
//         <div className="navbar-menu">
//           <div className="navbar-end">
//             {auth.isAuthenticated ? (
//               <NavBarItems
//                 className="navbar-item"
//                 onClick={() => handleLogout()}
//               >
//                 Logout
//               </NavBarItems>
//             ) : (
//               <>
//                 <Link to="/login" className="navbar-item">
//                   Login
//                 </Link>
//                 <Link to="/register" className="navbar-item">
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../common/Colors';
import { AuthContext } from '../context';
import logo from '../images/meg_foundation_logo.png';

const NavBarItems = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  display: inline;
  width: 150px;
  height: 50px;
  margin-left: 60px;
  margin-top: 7px;
  background: white !important;
  background: black;
  border: 2px solid white;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

//Might add this component later. Keep it for now because the login/register control might be useful.

function Navbar() {
  const auth = useContext(AuthContext);
  const history = useHistory();

  async function handleLogout() {
    await auth.logout();
  }

  return (
    <nav
      className="navbar"
      style={{ background: `${Colors.white}`, height: '85px', width: '100%' }}
    >
      <div className="navbar-brand">
        <a
          href="https://blackinnovationalliance.com/"
          style={{ display: 'flex', alignItems: 'left' }}
        >
          {/* <Avatar src={process.env.PUBLIC_URL + '/img/BIA.png'} /> */}
          <img
            src={logo}
            style={{
              width: '46px',
              height: '50px',
              marginLeft: '40px',
              marginTop: '20px',
            }}
          />
        </a>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
          }}
        >
          {' '}
          Make A Plan{' '}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
