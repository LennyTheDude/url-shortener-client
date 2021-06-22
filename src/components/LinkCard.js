import React from 'react';

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Link</h2>
            <p>Your short link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>It leads to: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>It has been clicked <strong>{link.clicks}</strong> times.</p>
            <p>You've created it on <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}