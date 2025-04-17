// import { useEffect, useState } from "react"
// import axiosInstance from "../../../apiHander/apiHander"
// import Config from "../../../Config/Config"
// // import "./UserDashboard.css"
// import { Toaster, toast } from 'sonner'
// import { showErrorMsg, showSuccessMsg } from "../../../utils/ShowMessages"


// export default function UserDashboard() {

//     const [name, setName] = useState()
//     const [lname, setLName] = useState()
//     const [email, setEmail] = useState()
//     const [mobile, setMobile] = useState()
//     const [password, setPassword] = useState()
//     const [whatAppNo, setWhatAppNo] = useState()

//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://cdn.jsdelivr.net/npm/simple-datatables@latest";
//         script.onload = () => {
//             const dataTable = new window.simpleDatatables.DataTable(".datatable");
//         };
//         document.body.appendChild(script);
//     }, []);


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axiosInstance.post(
//                 Config.END_POINT_LIST['REGITER_USER'], 
//                 { name, lname, email, mobile, whatAppNo, password }
//             );

//             console.log("User Registered:", response.data);
//             if(response.data.success){
//                 showSuccessMsg("User Register Successfully")
//             }
//         } catch (error) {
//             console.error("Registration Error:", error.response?.data || error.message);
//             showErrorMsg(error.response?.data.message )
//         }
//     };


//     return (
//         <>
//             <div className="pagetitle">
//                 <h1>User Management</h1>
//                 <nav>
//                     <ol className="breadcrumb">
//                         <li className="breadcrumb-item">
//                             <a href="index.html">Home</a>
//                         </li>
//                         <li className="breadcrumb-item active">User Dashboard</li>
//                     </ol>
//                 </nav>
//             </div>

//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="d-flex mb-3">
//                         <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#basicModal"><i className="bi bi-plus fs-5 me-1"></i> Add User</button>
//                         <button type="button" className="btn btn-primary ms-auto me-2"><i className="bi bi-download fs-5 me-1"></i> Import</button>
//                         <button type="button" className="btn btn-primary "><i className="bi bi-upload fs-5 me-1"></i> Export</button>

//                     </div>


//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">All Users</h5>


//                             <table className="table datatable">
//                                 <thead>
//                                     <tr>
//                                         <th><b>Name</b></th>
//                                         <th>Ext.</th>
//                                         <th>City</th>
//                                         <th data-type="date" data-format="YYYY/DD/MM">Start Date</th>
//                                         <th>Completion</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>Daryl Ayers</td>
//                                         <td>8276</td>
//                                         <td>Barchi</td>
//                                         <td>2012/12/11</td>
//                                         <td>88%</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Kyra Moses</td>
//                                         <td>3796</td>
//                                         <td>Quenast</td>
//                                         <td>1998/07/07</td>
//                                         <td>68%</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Grace Bishop</td>
//                                         <td>8340</td>
//                                         <td>Rodez</td>
//                                         <td>2012/02/10</td>
//                                         <td>4%</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Haviva Hernandez</td>
//                                         <td>8136</td>
//                                         <td>Suwałki</td>
//                                         <td>2000/01/30</td> {/* Format correction */}
//                                         <td>16%</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Alisa Horn</td>
//                                         <td>9853</td>
//                                         <td>Ucluelet</td>
//                                         <td>2007/01/11</td>
//                                         <td>39%</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Zelenia Roman</td>
//                                         <td>7516</td>
//                                         <td>Redwater</td>
//                                         <td>2012/03/03</td>
//                                         <td>31%</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>



//                 </div>
//             </div>

//             <div className="modal fade" id="basicModal" tabindex="-1">
//                 <div className="modal-dialog modal-md">
//                     <div className="modal-content">
//                         <div className="modal-header bg-blue-100 text-blue-900 fs-2">
//                             <h5 className="modal-title">Add User</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <form className=" g-3" onSubmit={handleSubmit}>
//                             <div className="modal-body row">
//                                 <div className="col-md-6 col-12">
//                                     <label for="validationDefault01" className="form-label">First name <span className='text-danger'>*</span></label>
//                                     <input type="text" className="form-control" id="validationDefault01" required placeholder='Enter User Name' onChange={(e) => setName(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6 col-12">
//                                     <label for="validationDefault02" className="form-label">Last name <span className='text-danger'>*</span></label>
//                                     <input type="text" className="form-control" id="validationDefault02" placeholder='User Last Name' required onChange={(e) => setLName(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6 col-12">
//                                     <label for="validationDefaultUsername" className="form-label">Email <span className='text-danger'>*</span></label>
//                                     <div className="input-group">
//                                         {/* <span className="input-group-text" id="inputGroupPrepend2">@</span> */}
//                                         <input type="email" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6 col-12">
//                                     <label for="validationDefaultUserPassword" className="form-label">Password <span className='text-danger'>*</span></label>
//                                     <div className="input-group">
//                                         {/* <span className="input-group-text" id="inputGroupPrepend2">@</span> */}
//                                         <input type="password" className="form-control" id="validationDefaultUserPassword" aria-describedby="inputGroupPrepend2" required onChange={(e) => setPassword(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault03" className="form-label">Mobile Number  <span className='text-danger'>*</span></label>
//                                     <input type="number" className="form-control" id="validationDefault03" required onChange={(e) => setMobile(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault03" className="form-label">WhatApp Number <span>(optional)</span> </label>
//                                     <input type="number" className="form-control" id="validationDefault03" onChange={(e) => setWhatAppNo(e.target.value)} />
//                                 </div>

//                                 <div className="col-12">
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
//                                         <label className="form-check-label" for="invalidCheck2">
//                                             Agree to terms and conditions
//                                         </label>
//                                     </div>
//                                 </div>

//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>



//         </>
//     )
// }










// import { useEffect, useState } from "react"
// import axiosInstance from "../../../apiHander/apiHander"
// import Config from "../../../Config/Config"
// // import "./UserDashboard.css"
// import { Toaster, toast } from 'sonner'
// import { showErrorMsg, showSuccessMsg } from "../../../utils/ShowMessages"
// import { useNavigate } from "react-router-dom"


// export default function UserDashboard() {

//     const [name, setName] = useState()
//     const [lname, setLName] = useState()
//     const [email, setEmail] = useState()
//     const [mobile, setMobile] = useState()
//     const [password, setPassword] = useState()
//     const [whatAppNo, setWhatAppNo] = useState()
//     const [allUser, setAllUser] = useState()
//     const navigate = useNavigate()

//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://cdn.jsdelivr.net/npm/simple-datatables@latest";
//         script.onload = () => {
//             const dataTable = new window.simpleDatatables.DataTable(".datatable");
//         };
//         document.body.appendChild(script);

//         const fatchData = async () => {
//             try {
//                 const response = await axiosInstance.get(
//                     Config.END_POINT_LIST['GET_ALL_USER']);

//                 console.log("User Registered:", response.data);
//                 setAllUser(response.data.users)

//             } catch (error) {
//                 console.error("Registration Error:", error.response?.data || error.message);
//                 showErrorMsg(error.response?.data.message)
//                 // navigate('/login')
//             }
//         }
//         fatchData()
//     }, []);


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axiosInstance.post(
//                 Config.END_POINT_LIST['REGITER_USER'],
//                 { name, lname, email, mobile, whatAppNo, password }
//             );

//             console.log("User Registered:", response.data);
//             if (response.data.success) {
//                 showSuccessMsg("User Register Successfully")
//             }
//         } catch (error) {
//             console.error("Registration Error:", error.response?.data || error.message);
//             showErrorMsg(error.response?.data.message)
//         }
//     };


//     console.log("kya re kya bol rah ahai ", allUser)

//     return (
//         <>
//             <div className="pagetitle">
//                 <h1>User Management</h1>
//                 <nav>
//                     <ol className="breadcrumb">
//                         <li className="breadcrumb-item">
//                             <a href="index.html">Home</a>
//                         </li>
//                         <li className="breadcrumb-item active">User Dashboard</li>
//                     </ol>
//                 </nav>
//             </div>

//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="d-flex mb-3">
//                         <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#basicModal"><i className="bi bi-plus fs-5 me-1"></i> Add User</button>
//                         <button type="button" className="btn btn-primary ms-auto me-2"><i className="bi bi-download fs-5 me-1"></i> Import</button>
//                         <button type="button" className="btn btn-primary "><i className="bi bi-upload fs-5 me-1"></i> Export</button>

//                     </div>


//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">All Users</h5>


//                             <table className="table datatable">
//                                 <thead>
//                                     <tr>
//                                         <th><b>Name</b></th>
//                                         <th>Email</th>
//                                         <th>Mogile Number</th>
//                                         <th>WhatApp Number</th>
//                                         <th data-type="date" data-format="YYYY/DD/MM">Create At</th>
//                                         <th>Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         allUser ? (
//                                             allUser.map((user, ind) => (
//                                                 <tr>
//                                                     <td>{user.name} {user.lname}</td>
//                                                     <td>{user.email}</td>
//                                                     <td>{user.mobile}</td>
//                                                     <td>{user.whatAppNo}</td>
//                                                     <td>{user.createAt}</td>
//                                                     <td>  <div className="filter">
//                                                         <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
//                                                         <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">

//                                                             <li><a className="dropdown-item" href="#">Today</a></li>
//                                                             <li><a className="dropdown-item" href="#">This Month</a></li>

//                                                         </ul>
//                                                     </div></td>
//                                                 </tr>
//                                             ))
//                                         ) : ""
//                                     }

//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>



//                 </div>
//             </div>

//             <div className="modal fade" id="basicModal" tabindex="-1">
//                 <div className="modal-dialog modal-md">
//                     <div className="modal-content">
//                         <div className="modal-header bg-blue-100 text-blue-900 fs-2">
//                             <h5 className="modal-title">Add User</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <form className=" g-3" onSubmit={handleSubmit}>
//                             <div className="modal-body row">
//                                 <div className="col-md-6 col-12">
//                                     <label for="validationDefault01" className="form-label">First name <span className='text-danger'>*</span></label>
//                                     <input type="text" className="form-control" id="validationDefault01" required placeholder='Enter User Name' onChange={(e) => setName(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6 col-12">
//                                     <label for="validationDefault02" className="form-label">Last name <span className='text-danger'>*</span></label>
//                                     <input type="text" className="form-control" id="validationDefault02" placeholder='User Last Name' required onChange={(e) => setLName(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6 col-12">
//                                     <label for="validationDefaultUsername" className="form-label">Email <span className='text-danger'>*</span></label>
//                                     <div className="input-group">
//                                         {/* <span className="input-group-text" id="inputGroupPrepend2">@</span> */}
//                                         <input type="email" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6 col-12">
//                                     <label for="validationDefaultUserPassword" className="form-label">Password <span className='text-danger'>*</span></label>
//                                     <div className="input-group">
//                                         {/* <span className="input-group-text" id="inputGroupPrepend2">@</span> */}
//                                         <input type="password" className="form-control" id="validationDefaultUserPassword" aria-describedby="inputGroupPrepend2" required onChange={(e) => setPassword(e.target.value)} />
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault03" className="form-label">Mobile Number  <span className='text-danger'>*</span></label>
//                                     <input type="number" className="form-control" id="validationDefault03" required onChange={(e) => setMobile(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label for="validationDefault03" className="form-label">WhatApp Number <span>(optional)</span> </label>
//                                     <input type="number" className="form-control" id="validationDefault03" onChange={(e) => setWhatAppNo(e.target.value)} />
//                                 </div>

//                                 <div className="col-12">
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
//                                         <label className="form-check-label" for="invalidCheck2">
//                                             Agree to terms and conditions
//                                         </label>
//                                     </div>
//                                 </div>

//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>



//         </>
//     )
// }




import { useEffect, useState } from "react"
import axiosInstance from "../../../apiHander/apiHander"
import Config from "../../../Config/Config"
import { showErrorMsg, showSuccessMsg } from "../../../utils/ShowMessages"
import { useNavigate } from "react-router-dom"
import { format } from 'date-fns';
import * as XLSX from "xlsx"


export default function UserDashboard() {
    const [name, setName] = useState()
    const [lname, setLName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState()
    const [whatAppNo, setWhatAppNo] = useState()
    const [getId, setGetId] = useState()
    const [allUser, setAllUser] = useState([])
    const [file, setFile] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(Config.END_POINT_LIST['GET_ALL_USER']);
                setAllUser(response.data.users || []);
            } catch (error) {
                console.error("Fetch Error:", error.response?.data || error.message);
                showErrorMsg(error.response?.data.message || "Something went wrong!")
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (allUser.length > 0) {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/simple-datatables@latest";
            script.onload = () => {
                const table = document.querySelector(".datatable");
                if (table) {
                    new window.simpleDatatables.DataTable(table);
                }
            };
            document.body.appendChild(script);
        }
    }, [allUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post(
                Config.END_POINT_LIST['REGITER_USER'],
                { name, lname, email, mobile, whatAppNo, password }
            );

            if (response.data.success) {
                showSuccessMsg("User Registered Successfully");
                // Re-fetch users
                const updatedUsers = await axiosInstance.get(Config.END_POINT_LIST['GET_ALL_USER']);
                // setAllUser(updatedUsers.data.users || []);
                setAllUser(prevState => [
                    ...prevState,
                    response.data.user  // assuming response contains the new user
                ]);


            }
        } catch (error) {
            showErrorMsg(error.response?.data.message || "Registration failed");
        }
    };

    const handleEdit = (id) => {
        // debugger
        setGetId(id)
        try {
            const user = allUser.find(user => user._id === id);

            if (user) {
                setName(user.name)
                setLName(user.lname)
                setEmail(user.email)
                setMobile(user.mobile)
                setWhatAppNo(user.whatAppNo)
            }


        } catch (error) {
            console.log(error);
        }

    }



    console.log("Kya bhai Id Kya hai yrr  mujhe Id chahiye hai edit karne ke liye fir backend me data deduga na yrr", getId)


    const handleEditblogSubmit = async (e) => {

        e.preventDefault();
        try {


            const response = await axiosInstance.put(`${Config.END_POINT_LIST["UPDATE_USER"]}/${getId}`, { name, lname, email, mobile, whatAppNo }, { withCredentials: true })

            if (response.data.success) {
                showSuccessMsg(response.data.message)
                // setAllBlogs((prevState) => prevState.filter((contactDetails) => contactDetails._id !== getId));

                setAllUser((prevState) =>
                    prevState.map((user) =>
                        user._id === getId
                            ? { ...user, name, lname, email, mobile, whatAppNo }
                            : user
                    )
                );


            }
            else {
                showErrorMsg(response.data.message)
            }
        } catch (error) {
            showErrorMsg(error.response.data?.message);

        }
    }
    // Example for exporting to CSV
    const handleExport = () => {
        const ws = XLSX.utils.json_to_sheet(allUser);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "User");
        XLSX.writeFile(wb, "user.xlsx");
    };

    const handleDelete = async (id) => {
        // debugger
        try {


            const response = await axiosInstance.delete(`${Config.END_POINT_LIST["DELETE_USER"]}/${id}`, { withCredentials: true })

            if (response.data.success) {
                showSuccessMsg(response.data.message)
                setAllUser((prevState) => prevState.filter((contactDetails) => contactDetails._id !== id));



            }
            else {
                showErrorMsg(response.data.message)
            }
        } catch (error) {
            showErrorMsg(error.response.data?.message);

        }

    }

    const handleExcelFile = async (e) => {
        e.preventDefault(); // Don't forget this on form submit
      
        const formData = new FormData();
        formData.append("file", file); // 'file' is the name of the field for multer
      
        try {
          const response = await axiosInstance.post(
            Config.END_POINT_LIST["UPLOAD_BULK_EXCEL_FILE"],
            formData,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
      
          if (response.data.success) {
            showSuccessMsg(response.data.message);
            window.location.reload()
          } else {
            showErrorMsg(response.data.message);
          }
        } catch (error) {
          showErrorMsg(error.response?.data?.message || "Upload failed!");
        }
      };
      


    return (
        <>
            <div className="pagetitle">
                <h1>User Management</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active">User Dashboard</li>
                    </ol>
                </nav>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex mb-3">
                        <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#basicModal">
                            <i className="bi bi-plus fs-5 me-1"></i> Add User
                        </button>
                        <button type="button" className="btn btn-primary ms-auto me-2" data-bs-toggle="modal" data-bs-target="#basicModal2">
                            <i className="bi bi-download fs-5 me-1"></i> Import
                        </button>
                        <button type="button" className="btn btn-primary">
                            <i className="bi bi-upload fs-5 me-1" onClick={handleExport}></i> Export
                        </button>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">All Users</h5>

                            <table className="table datatable">
                                <thead>
                                    <tr>
                                        <th><b>Name</b></th>
                                        <th>Email</th>
                                        <th>Mobile Number</th>
                                        <th>WhatsApp Number</th>
                                        <th data-type="date" data-format="YYYY/DD/MM">Created At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allUser.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.name} {user.lname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.mobile}</td>
                                            <td>{user.whatAppNo}</td>
                                            <td>{user.createdAt ? format(new Date(user.createdAt), 'PPP') : 'N/A'}</td>
                                            <td>
                                                <div className="filter">
                                                    <a className="icon" href="#" data-bs-toggle="dropdown">
                                                        <i className="bi bi-three-dots"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                        <li><a className="dropdown-item" href="#" onClick={() => handleEdit(user._id)} data-bs-toggle="modal" data-bs-target="#basicModal1">Edit</a></li>
                                                        <li><a className="dropdown-item" href="# " onClick={() => handleDelete(user._id)}>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="basicModal" tabIndex="-1">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header bg-blue-100 text-blue-900 fs-2">
                            <h5 className="modal-title">Add User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="g-3" onSubmit={handleSubmit}>
                            <div className="modal-body row">
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefault01" className="form-label">First name <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" id="validationDefault01" required placeholder='Enter User Name' onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefault02" className="form-label">Last name <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" id="validationDefault02" placeholder='User Last Name' required onChange={(e) => setLName(e.target.value)} />
                                </div>
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Email <span className='text-danger'>*</span></label>
                                    <input type="email" className="form-control" id="validationDefaultUsername" required placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefaultUserPassword" className="form-label">Password <span className='text-danger'>*</span></label>
                                    <input type="password" className="form-control" id="validationDefaultUserPassword" required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefault03" className="form-label">Mobile Number <span className='text-danger'>*</span></label>
                                    <input type="number" className="form-control" id="validationDefault03" required onChange={(e) => setMobile(e.target.value)} />
                                </div>
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefault04" className="form-label">WhatsApp Number <span>(optional)</span></label>
                                    <input type="number" className="form-control" id="validationDefault04" onChange={(e) => setWhatAppNo(e.target.value)} />
                                </div>

                                <div className="col-12 mb-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Edit karna hai yrr  */}
            <div className="modal fade" id="basicModal1" tabIndex="-1">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header bg-blue-100 text-blue-900 fs-2">
                            <h5 className="modal-title">Edit User Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="g-3" onSubmit={handleEditblogSubmit}>
                            <div className="modal-body row">
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefault01" className="form-label">First name <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" id="validationDefault01" required placeholder='Enter User Name' onChange={(e) => setName(e.target.value)} value={name} />
                                </div>
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefault02" className="form-label">Last name <span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" id="validationDefault02" placeholder='User Last Name' required onChange={(e) => setLName(e.target.value)} value={lname} />
                                </div>
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Email <span className='text-danger'>*</span></label>
                                    <input type="email" className="form-control" id="validationDefaultUsername" required placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>

                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefault03" className="form-label">Mobile Number <span className='text-danger'>*</span></label>
                                    <input type="number" className="form-control" id="validationDefault03" required onChange={(e) => setMobile(e.target.value)} value={mobile} />
                                </div>
                                <div className="col-md-6 col-12 mb-2">
                                    <label htmlFor="validationDefault04" className="form-label">WhatsApp Number <span>(optional)</span></label>
                                    <input type="number" className="form-control" id="validationDefault04" onChange={(e) => setWhatAppNo(e.target.value)} value={whatAppNo} />
                                </div>

                                <div className="col-12 mb-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" >Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bulk User Add  karna hai  */}
            <div className="modal fade" id="basicModal2" tabIndex="-1">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content border-0 shadow-lg">
                        {/* Modal Header */}
                        <div className="modal-header bg-blue-100 text-blue-900  py-3 px-4">
                            <h5 className="modal-title fw-semibold">
                                <i class="bi bi-file-earmark-excel-fill"></i> Upload Bulk Users (Excel)
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleExcelFile} >
                            <div className="modal-body px-4 py-4">
                                {/* Upload Input */}
                                <div className="mb-3">
                                    <label htmlFor="excelFile" className="form-label fw-bold">
                                        Upload Excel File <span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="excelFile"
                                            accept=".xls, .xlsx"
                                            required
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </div>
                                    <div className="form-text text-muted">
                                        Only .xls and .xlsx formats are allowed.
                                    </div>
                                    {file && (
                                        <div className="mt-2 text-success">
                                            ✅ Selected: <strong>{file.name}</strong>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="modal-footer px-4 py-3 bg-light border-0">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    <i class="bi bi-cloud-arrow-up"></i> Upload File
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}



// import { useEffect, useState } from "react";
// import axiosInstance from "../../../apiHander/apiHander";
// import Config from "../../../Config/Config";
// import { Toaster, toast } from 'sonner';
// import { showErrorMsg, showSuccessMsg } from "../../../utils/ShowMessages";
// import { useNavigate } from "react-router-dom";

// export default function UserDashboard() {

//     const [name, setName] = useState("");
//     const [lname, setLName] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [password, setPassword] = useState("");
//     const [whatAppNo, setWhatAppNo] = useState("");
//     const [allUser, setAllUser] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://cdn.jsdelivr.net/npm/simple-datatables@latest";
//         script.onload = () => {
//             new window.simpleDatatables.DataTable(".datatable");
//         };
//         document.body.appendChild(script);

//         const fetchData = async () => {
//             try {
//                 const response = await axiosInstance.get(Config.END_POINT_LIST['GET_ALL_USER']);
//                 setAllUser(response.data.users);
//             } catch (error) {
//                 showErrorMsg(error.response?.data.message || "Failed to fetch users.");
//                 console.error("Fetch Error:", error);
//             }
//         }

//         fetchData();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axiosInstance.post(
//                 Config.END_POINT_LIST['REGISTER_USER'], // spelling fix
//                 { name, lname, email, mobile, whatAppNo, password }
//             );

//             if (response.data.success) {
//                 showSuccessMsg("User Registered Successfully");
//                 // Optionally: Refresh list
//                 setAllUser(prev => [...prev, response.data.newUser]);
//             }
//         } catch (error) {
//             showErrorMsg(error.response?.data.message || "Registration failed.");
//             console.error("Registration Error:", error);
//         }
//     };

//     const formatDate = (dateStr) => {
//         const date = new Date(dateStr);
//         return date.toLocaleDateString("en-IN", {
//             year: 'numeric', month: 'short', day: 'numeric'
//         });
//     };

//     return (
//         <>
//             <Toaster />
//             <div className="pagetitle">
//                 <h1>User Management</h1>
//                 <nav>
//                     <ol className="breadcrumb">
//                         <li className="breadcrumb-item"><a href="index.html">Home</a></li>
//                         <li className="breadcrumb-item active">User Dashboard</li>
//                     </ol>
//                 </nav>
//             </div>

//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="d-flex mb-3">
//                         <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#basicModal">
//                             <i className="bi bi-plus fs-5 me-1"></i> Add User
//                         </button>
//                         <button type="button" className="btn btn-primary ms-auto me-2">
//                             <i className="bi bi-download fs-5 me-1"></i> Import
//                         </button>
//                         <button type="button" className="btn btn-primary">
//                             <i className="bi bi-upload fs-5 me-1"></i> Export
//                         </button>
//                     </div>

//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">All Users</h5>
//                             <table className="table datatable">
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Email</th>
//                                         <th>Mobile Number</th>
//                                         <th>WhatsApp Number</th>
//                                         <th>Created At</th>
//                                         <th>Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         allUser.map((user, ind) => (
//                                             <tr key={user._id || ind}>
//                                                 <td>{user.name} {user.lname}</td>
//                                                 <td>{user.email}</td>
//                                                 <td>{user.mobile}</td>
//                                                 <td>{user.whatAppNo || "-"}</td>
//                                                 <td>{formatDate(user.createAt)}</td>
//                                                 <td>
//                                                     <div className="filter">
//                                                         <a className="icon" href="#" data-bs-toggle="dropdown">
//                                                             <i className="bi bi-three-dots"></i>
//                                                         </a>
//                                                         <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                                                             <li><a className="dropdown-item" href="#">Edit</a></li>
//                                                             <li><a className="dropdown-item" href="#">Delete</a></li>
//                                                         </ul>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     }
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal */}
//             <div className="modal fade" id="basicModal" tabIndex="-1">
//                 <div className="modal-dialog modal-md">
//                     <div className="modal-content">
//                         <div className="modal-header bg-blue-100 text-blue-900 fs-2">
//                             <h5 className="modal-title">Add User</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <form className="g-3" onSubmit={handleSubmit}>
//                             <div className="modal-body row">
//                                 <div className="col-md-6">
//                                     <label htmlFor="name" className="form-label">First name <span className='text-danger'>*</span></label>
//                                     <input type="text" className="form-control" id="name" required placeholder='Enter User Name' onChange={(e) => setName(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label htmlFor="lname" className="form-label">Last name <span className='text-danger'>*</span></label>
//                                     <input type="text" className="form-control" id="lname" required placeholder='User Last Name' onChange={(e) => setLName(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label htmlFor="email" className="form-label">Email <span className='text-danger'>*</span></label>
//                                     <input type="email" className="form-control" id="email" required placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label htmlFor="password" className="form-label">Password <span className='text-danger'>*</span></label>
//                                     <input type="password" className="form-control" id="password" required onChange={(e) => setPassword(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label htmlFor="mobile" className="form-label">Mobile Number <span className='text-danger'>*</span></label>
//                                     <input type="number" className="form-control" id="mobile" required onChange={(e) => setMobile(e.target.value)} />
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label htmlFor="whatsapp" className="form-label">WhatsApp Number <span>(optional)</span></label>
//                                     <input type="number" className="form-control" id="whatsapp" onChange={(e) => setWhatAppNo(e.target.value)} />
//                                 </div>
//                                 <div className="col-12">
//                                     <div className="form-check">
//                                         <input className="form-check-input" type="checkbox" required id="terms" />
//                                         <label className="form-check-label" htmlFor="terms">
//                                             Agree to terms and conditions
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                 <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
