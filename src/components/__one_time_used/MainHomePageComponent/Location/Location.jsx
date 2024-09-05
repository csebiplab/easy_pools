import React from 'react';

const Location = () => {
    return (
        <div className='container'>
            <iframe className='w-full h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.7015358437648!2d-79.4844656228361!3d43.86201453889882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2968ab14ffe9%3A0x44b4c761886b31cb!2sEasy%20pools!5e0!3m2!1sen!2sbd!4v1725543928949!5m2!1sen!2sbd" width="1350" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Location;