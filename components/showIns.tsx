'use client';
import React from 'react';
import useInstructorStore from '@/store/instructorStore';

const ShowIns = () => {
    const instructors = useInstructorStore((state) => state.instructors);

    return (
        <div>
            <h2 className='mt-6'>Available Instructors</h2>
            <ul className='mt-4'>
                {instructors.map((instructor) => (
                    <li key={instructor.id} className='mb-3'>
                        <h3>{instructor.name}</h3>
                        <p>{instructor.description}</p>
                        <p>Instructor ID: {instructor.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default ShowIns;