import React from 'react';
import './CustomLink.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});

    return (
        <Link className='link' style={{color: match ? 'crimson' : 'black'} } to={to} {...props}>{children}</Link>
    );
};

export default CustomLink;