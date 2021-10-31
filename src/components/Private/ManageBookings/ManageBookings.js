import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";
import { ToastContainer, toast } from "react-toastify";

const ManageBookings = () => {
  document.title = "Manage Bookings";
  const { user } = useFirebase();
  const [users, setUsers] = useState([]);
  const [singleUserUpdate, setSingleUserUpdate] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/usersBooking")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [singleUserUpdate]);

  const handleApprove = (id) => {
    const status = { status: "approved" };
    // console.log(id);
    const url = `http://localhost:4000/manageUsers/${id}`;
    // console.log(url);
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("User Booking request approved");
          setSingleUserUpdate(data);
        }
      });
  };

  const hanldeCancelApprove = (id) => {
    const status = { status: "pending" };
    // console.log(id);
    const url = `http://localhost:4000/manageUsers/${id}`;
    // console.log(url);
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.warn("User Booking request made pending");
          setSingleUserUpdate(data);
        }
      });
  };
  return (
    <>
      <div className="my-5 py-5">
        <h2 className="my-3">
          Welcome Admin,{" "}
          <span className="text-primary">{user.displayName}</span>{" "}
        </h2>
        <h2>Manage All Users </h2>
      </div>
      <div className="my-5 py-5">
        <Container>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>CheckIn</th>
                <th>Resort Name</th>
                <th>Image</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {users.map((user, index) => (
              <tbody key={user._id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.checkIn}</td>
                  <td>{user.title}</td>
                  <td>
                    <img src={user.image} alt="img" className="img-fluid" />{" "}
                  </td>
                  <td>{user.duration} Days</td>
                  <td>{user.status}</td>
                  <td>
                    {user.status === "pending" ? (
                      <Button
                        className="project-btn"
                        onClick={() => handleApprove(user._id)}
                      >
                        Approve
                      </Button>
                    ) : (
                      <Button onClick={() => hanldeCancelApprove(user._id)}>
                        Make Pending
                      </Button>
                    )}
                    <ToastContainer />
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Container>
      </div>
    </>
  );
};

export default ManageBookings;
