import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const AddNewUser = () => {
    return (
        <>
          <PanelHeader size="sm" />
          <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h2 className="title">Add New User</h2>
              </CardHeader>
              <CardBody>
              {/* <div className="py-4">
        <h1  className="text-center mb-4">Add New User</h1> */}
        <form>
          <div class="form-group">
            <label>User Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
            />
          </div>
          <div class="form-group">
            <label >PhoneNo</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPhoneno"
            />
          </div>
          <div class="form-group">
            <label >Team Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPhoneno"
            />
          </div>
          <div class="form-group">
            <input
              type="checkbox"
              class="form-check-input"
            />
            <label>
              Is BlackList
            </label>
          </div>
          <div class="form-group">
          <label>Comment</label>
            <input
              type="text"
              class="form-control"
            />
            </div>
            <div class="form-group">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label>
              Is Delete
            </label>
            </div>
          <button class="btn btn-primary">
            Add New User
          </button>
        </form>
      {/* </div> */}
              </CardBody>
              </Card>
              </Col>
              </Row>
    </div>
    
        </>
      );
}
export default AddNewUser;

