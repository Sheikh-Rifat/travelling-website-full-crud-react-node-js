import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";
import { ToastContainer, toast } from "react-toastify";

const UserBookings = () => {
  const { user } = useFirebase();
  const [bookings, setBookings] = useState([]);
  const [deleteBooking, setDeleteBookings] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/usersBooking")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        setBookings(data);
      });
  }, [deleteBooking]);

  const handleCancel = (id) => {
    // console.log(id);

    fetch(`http://localhost:4000/usersBooking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount === 1) {
          toast.warn("Booking Cancelled");
          setDeleteBookings(data);
        }
      });
  };

  return (
    <div>
      <h2 className="my-5 py-5">
        <span className="text-primary">{user.displayName}</span> , manage your
        Bookings
      </h2>
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
                <th>Duration</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {bookings
              .filter((booking) => booking.email === user.email)
              .map((booking, index) => (
                <tbody key={booking._id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.title}</td>
                    <td>{booking.duration} Days</td>
                    <td>{booking.status}</td>
                    <td>
                      <Button
                        onClick={() => handleCancel(booking._id)}
                        className="btn btn-warning mx-2"
                      >
                        {" "}
                        Cancel{" "}
                      </Button>
                      <ToastContainer />
                    </td>
                  </tr>
                </tbody>
              ))}
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default UserBookings;
