import React, { useState, useEffect, Component } from "react";
// import axios from "axios";
import { Link, useHistory,useParams } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ModalBox from "../components/Modal";
import Modalrs from "../components/Modalrs";

import { modalAction } from "Store/Action"
import { useSelector, useDispatch } from "react-redux";
function FieldFloor  ()  { 
    return (
        <>
                 <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={12}>
                    <Card>
                            <CardHeader>FieldFloor</CardHeader> 
                            <CardBody>  
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </> 
    );

}
export default FieldFloor;
