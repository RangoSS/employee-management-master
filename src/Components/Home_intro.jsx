import React from 'react'

const Home_intro = () => {
    return (
        <div className="px-3 intros">

            <div className="row g-3 my-2">
                <div className="col-md-3">
                    <div className="p-1 bg-white shadow-sm d-flex justify-content-around align-item-center rounded">
                        <div>
                            <h3 className='fs-3'>230</h3>
                            <p className='fs-5'>Product</p>
                        </div>
                        <i className='bi bi-cart-plus p-3 fs-1'></i>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-1 bg-white shadow-sm d-flex justify-content-around align-item-center rounded">
                        <div>
                            <h3 className='fs-3'>2450</h3>
                            <p className='fs-5'>Sales</p>
                        </div>
                        <i className='bi bi-cash-coin p-3 fs-1'></i>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-1 bg-white shadow-sm d-flex justify-content-around align-item-center rounded">
                        <div>
                            <h3 className='fs-3'>220</h3>
                            <p className='fs-5'>Delivery</p>
                        </div>
                        <i className='bi bi-truck p-3 fs-1'></i>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-1 bg-white shadow-sm d-flex justify-content-around align-item-center rounded">
                        <div>
                            <h3 className='fs-3'>220</h3>
                            <p className='fs-5'>Increse</p>
                        </div>
                        <i className='bi bi-bar-chart-line p-3 fs-1'></i>
                    </div>
                </div>

            </div>

            {/*inserting tabble here*/}
            <div>
                <h2 className='headings mt-4 mb-4 fs-2 fw-bold'>Recent users</h2>
            </div>
            <table class="table rounded">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <a href="employee" class="btn btn-dark">Add Employee</a>
            </div>
        </div>

    )
}

export default Home_intro
