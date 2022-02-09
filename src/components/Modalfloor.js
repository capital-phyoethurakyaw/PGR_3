import { Button, Modal,Dropdown} from 'react-bootstrap/'
import { useState, useEffect,createRef } from 'react'
import { Provider } from 'react-redux';
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
function Modalfloor({ isModal, handleModalOff }) {
  const nameRef=createRef();
  const commentRef=createRef();
  const checkRef=createRef();
    const handleClick=()=>{
        console.log(nameRef.current.value);
        console.log(commentRef.current.value);
        console.log(checkRef.current.value);
    };
    useEffect(() => {
        console.log(isModal)
        // console.log(nameRef.current.value)
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
            <Modal.Body>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h2 className="title">Add New FieldFloor</h2>
              </CardHeader>
              <CardBody>
                  <form>
                  <div class="form-group">
            <label>Floor Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              ref={nameRef}
              // onChange={(event)=>changeText(event)}
            />
          </div>
          <div class="form-group">
          <label>Comment</label>
            <input
              type="text"
              class="form-control"
              ref={commentRef}
              // onChange={e => onInputChange(e)}
            />
            </div>
            <div class="form-group">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              ref={checkRef}
              // onChange={e => onInputChange(e)}
            />
            <label>
              Is Delete
            </label>
            </div>
            <div className="d-grid gap-2">
                    <Button 
                     variant="success" size="lg" 
                    //  onChange={(event)=>changeText(event)}
                    onClick={()=>handleClick()}
                    >
                      Add New FieldFloor
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

export default Modalfloor;


