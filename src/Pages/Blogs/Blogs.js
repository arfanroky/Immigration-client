import React from 'react';

const Blogs = () => {
    return (
        <div className='container pt-5'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3">
                <div className="col my-3">
                    <h3>Difference between authentication and authorization?</h3>
                    <p>
                        Authentication is the process of verifying the user is the right person.
                        Authorization is the process of verifying user files data that user has access to.
                    </p>
                </div>
                <div className="col border my-3">
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. </p>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. </p>
                </div>
                <div className="col  my-3">
                    <h3>What other services does firebase provide other than authentication</h3>
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
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;