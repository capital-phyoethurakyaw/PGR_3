import React, { useState, useEffect, Component } from "react";
// import axios from "axios";
import { Link, useHistory,useParams } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ModalBox from "../components/Modal";
import Modalfloor from "components/Modalfloor";

import { modalAction } from "Store/Action"
import { useSelector, useDispatch } from "react-redux";
function FieldFloor  ()  { 
    const { isModal } = useSelector((state) => state.modalReducer);
    const { floor_data } = useSelector((state) => state.fieldfloorReducer);
    console.log(floor_data);
   
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(modalAction("IS_MODAL", false));
    };

      const floor=[{
          FloorName:"12345",Comment:"dsfdg",IsDelete:"1"
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
                            <CardHeader>FieldFloor</CardHeader> 
                            <ModalBox
                              Ismodal={isModal}
                              handleClose={handleClose}
                            />
                            <Modalfloor isModal={show} handleModalOff={handleModalOff} />
                            <CardBody>  
                            <div class="col-md-12 bg-light text-right">
                                    < button type="button" class="btn btn-outline-info  text-right" onClick={handleShow}>Add FieldFloor</button>
                                </div>
                                <table class="table border shadow">
                                      <thead class="thead-dark">
                                          <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">FloorName</th>
                                              <th scope="col">Comment</th>
                                              <th scope="col">IsDelete</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {floor.map((floor, index) => (
                                              <tr>
                                                  <th scope="row">{index + 1}</th>
                                                  <td>{floor.FloorName}</td>
                                                  <td>{floor.Comment}</td>
                                                  <td>{floor.IsDelete}</td>
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
export default FieldFloor;
