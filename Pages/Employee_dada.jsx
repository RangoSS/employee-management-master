import React from 'react'
import Sidebar from '../src/Components/Sidebar';
import Header from '../src/Components/header';
import Title from '../src/Components/Title';
{/*import Employeedatam from '../src/Components/Employeedatam';*/ }
import FormData from '../src/Components/FormData';


const Employee_dada = () => {
    return (
        <div className='container-fluid home min-vh-100'>
            <div className="row">
                <div className="col-2 bg-white min-vh-100">
                    <Sidebar />
                </div>
                <main className="col">
                    <Header />
                    <Title subTitle='Welcome to our dashboard' title='Employee Registration' />

                    <div className="row">


                        <div>
                            {/* <Employee />  */}
                            {/* <Employee_data_m />*/}
                            {/* <Employeedatam />*/}
                            <FormData />
                            {/* <FormData />*/}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Employee_dada
