import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <>
        <Spinner className='text-danger' animation="grow" size="lg"/>
      </>
    );
};

export default Loading;