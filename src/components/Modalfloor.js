import { Button, Modal,Dropdown} from 'react-bootstrap/'
import { useState, useEffect,createRef } from 'react'
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
function Modalfloor({ isModal, handleModalOff}) {
  const [FloorName, setName] = useState("");
  const [Comment, setComment] = useState("");
  const [IsDelete, setCheck] = useState("");
  const dispatch =  useDispatch();
  const { floor_data } = useSelector((state) => state.fieldfloorReducer);
  

    const handleClick=()=>{
      dispatch({ type: "Floor_KEY", payload: data });
      console.log(floor_data);
      // console.log(data);
    };
    useEffect(() => {
        console.log(isModal)
        // console.log(nameRef.current.value)
        setShow(isModal);
    });
    const data = {
      FloorName,
      Comment,
      IsDelete
  };
    const handleSubmitEvent = (e) => {
      e.preventDefault();
    }
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
              <form onSubmit = { handleSubmitEvent } >
                  <div class="form-group">
            <label>Floor Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              // ref={nameRef}
              // onChange={(event)=>changeText(event)}
              onChange = {
                (e) => setName(e.target.value) }
            />
          </div>
          <div class="form-group">
          <label>Comment</label>
            <input
              type="text"
              class="form-control"
              onChange = {
                (e) => setComment(e.target.value) }
              // ref={commentRef}
              // onChange={e => onInputChange(e)}
            />
            </div>
            <div class="form-group">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              onChange={(e)=> setCheck(e.target.value)}
              // ref={checkRef}
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
                    onClick={handleClick}
                    >
                      Add New FieldFloor
                    </Button>
            </div>
            <div className="d-grid gap-2">
              <Button size="lg" onClick={handleModalOff}>
                Close
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


