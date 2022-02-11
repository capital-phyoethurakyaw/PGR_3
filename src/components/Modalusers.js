import { Button, Modal,Dropdown} from 'react-bootstrap/'
import { useState, useEffect, createRef } from 'react'
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
function Modalusers({ isModal, handleModalOff }) {

  const nameRef=createRef();
  const phoneRef=createRef();
  const teamRef=createRef();
  const commentRef=createRef();
  const handleClick=()=>{
    console.log(nameRef.current.value);
    console.log(phoneRef.current.value);
    console.log(teamRef.current.value);
    console.log(commentRef.current.value);
};
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
                <h2 className="title">Add New User</h2>
              </CardHeader>
              <CardBody>
                  <form>
                  <div class="form-group">
            <label>User Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              ref={nameRef}
            />
          </div>
          <div class="form-group">
            <label >PhoneNo</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPhoneno"
              ref={phoneRef}
            />
          </div>
          <div class="form-group">
            <label >Team Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPhoneno"
              ref={teamRef}
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
              ref={commentRef}
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
                     <Button variant="success" size="lg" onClick={()=>handleClick()}>
                      Add New User
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
export default Modalusers;
