import React from 'react';

const services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually and appealing user-friendly web designs.",
    },
    {
        id: 2,
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Developing robust side server-side logic and databases.",
    },
    {
        id: 4,
        title: "FullStack-Development",
        description: "Combining both frontend and backend development skills.",
    },
    {
        id: 5,
        title: "Content Writing",
        description: "Writing content for your business and companies.",
    },
    {
        id: 6,
        title: "Digital Marketing",
        description: "Promote your business with our digital marketing team.",
    }
];

const Services = () => {
  return (
    <div>
        <div id='services'>
            <div className='container'>
                <h2>My Services</h2>
                <div className='services-grid'>
                    {services.map(service => (
                        <div key={service.id} className='service-card'>
                            <div className='service-id'>
                                {service.id}
                            </div>
                            <h3 className='service-title'>
                                {service.title}
                            </h3>
                            <p className='service-description'>{service.description}</p>
                            <a href='#' className='read-more '>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services;
