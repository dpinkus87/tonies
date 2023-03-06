import React from 'react';
import { useLocation, useNavigate } from "react-router-dom"

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <footer className=''>
            <div className=''>
                {location.pathname !== '/' && (
                    <button
                        className='btn btn-dark mb-3'
                        onClick={() => navigate(-1)}
                        >
                            $larr; Go Back
                        </button>
                )}
                <h4>&copy; {new Date().getFullYear()} - RentTonies</h4>
            </div>
        </footer>
    );
};

export default Footer;