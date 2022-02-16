import React, { useState, useEffect, Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ModalBox from "../components/Modal";
import Modalusers from "components/Modalusers";
import { modalAction } from "Store/Action"
import { useSelector, useDispatch } from "react-redux";
const AddNewUser = () => {
  const { isModal } = useSelector((state) => state.modalReducer);
  const { user_data } = useSelector((state) => state.fielduserReducer);
  console.log(user_data);
//   const contacts =useSelector(state => state);
//     console.log(contacts);
  const dispatch = useDispatch();
  const handleClose = () => {
      dispatch(modalAction("IS_MODAL", false));
  };
  
 const user=[{
   UserName:user_data.UserName,PhoneNo:user_data.PhoneNo,TeamName:user_data.TeamName,IsBlackList:user_data.IsBlackList,Comment:user_data.Comment,IsDelete:user_data.IsDelete
 }];
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
        <CardHeader>User Information</CardHeader>
        <ModalBox
            Ismodal={isModal}
            handleClose={handleClose}
       />
        <Modalusers isModal={show} handleModalOff={handleModalOff} />
        <CardBody>
        <div class="col-md-12 bg-light text-right">
                                    < button type="button" class="btn btn-outline-info  text-right" onClick={ handleShow}>Add User</button>
                                </div>
                                <table class="table border shadow">
                                      <thead class="thead-dark">
                                          <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">UserName</th>
                                              <th scope="col">PhoneNo</th>
                                              <th scope="col">TeamName</th>
                                              <th scope="col">IsBlackList</th>
                                              <th scope="col">Comment</th>
                                              <th scope="col">IsDelete</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {user.map((user, index) => (
                                              <tr>
                                                  <th scope="row">{index + 1}</th>
                                                  <td>{user.UserName}</td>
                                                  <td>{user.PhoneNo}</td>
                                                  <td>{user.TeamName}</td>
                                                  <td>{user.IsBlackList}</td>
                                                  <td>{user.Comment}</td>
                                                  <td>{user.IsDelete}</td>
                                              </tr>
                                          ))}
                                      </tbody>
                                  </table>
        </CardBody>
        </Card>
        </Col>
        </Row>
        </div>
    </>

);
}
export default AddNewUser;

