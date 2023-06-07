import React from 'react';
import './aboutcomp.css';

const AboutComp = () => {
  const developers = [
    {
      name: 'Matthew Gallardo',
      role: 'Web Developer',
      bio: 'Computer Science Student @ Polytechnic University of the Philippines, Lead Web Developer of the Open Source Freedom Wall.',
      image: 'https://res.cloudinary.com/do3op0083/image/upload/v1686041250/349228681_212142265015551_4413326747003317864_n_yn1wcx.jpg',
    },
    {
      name: 'Virgielyn Ordanza',
      role: 'Technical Writer',
      bio: 'Computer Science Student @ Polytechnic University of the Philippines, Lead Technical Writer of the Open Source Freedom Wall',
      image: 'https://res.cloudinary.com/do3op0083/image/upload/v1686037431/340977630_567965098766401_795326951414120827_n_bwfty8.png',
    },
    // Add more developers here as needed
  ];

  return (
    <div className="open-source-freedom-wall">
      <h1>Welcome to the Open Source Freedom Wall</h1>
      <p>
      As a computer science student, you understand the power of open source  and its impact on the tech industry. The Open Source Freedom Wall provides you with an opportunity to share your insights, discoveries, and projects with a community of like-minded individuals.

        Here, you can contribute blog posts that delve into various aspects of  development. Share your learnings from working on open source projects, discuss the latest trends and technologies, or provide tutorials to help others embark on their open source journey.

        This platform encourages collaboration and knowledge sharing. Engage in discussions with fellow computer science students, exchange feedback, and explore different perspectives. Gain inspiration from the experiences of others and spark innovative ideas for your own projects.

        Whether you want to discuss the benefits of open source, showcase your own contributions, or seek advice from the community, the Open Source Freedom Wall is the perfect space for you. Embrace the spirit of open source and make your mark in the ever-evolving world of computer science.

       

      </p>
      <h2>Meet Our Developers</h2>
      <div className="developer-profiles">
        {developers.map((developer, index) => (
          <div className="developer-profile" key={index}>
            <div className="profile-image-container">
              <img src={developer.image} alt={developer.name} className="profile-image" />
              <div className="overlay"></div>
            </div>
            <div className="profile-details">
              <h3>{developer.name}</h3>
              <p className="role">{developer.role}</p>
              <p className="bio">{developer.bio}</p>
            </div>
          </div>
        ))}
        <p>
      Join us on the Open Source Freedom Wall and let your voice be heard in the vibrant community of computer science students passionate about open source development. Together, we can shape the future of technology through collaboration and shared knowledge.
      </p>
      </div>
      
    </div>
  );
};

export default AboutComp;
