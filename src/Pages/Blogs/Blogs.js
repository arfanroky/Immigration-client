import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container pt-5'>
            <h1 className='text-center m-0 p-0'>Blogs</h1>
          <div className='w-100 d-flex justify-content-center align-items-center' style={{minHeight:'60vh'}}>
              
            <Accordion style={{width:"600px"}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authentication and authorization?</Accordion.Header>
                    <Accordion.Body>
                        Authentication is the process of verifying the user is the right person.
                        Authorization is the process of verifying user files data that user has access to.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
                        <br />
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Parse : Open Source Backend Platform;</li>
                            <li>Back4app : Parse Hosting Platform;</li>
                            <li>Kinvey : Mobile Backend as a Service (mBaaS) for the Enterprise</li>
                            <li>Pubnub : Real-time APIs and Global Messaging;</li>
                            <li>
                                Kumulos : App Performance Management;
                            </li>
                            <li>
                                Heroku : Platform as a service backed by Salesforce.
                            </li>
                            <li>
                                NHost : Accelerates development and provides full control;
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </div>

        </div>
    );
};

export default Blogs;