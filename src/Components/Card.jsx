import React, { useState } from 'react';
import './../Components/Mystyles/style.css'

const Card = ({ id, item, deleteItem, updateItem }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [name,setName]=useState(item.name);
  const [surname,setSurname]=useState(item.surname);
  const [ idnumber, setIdnumber ]=useState(item.idnumber);
  const [email,setEmail]=useState(item.email);
  const [position,setPosition]=useState(item.position);
  const [contact,setContact]=useState(item.contact);

  const [image, setImage] = useState(item.image);
   
  

  const handleUpdate = () => {
    if (!name || !surname) {
      alert('Title and surname cannot be empty');
      return;
    }

    const updatedItem = {image,name,surname,idnumber,email,position,contact };
    updateItem(id, updatedItem);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      // Optionally check the file type here
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      } else {
        alert('Please upload a valid image file');
      }
    }
  };

  return (
    
//updating cards
    <div className="col-md-4 mb-4">
      <div className="card">
        {isEditing ? (
          <div className="card-body">
             <input
              type="text"
              className="form-control mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              aria-label="Title"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter surname"
              aria-label="Title"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={idnumber}
              onChange={(e) => setIdnumber(e.target.value)}
              placeholder="Enter id"
              aria-label="Title"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              aria-label="Title"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Enter Position"
              aria-label="Title"
            />
            <input
              type="text"
              className="form-control mb-2"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter contact"
              aria-label="Title"
            />
            
            <input
              type="file"
              className="form-control mb-2"
              accept="image/*"
              onChange={handleImageChange}
              aria-label="Upload Image"
            />
            <button onClick={handleUpdate} className="btn btn-success mb-2 ">
              Save
            </button>
          </div>
        ) : (

          //this is the card body where you gonna display all info
          <div className="card-body emplo">
            <img src={image} alt="" className="img-fluid rounded-top" />
            <h5 className="card-title mt-2"><span>Name:</span> {name}</h5>
            <p className="card-text"><span className='c-stye'>Surnaname:</span> {surname}</p>
            <p className="card-text"><span className='c-stye'>Id Number:</span>  {idnumber}</p>
            <p className="card-text"><span className='c-stye'>Email:</span> {email}</p>
            <p className="card-text"><span className='c-stye'>Position:</span> {position}</p>
            <p className="card-text"><span className='c-stye'>Contact:</span>  {contact}</p>
          </div>
        )}
        <div className="card-footer">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn btn-warning mr-2 me-4"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button onClick={() => deleteItem(id)} className="btn btn-danger ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
