import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./entrybook.css";
import {
  MDBTable,
  MDBTableHead,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { CSVLink } from "react-csv";

export default function Admin() {
  const [entry, setEntry] = useState([]);
  const [filter, setFilter] = useState("");

  const filteroptions = ["checkin", "checkout", "category"];

  useEffect(() => {
    axios
      .get("/entries")
      .then((res) => setEntry(res.data))
      .catch((e) => console.log(e));
  }, []);

  const handleSort = async (e) => {
    let value = e.target.value;
    setFilter(value);
    return await axios
      .get(`/entries?_filter=${value}&_order=asc`)
      .then((response) => {
        setEntry(response.data);
      });
  };

  return (
    <>
      <MDBContainer>
        <div id="entry">
          <h1>All Entries</h1>
          <CSVLink data={entry} id="csv">
            Download Entries
          </CSVLink>
          <MDBRow>
            <MDBCol>
              <MDBTable value={entry}>
                <MDBTableHead>
                  <tr>
                    <th>ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Guests</th>

                    <th scope="col">Adults</th>
                    <th scope="col">Childrens</th>
                    <th scope="col">Check-in Date</th>
                    <th scope="col">Check-out Date</th>
                    <th scope="col">Room Category</th>
                  </tr>
                </MDBTableHead>
                {entry.length === 0 ? (
                  <MDBTableBody>
                    <tr>
                      <td>No Data Found</td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  entry.map((booking, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{booking.firstName}</td>
                        <td>{booking.lastName}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.email}</td>
                        <td>{booking.guest}</td>
                        <td>{booking.adults}</td>
                        <td>{booking.childrens}</td>
                        <td>{booking.checkin}</td>
                        <td>{booking.checkout}</td>
                        <td>{booking.category}</td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
        </div>
        <MDBRow>
          <MDBCol size="8">
            <h3>Filter By:</h3>
            <select onChange={handleSort} value={filter}>
              <option>Please Select Value</option>
              {filteroptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
