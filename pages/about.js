/* eslint-disable react/no-unescaped-entities */
// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: About page for the app contains information about the project and the author.

import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Graded Unit 2 Application - Cinema Booking App</h1>
      <p className="mb-4">
        For my graded unit assessment, I was assigned the task of planning, developing, and evaluating a project of my choice.
      </p>
      <p className="mb-4">
        This report will outline the planning phase of my graded unit 2 application.
        When I started college at level 6, we had a module on application development. I chose to build a cinema booking app using a drag and drop builder.
        Now, I want to demonstrate how much I've learned in the past two years by going back and building that project from scratch.
      </p>
      <h2 className="text-2xl font-bold mb-2">Project Timeline</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Planning Phase: Deadline - March 6th</li>
        <li>Implementation Phase: Deadline - May 6th</li>
        <li>Evaluation Phase: Deadline - May 29th</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Project Aims</h2>
      <p className="mb-4">
        The overall aim of this project is to create a cinema booking app that is accessible for anyone to use, allowing them to securely book movie tickets online.
        I aim to complete this project on time and thoroughly document my process.
      </p>
      <p className="mb-4">
        Additionally, I plan to develop a database that stores and updates movie information and showtimes, as well as user login details and bookings.
        Furthermore, I aim to implement a feature that I haven't seen in similar apps. I want users of the site to be able to upvote or downvote movies they are interested in seeing.
        This gives users an incentive to interact on the site, even if they are not necessarily looking to book a movie at that moment. I've seen blog comments, but I believe that users are more likely to click a like button or thumbs down.
      </p>
      <p className="mb-4">
        To achieve these goals, I will develop a web application with pages that relate to the project objectives and utilize a suitable database.
      </p>
    </div>
  );
};

export default AboutPage;