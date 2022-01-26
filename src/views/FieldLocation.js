import React, { useState, useEffect, Component } from "react";
// import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ModalBox from "../components/Modal";
import Modalrs from "../components/Modalrs";

import { modalAction } from "Store/Action"
import { useSelector, useDispatch } from "react-redux";
// import AddUser from "components/users/AddUser";
// import { log } from "npmlog";
const FieldLocation = () => {
    const { isModal } = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(modalAction("IS_MODAL", false));
    };
    const ground = [{
        Name: "12323", Photo: "1232", Owner: "", PhoneNo: "", FieldLocation: "12321",
        FieldFloor: "123", FieldRoof: "123232", FieldRating: "*****"
    }, { Name: "12323", Photo: "1232", Owner: "", PhoneNo: "", FieldLocation: "12321", FieldFloor: "123", FieldRoof: "123232", FieldRating: "*****" }];

    const addUser = ()=> {
        dispatch(modalAction("IS_MODAL", true));
    } 
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleModalOff = () => setShow(false);
  
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>Location Maps</CardHeader>
                            <ModalBox
                                Ismodal={isModal}
                                handleClose={handleClose}
                            />
                            <Modalrs isModal={show} handleModalOff={handleModalOff} />
                            <CardBody>
                                <div
                                    id="map"
                                    className="map"
                                    style={{ position: "relative", overflow: "hidden" }}
                                >
                                    <div class="col-md-12 bg-light text-right">
                                        < button type="button" class="btn btn-outline-info" onClick={ addUser}>Add User</button>
                                    </div>

                                    <div class="col-md-12 bg-light text-right">
                                        < button type="button" class="btn btn-outline-info" onClick={ handleShow}>Add Userrs</button>
                                    </div>
                                    {/* <Link class="btn btn-outline-info  text-right" 
                   onClick={routeChange}
                  >
                    Add User 1
                  </Link> */}
                                    <table class="table border shadow">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Photo</th>
                                                <th scope="col">Owner</th>
                                                <th scope="col">PhoneNo</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">FieldFloor</th>
                                                <th scope="col">FieldRoof</th>
                                                <th scope="col">FieldRating</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ground.map((ground, index) => (
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{ground.Name}</td>
                                                    <td>{ground.Photo}</td>
                                                    <td>{ground.Owner}</td>
                                                    <td>{ground.PhoneNo}</td>
                                                    <td>{ground.Location}</td>
                                                    <td>{ground.FieldFloor}</td>
                                                    <td>{ground.FieldRoof}</td>
                                                    <td>{ground.FieldRating}</td>

                                                    <td>
                                                        <Link class="btn btn-primary mr-2"
                                                        // to={`/users/${user.id}`}
                                                        >
                                                            View
                                                        </Link>
                                                        <Link
                                                            class="btn btn-outline-primary mr-2"
                                                        // to={`/users/edit/${user.id}`}
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            class="btn btn-danger"
                                                        //  onClick={() => deleteUser(ground.id)}
                                                        >
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>


                                    {/* <MapWrapper /> */}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>

    );
}

export default FieldLocation;
