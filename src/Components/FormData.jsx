import React, { useState, useEffect } from "react";

function FormData() {
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
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Load data from localStorage when the component mounts
    useEffect(() => {
        const storedData = localStorage.getItem("personData");
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            setData([]); // Ensure an empty array if no data is found
        }
    }, []);

    // Save data to localStorage whenever `data` changes
    useEffect(() => {
        localStorage.setItem("personData", JSON.stringify(data));
    }, [data]);

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle image file upload
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
    };

    // Submit new person data or update existing one
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            // Update the existing person
            const updatedData = data.map((person) =>
                person.id === editingId ? { ...formData, id: editingId } : person
            );
            setData(updatedData);
            setIsEditing(false);
        } else {
            // Add new person
            const newPerson = { ...formData, id: Date.now() };
            setData([...data, newPerson]);
        }

        // Reset form and state
        setFormData({
            name: "",
            surname: "",
            cellphone: "",
            position: "",
            idNumber: "",
            email: "",
            image: "",
        });
        setEditingId(null);
    };

    // Handle Edit
    const handleEdit = (person) => {
        setFormData(person);
        setIsEditing(true);
        setEditingId(person.id);
    };

    // Handle Delete
    const handleDelete = (id) => {
        const updatedData = data.filter((person) => person.id !== id);
        setData(updatedData);
    };

    // Filter persons based on name and position
    const filteredData = data.filter(
        (person) =>
            person.name.toLowerCase().includes(filterText.toLowerCase()) &&
            person.position.toLowerCase().includes(filterPosition.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Enter Employee</h2>

            <div className="myforms">
                {/* Form */}
                <form onSubmit={handleSubmit} className="mb-5">
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

                    <button type="submit" className="btn btn-dark mt-3">
                        {isEditing ? "Update" : "Save"}
                    </button>
                </form>

                {/* Filter */}
                <h3>Filter</h3>
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

                {/* Display Cards */}
                <div className="row mt-5">
                    {!isEditing &&
                        filteredData.map((person) => (
                            <div className="col-md-4" key={person.id}>
                                <div className="card">
                                    <img src={person.image} className="card-img-top" alt={person.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {person.name} {person.surname}
                                        </h5>
                                        <p className="card-text">Position: {person.position}</p>
                                        <p className="card-text">Cellphone: {person.cellphone}</p>
                                        <p className="card-text">Email: {person.email}</p>
                                        <button className="btn btn-primary me-2" onClick={() => handleEdit(person)}>
                                            Edit
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
        </div>
    );
}

export default FormData;
