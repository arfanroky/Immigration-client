import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <>
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="lg"/>
      </>
    );
};

export default Loading;