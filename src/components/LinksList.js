import React from 'react';
import { Link } from 'react-router-dom'
export const LinksList = ({ links }) => {
    if (!links.length) {
        return <h2>No links yet</h2>
    }
    
    return (
        <>
            <h2>Your Links</h2>
            <table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Original</th>
                    <th>Shortened</th>
                    <th>Check it out</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link, index) => {
                        return (
                            <tr key={link._id}>
                                <td>{index}</td>
                                <td>{link.from}</td>
                                <td>{link.to}</td>
                                <td>
                                    <Link to={`/detail/${link._id}`}>Check it</Link>
                                </td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>
        </>
    )
}