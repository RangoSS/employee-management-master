import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons if not already

export default function Header() {
    // State to manage the search filter
    const [filter, setFilter] = useState('');

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent nav-sec">
            <div className="container-fluid">
                <i className="bi bi-justify-left fs-4 navbar-brand"></i>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <form className="d-flex h-form" role="search" style={{ marginLeft: '50%' }}>
                    <input
                        className="form-control me-2"
                        type="search"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)} // Corrected onChange
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div>
                    <a href="login" class="btn btn-outline-dark mb-2">Todo List</a>
                </div>
            </div>
        </nav>
    );
}
