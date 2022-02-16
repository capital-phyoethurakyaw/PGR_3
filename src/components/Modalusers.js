import { Button, Modal,Dropdown} from 'react-bootstrap/'
import { useState, useEffect, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
function Modalusers({ isModal, handleModalOff }) {
  const [UserName, setName] = useState("");
  const [PhoneNo, setPhoneNO] = useState("");
  const [TeamName, setTeamName] = useState("");
  const [IsBlackList, setBlacklist] = useState("");
  const [Comment, setComment] = useState("");
  const [IsDelete, setCheck] = useState("");
  const { user_data } = useSelector((state) => state.fielduserReducer);
  const dispatch =  useDispatch();
  const handleClick=()=>{
    dispatch({ type: "User_KEY", payload: data });
    console.log(user_data);
};
const data = {
  UserName,
  PhoneNo,
  TeamName,
  IsBlackList,
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
                <h2 className="title">Add New User</h2>
              </CardHeader>
              <CardBody>
                  <form onSubmit = { handleSubmitEvent } >
                  <div class="form-group">
            <label>User Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange = {
                (e) => setName(e.target.value) }
            />
          </div>
          <div class="form-group">
            <label >PhoneNo</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPhoneno"
              onChange = {
                (e) => setPhoneNO(e.target.value) }
            />
          </div>
          <div class="form-group">
            <label >Team Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPhoneno"
              onChange = {
                (e) => setTeamName(e.target.value) }
            />
          </div>
          <div class="form-group">
            <input
              type="checkbox"
              class="form-check-input"
              onChange = {
                (e) => setBlacklist(e.target.value) }
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
            <div className="d-grid gap-2">
                     <Button variant="success" size="lg" onClick={handleClick}>
                      Add New User
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
export default Modalusers;
