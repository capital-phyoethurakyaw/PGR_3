import { Button, Modal,Dropdown} from 'react-bootstrap/'
import { Component, useState, useEffect } from 'react'
function Modalrs({ isModal, handleModalOff }) {

    useEffect(() => {
        console.log(isModal)
        setShow(isModal);
        // call api or anything

    });
    
  // const { name, photo, owner, phone, fieldfloor,fieldroof,fieldrating } = ground;
  // const onInputChange = e => {
  //   setGround({ ...ground, [e.target.name]: e.target.value });
  // };
    const [show, setShow] = useState(false);
    const handleClose = () => { 
        
        setShow(false); 
        handleModalOff();
    }
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

            <Modal
                show={show}
                onHide={handleModalOff}
                backdrop="static"
                keyboard={false}
            >
                {/* <Modal.Header closeButton> */}
                    {/* <Modal.Title>Modal title</Modal.Title> */}
                {/* </Modal.Header> */}
                <Modal.Body>
                {/* <h2 className="text-center mb-4">Add Ground</h2> */}
                     {/* <form onSubmit={(e) => onSubmit(e)}></form> */}
                     <div className="form-group">
                    <input type="text"  className="form-control form-control-lg" id="name"
                     placeholder="Enter Your Name"
                     name="name"
                    //  value={name}
                    onChange={e => onInputChange(e)}
                     />
                    </div>
                    <div className="form-group">
                    <input type="text"  className="form-control form-control-lg"
                     placeholder="Enter Photo"
                     name="photo"
                    //  value={photo}
                     onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                    <input type="text"  className="form-control form-control-lg"
                     placeholder="Enter Owner Name"
                     name="owner"
                    //  value={owner}
                     onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                    <input type="number"  className="form-control form-control-lg"
                     placeholder="Enter Phone No"
                     name="phone"
                    //  value={phone}
                     onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                    {/* <input type="text"  className="form-control form-control-lg"
                     placeholder="Enter FieldFloor"
                     name="fieldfloor"
                    //  value={fieldfloor}
                     onChange={e => onInputChange(e)}/> */}
                     <Dropdown>
  <Dropdown.Toggle>Enter FieldFloor</Dropdown.Toggle>
  <Dropdown.Menu>
  </Dropdown.Menu>
  </Dropdown>
                    </div>
                     
                    <div className="form-group">
                    <input type="text"  className="form-control form-control-lg"
                     placeholder="Enter FieldRoof"
                     name="fieldroof"
                    //  value={fieldroof}
                     onChange={e => onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                    <input type="text"  className="form-control form-control-lg"
                     placeholder="Enter Field Rating"
                     name="fieldrating"
                    //  value={fieldrating}
                     onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="d-grid gap-2">
                     <Button variant="success" size="lg" onClick={handleModalOff}>
                      Add Ground
                     </Button>
                     </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleModalOff}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modalrs;