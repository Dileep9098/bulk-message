// import React from 'react';

// export default function App() {
//   return (
//     <>
//       <header id="header" className="header fixed-top d-flex align-items-center">
//         <div className="d-flex align-items-center justify-content-between">
//           <a href="index.html" className="logo d-flex align-items-center">
//             <img src="assets/img/logo.png" alt="" />
//             <span className="d-none d-lg-block">NiceAdmin</span>
//           </a>
//           <i className="bi bi-list toggle-sidebar-btn"></i>
//         </div>
//         {/* End Logo */}

//         <div className="search-bar">
//           <form className="search-form d-flex align-items-center" method="POST" action="#">
//             <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
//             <button type="submit" title="Search">
//               <i className="bi bi-search"></i>
//             </button>
//           </form>
//         </div>
//         {/* End Search Bar */}

//         <nav className="header-nav ms-auto">
//           <ul className="d-flex align-items-center">
//             <li className="nav-item d-block d-lg-none">
//               <a className="nav-link nav-icon search-bar-toggle" href="#">
//                 <i className="bi bi-search"></i>
//               </a>
//             </li>
//             {/* End Search Icon */}

//             <li className="nav-item dropdown">
//               <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
//                 <i className="bi bi-bell"></i>
//                 <span className="badge bg-primary badge-number">4</span>
//               </a>
//               {/* End Notification Icon */}

//               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
//                 <li className="dropdown-header">
//                   You have 4 new notifications
//                   <a href="#">
//                     <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li className="notification-item">
//                   <i className="bi bi-exclamation-circle text-warning"></i>
//                   <div>
//                     <h4>Lorem Ipsum</h4>
//                     <p>Quae dolorem earum veritatis oditseno</p>
//                     <p>30 min. ago</p>
//                   </div>
//                 </li>

//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li className="notification-item">
//                   <i className="bi bi-x-circle text-danger"></i>
//                   <div>
//                     <h4>Atque rerum nesciunt</h4>
//                     <p>Quae dolorem earum veritatis oditseno</p>
//                     <p>1 hr. ago</p>
//                   </div>
//                 </li>

//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li className="notification-item">
//                   <i className="bi bi-check-circle text-success"></i>
//                   <div>
//                     <h4>Sit rerum fuga</h4>
//                     <p>Quae dolorem earum veritatis oditseno</p>
//                     <p>2 hrs. ago</p>
//                   </div>
//                 </li>

//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li className="notification-item">
//                   <i className="bi bi-info-circle text-primary"></i>
//                   <div>
//                     <h4>Dicta reprehenderit</h4>
//                     <p>Quae dolorem earum veritatis oditseno</p>
//                     <p>4 hrs. ago</p>
//                   </div>
//                 </li>

//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li className="dropdown-footer">
//                   <a href="#">Show all notifications</a>
//                 </li>
//               </ul>
//               {/* End Notification Dropdown Items */}
//             </li>
//             {/* End Notification Nav */}

//             <li className="nav-item dropdown">
//               <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
//                 <i className="bi bi-chat-left-text"></i>
//                 <span className="badge bg-success badge-number">3</span>
//               </a>
//               {/* End Messages Icon */}

//               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
//                 <li className="dropdown-header">
//                   You have 3 new messages
//                   <a href="#">
//                     <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li className="message-item">
//                   <a href="#">
//                     <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
//                     <div>
//                       <h4>Maria Hudson</h4>
//                       <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
//                       <p>4 hrs. ago</p>
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li className="message-item">
//                   <a href="#">
//                     <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
//                     <div>
//                       <h4>Anna Nelson</h4>
//                       <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
//                       <p>6 hrs. ago</p>
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li className="message-item">
//                   <a href="#">
//                     <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
//                     <div>
//                       <h4>David Muldon</h4>
//                       <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
//                       <p>8 hrs. ago</p>
//                     </div>
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li className="dropdown-footer">
//                   <a href="#">Show all messages</a>
//                 </li>
//               </ul>
//               {/* End Messages Dropdown Items */}
//             </li>
//             {/* End Messages Nav */}

//             <li className="nav-item dropdown pe-3">
//               <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
//                 <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
//                 <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
//               </a>
//               {/* End Profile Image Icon */}

//               <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
//                 <li className="dropdown-header">
//                   <h6>Kevin Anderson</h6>
//                   <span>Web Designer</span>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li>
//                   <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
//                     <i className="bi bi-person"></i>
//                     <span>My Profile</span>
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li>
//                   <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
//                     <i className="bi bi-gear"></i>
//                     <span>Account Settings</span>
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li>
//                   <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
//                     <i className="bi bi-question-circle"></i>
//                     <span>Need Help?</span>
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>

//                 <li>
//                   <a className="dropdown-item d-flex align-items-center" href="#">
//                     <i className="bi bi-box-arrow-right"></i>
//                     <span>Sign Out</span>
//                   </a>
//                 </li>
//               </ul>
//               {/* End Profile Dropdown Items */}
//             </li>
//             {/* End Profile Nav */}
//           </ul>
//         </nav>
//         {/* End Icons Navigation */}
//       </header>
//       <aside id="sidebar" className="sidebar">
//         <ul className="sidebar-nav" id="sidebar-nav">

//           <li className="nav-item">
//             <a className="nav-link" href="index.html">
//               <i className="bi bi-grid"></i>
//               <span>Dashboard</span>
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
//               <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
//             </a>
//             <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//               <li><a href="components-alerts.html"><i className="bi bi-circle"></i><span>Alerts</span></a></li>
//               <li><a href="components-accordion.html"><i className="bi bi-circle"></i><span>Accordion</span></a></li>
//               <li><a href="components-badges.html"><i className="bi bi-circle"></i><span>Badges</span></a></li>
//               <li><a href="components-breadcrumbs.html"><i className="bi bi-circle"></i><span>Breadcrumbs</span></a></li>
//               <li><a href="components-buttons.html"><i className="bi bi-circle"></i><span>Buttons</span></a></li>
//               <li><a href="components-cards.html"><i className="bi bi-circle"></i><span>Cards</span></a></li>
//               <li><a href="components-carousel.html"><i className="bi bi-circle"></i><span>Carousel</span></a></li>
//               <li><a href="components-list-group.html"><i className="bi bi-circle"></i><span>List group</span></a></li>
//               <li><a href="components-modal.html"><i className="bi bi-circle"></i><span>Modal</span></a></li>
//               <li><a href="components-tabs.html"><i className="bi bi-circle"></i><span>Tabs</span></a></li>
//               <li><a href="components-pagination.html"><i className="bi bi-circle"></i><span>Pagination</span></a></li>
//               <li><a href="components-progress.html"><i className="bi bi-circle"></i><span>Progress</span></a></li>
//               <li><a href="components-spinners.html"><i className="bi bi-circle"></i><span>Spinners</span></a></li>
//               <li><a href="components-tooltips.html"><i className="bi bi-circle"></i><span>Tooltips</span></a></li>
//             </ul>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
//               <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
//             </a>
//             <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//               <li><a href="forms-elements.html"><i className="bi bi-circle"></i><span>Form Elements</span></a></li>
//               <li><a href="forms-layouts.html"><i className="bi bi-circle"></i><span>Form Layouts</span></a></li>
//               <li><a href="forms-editors.html"><i className="bi bi-circle"></i><span>Form Editors</span></a></li>
//               <li><a href="forms-validation.html"><i className="bi bi-circle"></i><span>Form Validation</span></a></li>
//             </ul>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
//               <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
//             </a>
//             <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//               <li><a href="tables-general.html"><i className="bi bi-circle"></i><span>General Tables</span></a></li>
//               <li><a href="tables-data.html"><i className="bi bi-circle"></i><span>Data Tables</span></a></li>
//             </ul>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
//               <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
//             </a>
//             <ul id="charts-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//               <li><a href="charts-chartjs.html"><i className="bi bi-circle"></i><span>Chart.js</span></a></li>
//               <li><a href="charts-apexcharts.html"><i className="bi bi-circle"></i><span>ApexCharts</span></a></li>
//               <li><a href="charts-echarts.html"><i className="bi bi-circle"></i><span>ECharts</span></a></li>
//             </ul>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
//               <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
//             </a>
//             <ul id="icons-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
//               <li><a href="icons-bootstrap.html"><i className="bi bi-circle"></i><span>Bootstrap Icons</span></a></li>
//               <li><a href="icons-remix.html"><i className="bi bi-circle"></i><span>Remix Icons</span></a></li>
//               <li><a href="icons-boxicons.html"><i className="bi bi-circle"></i><span>Boxicons</span></a></li>
//             </ul>
//           </li>

//           <li className="nav-heading">Pages</li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" href="users-profile.html">
//               <i className="bi bi-person"></i>
//               <span>Profile</span>
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" href="pages-faq.html">
//               <i className="bi bi-question-circle"></i>
//               <span>F.A.Q</span>
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" href="pages-contact.html">
//               <i className="bi bi-envelope"></i>
//               <span>Contact</span>
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" href="pages-register.html">
//               <i className="bi bi-card-list"></i>
//               <span>Register</span>
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" href="pages-login.html">
//               <i className="bi bi-box-arrow-in-right"></i>
//               <span>Login</span>
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" href="pages-error-404.html">
//               <i className="bi bi-dash-circle"></i>
//               <span>Error 404</span>
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link collapsed" href="pages-blank.html">
//               <i className="bi bi-file-earmark"></i>
//               <span>Blank</span>
//             </a>
//           </li>

//         </ul>
//       </aside>

//       <main id="main" class="main">

//         <div className="pagetitle">
//           <h1>Dashboard</h1>
//           <nav>
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item">
//                 <a href="index.html">Home</a>
//               </li>
//               <li className="breadcrumb-item active">Dashboard</li>
//             </ol>
//           </nav>
//         </div>

//         <section class="section dashboard">
//           <div class="row">
//             <div className="col-lg-8">
//               <div className="row">

//                 {/* Sales Card */}
//                 <div className="col-xxl-4 col-md-6">
//                   <div className="card info-card sales-card">

//                     <div className="filter">
//                       <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                       <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                         <li className="dropdown-header text-start">
//                           <h6>Filter</h6>
//                         </li>
//                         <li><a className="dropdown-item" href="#">Today</a></li>
//                         <li><a className="dropdown-item" href="#">This Month</a></li>
//                         <li><a className="dropdown-item" href="#">This Year</a></li>
//                       </ul>
//                     </div>

//                     <div className="card-body">
//                       <h5 className="card-title">Sales <span>| Today</span></h5>

//                       <div className="d-flex align-items-center">
//                         <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
//                           <i className="bi bi-cart"></i>
//                         </div>
//                         <div className="ps-3">
//                           <h6>145</h6>
//                           <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>{/* End Sales Card */}

//                 {/* Revenue Card */}
//                 <div className="col-xxl-4 col-md-6">
//                   <div className="card info-card revenue-card">

//                     <div className="filter">
//                       <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                       <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                         <li className="dropdown-header text-start">
//                           <h6>Filter</h6>
//                         </li>
//                         <li><a className="dropdown-item" href="#">Today</a></li>
//                         <li><a className="dropdown-item" href="#">This Month</a></li>
//                         <li><a className="dropdown-item" href="#">This Year</a></li>
//                       </ul>
//                     </div>

//                     <div className="card-body">
//                       <h5 className="card-title">Revenue <span>| This Month</span></h5>

//                       <div className="d-flex align-items-center">
//                         <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
//                           <i className="bi bi-currency-dollar"></i>
//                         </div>
//                         <div className="ps-3">
//                           <h6>$3,264</h6>
//                           <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>{/* End Revenue Card */}

//                 {/* Customers Card */}
//                 <div className="col-xxl-4 col-xl-12">
//                   <div className="card info-card customers-card">

//                     <div className="filter">
//                       <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                       <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                         <li className="dropdown-header text-start">
//                           <h6>Filter</h6>
//                         </li>
//                         <li><a className="dropdown-item" href="#">Today</a></li>
//                         <li><a className="dropdown-item" href="#">This Month</a></li>
//                         <li><a className="dropdown-item" href="#">This Year</a></li>
//                       </ul>
//                     </div>

//                     <div className="card-body">
//                       <h5 className="card-title">Customers <span>| This Year</span></h5>

//                       <div className="d-flex align-items-center">
//                         <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
//                           <i className="bi bi-people"></i>
//                         </div>
//                         <div className="ps-3">
//                           <h6>1244</h6>
//                           <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
//                         </div>
//                       </div>

//                     </div>
//                   </div>

//                 </div>{/* End Customers Card */}

//                 {/* Reports */}
//                 <div className="col-12">
//                   <div className="card">

//                     <div className="filter">
//                       <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                       <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                         <li className="dropdown-header text-start">
//                           <h6>Filter</h6>
//                         </li>
//                         <li><a className="dropdown-item" href="#">Today</a></li>
//                         <li><a className="dropdown-item" href="#">This Month</a></li>
//                         <li><a className="dropdown-item" href="#">This Year</a></li>
//                       </ul>
//                     </div>

//                     <div className="card-body">
//                       <h5 className="card-title">Reports <span>/Today</span></h5>

//                       {/* Line Chart Placeholder */}
//                       <div id="reportsChartPlaceholder"></div>
//                       {/* End Line Chart */}

//                     </div>

//                   </div>
//                 </div>{/* End Reports */}

//                 {/* Recent Sales */}
//                 <div className="col-12">
//                   <div className="card recent-sales overflow-auto">

//                     <div className="filter">
//                       <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                       <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                         <li className="dropdown-header text-start">
//                           <h6>Filter</h6>
//                         </li>
//                         <li><a className="dropdown-item" href="#">Today</a></li>
//                         <li><a className="dropdown-item" href="#">This Month</a></li>
//                         <li><a className="dropdown-item" href="#">This Year</a></li>
//                       </ul>
//                     </div>

//                     <div className="card-body">
//                       <h5 className="card-title">Recent Sales <span>| Today</span></h5>

//                       <table className="table table-borderless datatable">
//                         <thead>
//                           <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Customer</th>
//                             <th scope="col">Product</th>
//                             <th scope="col">Price</th>
//                             <th scope="col">Status</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row"><a href="#">#2457</a></th>
//                             <td>Brandon Jacob</td>
//                             <td><a href="#" className="text-primary">At praesentium minu</a></td>
//                             <td>$64</td>
//                             <td><span className="badge bg-success">Approved</span></td>
//                           </tr>
//                           {/* More rows can be added in the same format */}
//                         </tbody>
//                       </table>

//                     </div>

//                   </div>
//                 </div>{/* End Recent Sales */}

//                 {/* Top Selling */}
//                 <div className="col-12">
//                   <div className="card top-selling overflow-auto">

//                     <div className="filter">
//                       <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                       <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                         <li className="dropdown-header text-start">
//                           <h6>Filter</h6>
//                         </li>
//                         <li><a className="dropdown-item" href="#">Today</a></li>
//                         <li><a className="dropdown-item" href="#">This Month</a></li>
//                         <li><a className="dropdown-item" href="#">This Year</a></li>
//                       </ul>
//                     </div>

//                     <div className="card-body pb-0">
//                       <h5 className="card-title">Top Selling <span>| Today</span></h5>

//                       <table className="table table-borderless">
//                         <thead>
//                           <tr>
//                             <th scope="col">Preview</th>
//                             <th scope="col">Product</th>
//                             <th scope="col">Price</th>
//                             <th scope="col">Sold</th>
//                             <th scope="col">Revenue</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt="" /></a></th>
//                             <td><a href="#" className="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
//                             <td>$64</td>
//                             <td className="fw-bold">124</td>
//                             <td>$5,828</td>
//                           </tr>
//                           {/* More rows can be added in the same format */}
//                         </tbody>
//                       </table>

//                     </div>

//                   </div>
//                 </div>{/* End Top Selling */}

//               </div>
//             </div>

//             <div className="col-lg-4">

//               {/* Recent Activity */}
//               <div className="card">
//                 <div className="filter">
//                   <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                   <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li className="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>
//                     <li><a className="dropdown-item" href="#">Today</a></li>
//                     <li><a className="dropdown-item" href="#">This Month</a></li>
//                     <li><a className="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div className="card-body">
//                   <h5 className="card-title">Recent Activity <span>| Today</span></h5>

//                   <div className="activity">

//                     <div className="activity-item d-flex">
//                       <div className="activite-label">32 min</div>
//                       <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
//                       <div className="activity-content">
//                         Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
//                       </div>
//                     </div>

//                     <div className="activity-item d-flex">
//                       <div className="activite-label">56 min</div>
//                       <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
//                       <div className="activity-content">
//                         Voluptatem blanditiis blanditiis eveniet
//                       </div>
//                     </div>

//                     <div className="activity-item d-flex">
//                       <div className="activite-label">2 hrs</div>
//                       <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
//                       <div className="activity-content">
//                         Voluptates corrupti molestias voluptatem
//                       </div>
//                     </div>

//                     <div className="activity-item d-flex">
//                       <div className="activite-label">1 day</div>
//                       <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
//                       <div className="activity-content">
//                         Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
//                       </div>
//                     </div>

//                     <div className="activity-item d-flex">
//                       <div className="activite-label">2 days</div>
//                       <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
//                       <div className="activity-content">
//                         Est sit eum reiciendis exercitationem
//                       </div>
//                     </div>

//                     <div className="activity-item d-flex">
//                       <div className="activite-label">4 weeks</div>
//                       <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
//                       <div className="activity-content">
//                         Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
//                       </div>
//                     </div>

//                   </div>

//                 </div>
//               </div>

//               {/* Budget Report */}
//               <div className="card">
//                 <div className="filter">
//                   <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                   <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li className="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>
//                     <li><a className="dropdown-item" href="#">Today</a></li>
//                     <li><a className="dropdown-item" href="#">This Month</a></li>
//                     <li><a className="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div className="card-body pb-0">
//                   <h5 className="card-title">Budget Report <span>| This Month</span></h5>

//                   <div id="budgetChart" style={{ minHeight: '400px' }} className="echart"></div>

//                 </div>
//               </div>

//               {/* Website Traffic */}
//               <div className="card">
//                 <div className="filter">
//                   <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                   <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li className="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>
//                     <li><a className="dropdown-item" href="#">Today</a></li>
//                     <li><a className="dropdown-item" href="#">This Month</a></li>
//                     <li><a className="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div className="card-body pb-0">
//                   <h5 className="card-title">Website Traffic <span>| Today</span></h5>

//                   <div id="trafficChart" style={{ minHeight: '400px' }} className="echart"></div>

//                 </div>
//               </div>

//               {/* News & Updates */}
//               <div className="card">
//                 <div className="filter">
//                   <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                   <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li className="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>
//                     <li><a className="dropdown-item" href="#">Today</a></li>
//                     <li><a className="dropdown-item" href="#">This Month</a></li>
//                     <li><a className="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div className="card-body pb-0">
//                   <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>

//                   <div className="news">
//                     <div className="post-item clearfix">
//                       <img src="assets/img/news-1.jpg" alt="" />
//                       <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
//                       <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
//                     </div>

//                     <div className="post-item clearfix">
//                       <img src="assets/img/news-2.jpg" alt="" />
//                       <h4><a href="#">Quidem autem et impedit</a></h4>
//                       <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
//                     </div>

//                     <div className="post-item clearfix">
//                       <img src="assets/img/news-3.jpg" alt="" />
//                       <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
//                       <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
//                     </div>

//                     <div className="post-item clearfix">
//                       <img src="assets/img/news-4.jpg" alt="" />
//                       <h4><a href="#">Laborum corporis quo dara net para</a></h4>
//                       <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
//                     </div>

//                     <div className="post-item clearfix">
//                       <img src="assets/img/news-5.jpg" alt="" />
//                       <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
//                       <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
//                     </div>

//                   </div>

//                 </div>
//               </div>

//             </div>




//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './Componant/Admin/Dashboard/Dashboard'
import Larout from './Componant/Admin/AdminLayout/Larout'
import Login from './Componant/Admin/Login/Register'
import Register from './Componant/Admin/Login/Register'
import UserDashboard from './Componant/Admin/User Management/UserDashboard'
import "./index.css"
import { Toaster } from 'sonner'
import WhatAppMessage from './Componant/Admin/SendMessage/WhatAppMessage'
import NormalSMSMessage from './Componant/Admin/SendMessage/NormalSMSMessage'
import EmailMessage from './Componant/Admin/SendMessage/EmailMessage'
import Calling from './Componant/Admin/SendMessage/Calling'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Larout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/user-management' element={<UserDashboard />} />
            <Route path='/whatApp-message' element={<WhatAppMessage />} />
            <Route path='/sms-message' element={<NormalSMSMessage />} />
            <Route path='/email-message' element={<EmailMessage />} />
            <Route path='/make-call' element={<Calling />} />
          </Route>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>



        </Routes>

      </BrowserRouter>
      <Toaster position="top-center" richColors  />

    </>
  )
}

