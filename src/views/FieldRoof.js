import React, { useState, useEffect, Component } from "react";
// import axios from "axios";
import { Link, useHistory,useParams } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ModalBox from "../components/Modal";
import Modalroof from "components/Modalroof";
import { modalAction } from "Store/Action"
import { useSelector, useDispatch } from "react-redux";
function FieldRoof  ()  { 
const { isModal } = useSelector((state) => state.modalReducer);
    const { roof_data } = useSelector((state) => state.roofReducer);
  console.log(roof_data);
  const dispatch = useDispatch();
  const handleClose = () => {
      dispatch(modalAction("IS_MODAL", false));
  };
    const roof=[{
        // RoofName:"123",Comment:"dsfdg",IsDelete:"1"
        RoofName:roof_data.RoofName,Comment:roof_data.Comment,IsDelete:roof_data.IsDelete
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
                            <CardHeader>FieldRoof</CardHeader> 
                            <ModalBox
                              Ismodal={isModal}
                              handleClose={handleClose}
                           />
                             <Modalroof isModal={show} handleModalOff={handleModalOff} />
                            <CardBody>  
                            <div class="col-md-12 bg-light text-right">
                                    < button type="button" class="btn btn-outline-info  text-right" onClick={ handleShow}>Add FieldRoof</button>
                                </div>
                                <table class="table border shadow">
                                      <thead class="thead-dark">
                                          <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">RoofName</th>
                                              <th scope="col">Comment</th>
                                              <th scope="col">IsDelete</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {roof.map((roof, index) => (
                                              <tr>
                                                  <th scope="row">{index + 1}</th>
                                                  <td>{roof.RoofName}</td>
                                                  <td>{roof.Comment}</td>
                                                  <td>{roof.IsDelete}</td>
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
export default FieldRoof;
