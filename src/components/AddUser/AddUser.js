import React from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
      name: "",
      photo: "",
      owner: "",  
      phone: "",
      location: "",
      fieldfloor: "",
      fieldroof: "",
      rating
    });
    const { name, photo, owner,phone,location,fieldfloor,fieldroof,rating} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/users", user);
        history.push("http://localhost:3000/users/add");
      };
      return (
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A User</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Field Photo"
                  name="photo"
                  value={photo}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Owner Name"
                  name="owner"
                  value={owner}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={phone}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Field Location"
                  name="location"
                  value={location}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Field Floor"
                  name="fieldfloor"
                  value={fieldfloor}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Field Roof"
                  name="fieldroof"
                  value={fieldroof}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <button className="btn btn-primary btn-block">Add User</button>
            </form>
          </div>
        </div>
      );
    };
    
    export default AddUser;