import React from 'react';

export const Bio = () => {
  return (
    <div className='col-lg-8 mx-2'>
      <div className='pt-5'>
        <p className='card-text'>
          Hi there, I'm a self taught (well mostly self taught) web developer
          from Easton PA. I mostly focus on the MERN stack, but I'm also
          proficient with PHP (in the form of Laravel and Wordpress).
        </p>
        <p className='card-text pt-2'>
          I am also comfortable with Python, Ruby, Bash, git, docker, and SQL
          databases. I have a background in IT and computer repair, which adds
          to my skill sets when it comes to the underlying technology that
          supports the software I build.
        </p>
        <br />
        {/* <p className="bio-text">For fun I enjoy making music and gaming. I also love dogs, and my old man Ben is the best boy.
              <a href="#">
            <img src="/ben_100x100.jpg" className="rounded mx-3" alt="Ben, my dog" />
          </a>
        </p> */}
      </div>
    </div>
  );
};
