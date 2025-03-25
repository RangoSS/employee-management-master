
import React from 'react'
import Header from '../src/Components/header'
import Sidebar from '../src/Components/Sidebar'
import Home_intro from '../src/Components/Home_intro'
import Title from '../src/Components/Title';




const Home = () => {
    return (
        <div>
            {/* i used two colums to display sidebar and navba   */}
            <div className="container-fluid home min-vh-100">
                <div className="row">
                    <div className="col-2 bg-white min-vh-100">
                        <Sidebar />
                    </div>

                    {/*add top bar ,all data will be displayed here*/}
                    <div className="col">
                        <Header />
                        <Title subTitle='Our Program' title='what we offer' />
                        <Home_intro />
                    </div>



                </div>

            </div>



        </div >



    )
}

export default Home

