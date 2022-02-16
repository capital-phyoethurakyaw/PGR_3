import { Button, Modal,Dropdown} from 'react-bootstrap/'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
function Modalroof({ isModal, handleModalOff }) {
  const [RoofName, setName] = useState("");
  const [Comment, setComment] = useState("");
  const [IsDelete, setCheck] = useState("");
  const { roof_data } = useSelector((state) => state.roofReducer);
  const dispatch =  useDispatch();
  const handleClick=()=>{
    dispatch({ type: "Roof_KEY", payload: data });
    console.log(roof_data);
};
const data = {
  RoofName,
  Comment,
  IsDelete
};
const handleSubmitEvent = (e) => {
  e.preventDefault();
}
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
                  <form onSubmit = { handleSubmitEvent } >
                  <div class="form-group">
            <label>Roof Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
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
            />
            </div>
            <div class="form-group">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              onChange = {
                (e) => setCheck(e.target.value) }
            />
            <label>
              Is Delete
            </label>
            </div>
            {/* <div className="d-grid gap-2">
                     <Button variant="success" size="lg" onClick={handleClick}>
                      Add New FieldRoof
                     </Button>
            </div> */}
                  </form>
                  </CardBody>
                  </Card>
                  </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button 
                     variant="success" size="lg" 
                    //  onChange={(event)=>changeText(event)}
                    onClick={handleClick}
                    >
                      Add New FieldFloor
                    </Button>
                    <Button size="lg" onClick={handleModalOff}>
                Close
              </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Modalroof;
