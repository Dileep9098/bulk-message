// import React, { useEffect, useState } from 'react'

// export default function SideBar() {
     
//     return (
//         <>
//             <aside id="sidebar" className="sidebar">
//                 <ul className="sidebar-nav" id="sidebar-nav">

//                     <li className="nav-item">
//                         <a className="nav-link" href="/">
//                             <i className="bi bi-grid"></i>
//                             <span>Dashboard</span>
//                         </a>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
//                             <i className="bi bi-menu-button-wide"></i><span>Type Of Message</span><i className="bi bi-chevron-down ms-auto"></i>
//                         </a>
//                         <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                             <li><a href="components-alerts.html"><i className="bi bi-circle"></i><span>WhatApp Message</span></a></li>
//                             <li><a href="components-accordion.html"><i className="bi bi-circle"></i><span>Normal Message</span></a></li>
//                             <li><a href="components-badges.html"><i className="bi bi-circle"></i><span>Email Message</span></a></li>
                          
//                         </ul>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
//                             <i className="bi bi-journal-text"></i><span>Call</span><i className="bi bi-chevron-down ms-auto"></i>
//                         </a>
//                         <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                             <li><a href="forms-elements.html"><i className="bi bi-circle"></i><span>Call Message</span></a></li>
                           
//                         </ul>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
//                             <i className="bi bi-layout-text-window-reverse"></i><span>User Menagements</span><i className="bi bi-chevron-down ms-auto"></i>
//                         </a>
//                         <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                             <li><a href="/user-management"><i className="bi bi-circle"></i><span>User Dashboard</span></a></li>
//                         </ul>
//                     </li>
// {/* 
//                     <li className="nav-item">
//                         <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
//                             <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
//                         </a>
//                         <ul id="charts-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                             <li><a href="charts-chartjs.html"><i className="bi bi-circle"></i><span>Chart.js</span></a></li>
//                             <li><a href="charts-apexcharts.html"><i className="bi bi-circle"></i><span>ApexCharts</span></a></li>
//                             <li><a href="charts-echarts.html"><i className="bi bi-circle"></i><span>ECharts</span></a></li>
//                         </ul>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
//                             <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
//                         </a>
//                         <ul id="icons-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//                             <li><a href="icons-bootstrap.html"><i className="bi bi-circle"></i><span>Bootstrap Icons</span></a></li>
//                             <li><a href="icons-remix.html"><i className="bi bi-circle"></i><span>Remix Icons</span></a></li>
//                             <li><a href="icons-boxicons.html"><i className="bi bi-circle"></i><span>Boxicons</span></a></li>
//                         </ul>
//                     </li>

//                     <li className="nav-heading">Pages</li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" href="users-profile.html">
//                             <i className="bi bi-person"></i>
//                             <span>Profile</span>
//                         </a>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" href="pages-faq.html">
//                             <i className="bi bi-question-circle"></i>
//                             <span>F.A.Q</span>
//                         </a>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" href="pages-contact.html">
//                             <i className="bi bi-envelope"></i>
//                             <span>Contact</span>
//                         </a>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" href="pages-register.html">
//                             <i className="bi bi-card-list"></i>
//                             <span>Register</span>
//                         </a>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" href="pages-login.html">
//                             <i className="bi bi-box-arrow-in-right"></i>
//                             <span>Login</span>
//                         </a>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" href="pages-error-404.html">
//                             <i className="bi bi-dash-circle"></i>
//                             <span>Error 404</span>
//                         </a>
//                     </li>

//                     <li className="nav-item">
//                         <a className="nav-link collapsed" href="pages-blank.html">
//                             <i className="bi bi-file-earmark"></i>
//                             <span>Blank</span>
//                         </a>
//                     </li> */}

//                 </ul>
//             </aside>
//         </>
//     )
// }


// import React, { useState } from 'react';

// export default function SideBar() {
//   const [openMenu, setOpenMenu] = useState(null); // holds the currently open menu key

//   const toggleMenu = (menuKey) => {
//     setOpenMenu(prev => (prev === menuKey ? null : menuKey)); // toggle logic
//   };

//   return (
//     <aside id="sidebar" className="sidebar">
//       <ul className="sidebar-nav" id="sidebar-nav">

//         {/* Dashboard */}
//         <li className="nav-item">
//           <a className="nav-link" href="/">
//             <i className="bi bi-grid"></i><span>Dashboard</span>
//           </a>
//         </li>

//         {/* Type Of Message */}
//         <li className="nav-item">
//           <div className="nav-link collapsed" onClick={() => toggleMenu("typeOfMessage")} style={{ cursor: 'pointer' }}>
//             <i className="bi bi-menu-button-wide"></i><span>Type Of Message</span><i className="bi bi-chevron-down ms-auto"></i>
//           </div>
//           {openMenu === "typeOfMessage" && (
//             <ul className="nav-content">
//               <li><a href="components-alerts.html"><i className="bi bi-circle"></i><span>WhatsApp Message</span></a></li>
//               <li><a href="components-accordion.html"><i className="bi bi-circle"></i><span>Normal Message</span></a></li>
//               <li><a href="components-badges.html"><i className="bi bi-circle"></i><span>Email Message</span></a></li>
//             </ul>
//           )}
//         </li>

//         {/* Call */}
//         <li className="nav-item">
//           <div className="nav-link collapsed" onClick={() => toggleMenu("call")} style={{ cursor: 'pointer' }}>
//             <i className="bi bi-journal-text"></i><span>Call</span><i className="bi bi-chevron-down ms-auto"></i>
//           </div>
//           {openMenu === "call" && (
//             <ul className="nav-content">
//               <li><a href="forms-elements.html"><i className="bi bi-circle"></i><span>Call Message</span></a></li>
//             </ul>
//           )}
//         </li>

//         {/* User Management */}
//         <li className="nav-item">
//           <div className="nav-link collapsed" onClick={() => toggleMenu("userManagement")} style={{ cursor: 'pointer' }}>
//             <i className="bi bi-layout-text-window-reverse"></i><span>User Managements</span><i className="bi bi-chevron-down ms-auto"></i>
//           </div>
//           {openMenu === "userManagement" && (
//             <ul className="nav-content">
//               <li><a href="/user-management"><i className="bi bi-circle"></i><span>User Dashboard</span></a></li>
//             </ul>
//           )}
//         </li>

//       </ul>
//     </aside>
//   );
// }


import React, { useState } from 'react';
import './topnav.css'; 
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuKey) => {
    setOpenMenu(prev => (prev === menuKey ? null : menuKey));
  };

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">

        {/* Dashboard */}
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Type Of Message */}
        <li className="nav-item">
          <div className="nav-link collapsed" onClick={() => toggleMenu("typeOfMessage")} style={{ cursor: 'pointer' }}>
            <i className="bi bi-menu-button-wide"></i>
            <span>Type Of Message</span>
            <i className={`bi bi-chevron-down ms-auto ${openMenu === "typeOfMessage" ? "rotate" : ""}`}></i>
          </div>
          {openMenu === "typeOfMessage" && (
            <ul className="nav-content">
              <li><Link to="/whatApp-message"><i className="bi bi-circle"></i><span>WhatsApp Message</span></Link></li>
              <li><Link to="/sms-message"><i className="bi bi-circle"></i><span>Normal Message</span></Link></li>
              <li><Link to="/email-message"><i className="bi bi-circle"></i><span>Email Message</span></Link></li>
            </ul>
          )}
        </li>

        {/* Call */}
        <li className="nav-item">
          <div className="nav-link collapsed" onClick={() => toggleMenu("call")} style={{ cursor: 'pointer' }}>
            <i className="bi bi-journal-text"></i>
            <span>Call</span>
            <i className={`bi bi-chevron-down ms-auto ${openMenu === "call" ? "rotate" : ""}`}></i>
          </div>
          {openMenu === "call" && (
            <ul className="nav-content">
              <li><Link to="/make-call"><i className="bi bi-circle"></i><span>Call Message</span></Link></li>
            </ul>
          )}
        </li>

        {/* User Management */}
        <li className="nav-item">
          <div className="nav-link collapsed" onClick={() => toggleMenu("userManagement")} style={{ cursor: 'pointer' }}>
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>User Managements</span>
            <i className={`bi bi-chevron-down ms-auto ${openMenu === "userManagement" ? "rotate" : ""}`}></i>
          </div>
          {openMenu === "userManagement" && (
            <ul className="nav-content">
              <li><Link to="/user-management"><i className="bi bi-circle"></i><span>User Dashboard</span></Link></li>
            </ul>
          )}
        </li>

      </ul>
    </aside>
  );
}
