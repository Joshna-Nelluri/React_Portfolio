import React from 'react';
import employeeMSImage from '../assets/employee-ms.png';
import bookMSImage from '../assets/admin-dashboard.png';
import '../App.css';

const projects = [
    {
        id: 1,
        name: 'JavaScript Tasks',
        technologies: 'JavaScript',
        image: employeeMSImage,
        githubLink: 'https://github.com/Joshna-Nelluri/JavaScript',
    },

    // https://github.com/Joshna-Nelluri/JavaScript.git
    {
        id: 2,
        name: 'HTML_CSS Projects',
        technologies: 'HTML and CSS',
        image: bookMSImage,
        githubLink: 'https://github.com/Joshna-Nelluri/HTML_CSS',
    },
    {
        id: 3,
        name: 'E-Commerece Project',
        technologies: 'React JS',
        image: employeeMSImage,
        githubLink: 'https://github.com/Joshna-Nelluri/React-E-commerceProject',
    },
    {
        id: 4,
        name: "E-Commerce Project",
        technologies: "Redux",
        image: bookMSImage,
        githubLink: "https://github.com/Joshna-Nelluri/Redux_E-commerceProject"
    },
    {
        id: 5,
        name: "Portfolio",
        technologies: "React and CSS",
        image: employeeMSImage,
        githubLink: ""
    }
];

const Projects = () => {
    return (
    
        <div  id='projects'>
            <div className='container '>
                <h2>My Projects</h2>
                <div className='project-grid'>
                    {projects.map(project => (
                        <div key={project.id} className='project-card'>
                            <div className='imgDiv'>
                               <img src={project.image} alt="" />
                            </div>
                            <h3>
                                {project.name}
                            </h3>
                            <p>
                                {project.technologies}
                            </p>
                            <a href={project.githubLink}  target='blank' rel='noopener noreferrer'>
                                Github
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Projects;
