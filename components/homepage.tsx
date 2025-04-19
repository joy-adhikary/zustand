import React from 'react';
import ShowCourse from './showCourse';
import ShowIns from './showIns';

const Homepage = () => {

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <ShowCourse />
            <ShowIns />
        </div>
    );
}
 
export default Homepage;