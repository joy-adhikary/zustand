'use client';
import React from 'react';
import useCourseStore from "@/store/courseStore";

const ShowCourse = () => {
    const courses = useCourseStore((state) => state.courses);

    return (
        <div>
            <h1>Show Course Details</h1>
            <h2 className='mt-6'>Available Courses</h2>
            <ul className='mt-4'>
                {courses.map((course) => (
                    <li key={course.id} className='mb-3'>
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                        <p>Duration: {course.duration}</p>
                        <p>Price: ${course.price}</p>
                        <p>Status: {course.status}</p>
                        <p>Course ID: {course.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default ShowCourse;