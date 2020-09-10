import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import Header from './Header';
import Planning from './Planning';
import Design from './Design';
import Development from './Development';
import Testing from './Testing';
import Deployment from './Deployment';
import Maintenance from './Maintenance';

    
class App extends Component {
    
    render() {
            return (
                <div className = "container">

                    <Header />
                    <Container fluid>
                    <Row>
                    
                    <div className = "planning">
                    <Planning />
                    </div>            
                    
                    <div className = "design">
                    <Design />
                    </div>

                    <div className = "development">
                    <Development />
                    </div>

                    <div className = "testing">
                    <Testing />
                    </div>

                    <div className = "deployment">
                    <Deployment />
                    </div>

                    <div className = "maintenance">
                    <Maintenance />
                    </div>
                    
                    </Row>
                    </Container>

                </div>
            )
        }
    }
    
    export default App
    