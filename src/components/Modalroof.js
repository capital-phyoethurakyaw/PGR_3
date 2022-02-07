import { Button, Modal,Dropdown} from 'react-bootstrap/'
import { useState, useEffect } from 'react'
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
function Modalroof({ isModal, handleModalOff }) {
    useEffect(() => {
        console.log(isModal)
        setShow(isModal);
    });
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <Modal
                show={show}
                onHide={handleModalOff}
                backdrop="static"
                keyboard={false}
            >
                {/* <Modal.Body>
                <h2 className="title">Add New User</h2> */}
                {/* <div className="content"> */}
                <Modal.Body>
                {/* <div className="content"> */}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h2 className="title">Add New FieldRoof</h2>
              </CardHeader>
              <CardBody>
                  <form>
                  <div class="form-group">
            <label>Roof Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
            />
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
            <div className="d-grid gap-2">
                     <Button variant="success" size="lg" onClick={handleModalOff}>
                      Add New FieldRoof
                     </Button>
            </div>
                  </form>
                  </CardBody>
                  </Card>
                  </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Modalroof;
