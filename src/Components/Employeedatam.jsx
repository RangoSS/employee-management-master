import React, { useState, useEffect } from "react";


function Employeedatam() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        cellphone: "",
        position: "",
        idNumber: "",
        email: "",
        image: "",
    });
    const [data, setData] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [filterPosition, setFilterPosition] = useState("");

    // Load data from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem("peopleData");
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    // Save data to localStorage whenever `data` changes
    useEffect(() => {
        localStorage.setItem("peopleData", JSON.stringify(data));
    }, [data]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { ...formData, id: Date.now() };
        setData([...data, newEntry]);
        setFormData({
            name: "",
            surname: "",
            cellphone: "",
            position: "",
            idNumber: "",
            email: "",
            image: "",
        });
    };

    const handleDelete = (id) => {
        const updatedData = data.filter((person) => person.id !== id);
        setData(updatedData);
    };

    const handleUpdate = (id) => {
        const updatedName = prompt("Enter new name");
        const updatedPosition = prompt("Enter new position");

        const updatedData = data.map((person) =>
            person.id === id ? { ...person, name: updatedName, position: updatedPosition } : person
        );
        setData(updatedData);
    };

    // Filter data based on name and position
    const filteredData = data.filter(
        (person) =>
            person.name.toLowerCase().includes(filterText.toLowerCase()) &&
            person.position.toLowerCase().includes(filterPosition.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <h2>Person Manager</h2>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                            className="form-control"
                            value={formData.surname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="cellphone"
                            placeholder="Cellphone"
                            className="form-control"
                            value={formData.cellphone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            className="form-control"
                            value={formData.position}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="idNumber"
                            placeholder="ID Number"
                            className="form-control"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-4">
                        <input
                            type="file"
                            accept="image/*"
                            className="form-control"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Save
                </button>
            </form>

            <h3 className="mt-5">Filter</h3>
            <input
                type="text"
                placeholder="Filter by name"
                className="form-control mt-2"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Filter by position"
                className="form-control mt-2"
                value={filterPosition}
                onChange={(e) => setFilterPosition(e.target.value)}
            />

            <div className="row mt-5">
                {filteredData.map((person) => (
                    <div className="col-md-4" key={person.id}>
                        <div className="card">
                            <img src={person.image} className="card-img-top" alt={person.name} />
                            <div className="card-body">
                                <h5 className="card-title">{person.name} {person.surname}</h5>
                                <p className="card-text">Position: {person.position}</p>
                                <p className="card-text">Cellphone: {person.cellphone}</p>
                                <p className="card-text">Email: {person.email}</p>
                                <button className="btn btn-primary" onClick={() => handleUpdate(person.id)}>
                                    Update
                                </button>
                                <button className="btn btn-danger ml-2" onClick={() => handleDelete(person.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Employeedatam;
