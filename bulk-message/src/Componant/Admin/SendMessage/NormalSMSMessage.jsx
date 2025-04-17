

import { useEffect, useState } from "react"
import axiosInstance from "../../../apiHander/apiHander"
import Config from "../../../Config/Config"
import { showErrorMsg, showSuccessMsg } from "../../../utils/ShowMessages"
import { useNavigate } from "react-router-dom"
import { format } from 'date-fns';
import * as XLSX from "xlsx"


export default function NormalSMSMessage() {
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
                    const dataTable = new window.simpleDatatables.DataTable(table, {
                        columns: [
                            { select: 0, sortable: false } // 👈 ye important hai
                        ]
                    });
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
                    response.data.user  
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
        e.preventDefault(); 

        const formData = new FormData();
        formData.append("file", file); 

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



    //   Send WhatApp Message for selected user 

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [message, setMessage] = useState("");

    const handleSelectUser = (id) => {
        setSelectedUsers((prev) =>
            prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
        );
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedUsers(allUser.map((user) => user._id));
        } else {
            setSelectedUsers([]);
        }
    };

    const handleSendSMSMessage = async () => {
        // debugger
        const numbers = allUser
            .filter((user) => selectedUsers.includes(user._id))
            .map((user) => user.mobile); 
    
        if (!message.trim() || numbers.length === 0) {
            showErrorMsg("Please select users and enter a message.");
            return;
        }
    
        try {
            const response = await axiosInstance.post(
                Config.END_POINT_LIST["SEND_SMS_MESSAGE"],
                { numbers, message },
                { withCredentials: true }
            );
    
            if (response.data.success) {
                showSuccessMsg("SMS sent successfully!");
                setMessage("");
                setSelectedUsers([]);
                document.querySelector("#bulkWhatsAppModal .btn-close")?.click(); // Close modal if exists
            } else {
                showErrorMsg(response.data.message);
            }
        } catch (error) {
            showErrorMsg(error.response?.data?.message || "Failed to send SMS");
        }
    };
    



    return (
        <>
            <div className="pagetitle">
                <h1>SMS Message</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active"> Dashboard</li>
                    </ol>
                </nav>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex mb-3">
                        <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#bulkWhatsAppModal">
                            <i className="bi bi-send-check"></i> Send Message
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
                                        <th onClick={(e) => e.stopPropagation()}>
                                            <input type="checkbox" onChange={handleSelectAll} />
                                        </th>



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
                                        <tr key={user._id}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedUsers.includes(user._id)}
                                                    onChange={() => handleSelectUser(user._id)}
                                                />
                                            </td>
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



            {/* WhatApp Message Send karne hai yrr kar kya raha hai yrr tu message kyo send kiya abhi tak bata chup kyo hai yrr tu */}

            <div className="modal fade" id="bulkWhatsAppModal" tabIndex="-1">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Send SMS Message</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Type your SMS message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={handleSendSMSMessage}
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}


