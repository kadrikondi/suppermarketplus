import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';


const About = () => {
  const [isHoveredContainer, setIsHoveredContainer] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    transition: 'box-shadow 0.3s ease',
    boxShadow: isHoveredContainer ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  const sectionStyle = (isHovered) => ({
    padding: '20px',
    backgroundColor: isHovered ? '#e0f7fa' : '#f9f9f9',
    borderRadius: '10px',
    margin: '20px 0',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.2)' : 'none'
  });

  const teamMemberStyle = {
    textAlign: 'center',
    margin: '20px 0'
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%'
  };

  const footerStyle = {
    backgroundColor: '#0077b6',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '20px',
    borderRadius: '0 0 10px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px'
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHoveredContainer(true)}
      onMouseLeave={() => setIsHoveredContainer(false)}
    >
      <header style={headerStyle}>
        <h1>About Us</h1>
      </header>

      {['Welcome', 'Mission', 'History', 'Values', 'Team', 'Contact'].map((section, index) => (
        <section
          key={index}
          style={sectionStyle(hoveredSection === index)}
          onMouseEnter={() => setHoveredSection(index)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h2>{section}</h2>
          <p>{`Welcome to Supermarket Plus ${section.toLowerCase()} section.`}</p>
        </section>
      ))}

      <section
        style={sectionStyle(hoveredSection === 'team')}
        onMouseEnter={() => setHoveredSection('team')}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2>Meet Our Team</h2>
        <Row>
          <Col md={4} style={teamMemberStyle}>
            <Image src="team-member1.jpg" style={imageStyle} />
            <h4>Mr Kondi</h4>
            <p>Founder & CEO</p>
          </Col>
          <Col md={4} style={teamMemberStyle}>
            <Image src="team-member2.jpg" style={imageStyle} />
            <h4>Mr Adelaja</h4>
            <p>COO</p>
          </Col>
          <Col md={4} style={teamMemberStyle}>
            <Image src="team-member3.jpg" style={imageStyle} />
            <h4>Mr Afeez</h4>
            <p>Head of Marketing</p>
          </Col>
        </Row>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2024 Supermarket Plus. All rights reserved.</p>
        <p>Follow us on:</p>
        <p>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', margin: '0 5px' }}>Facebook</a> | 
          <a href="#" style={{ color: '#fff', textDecoration: 'none', margin: '0 5px' }}>Twitter</a> | 
          <a href="#" style={{ color: '#fff', textDecoration: 'none', margin: '0 5px' }}>Instagram</a>
        </p>
      </footer>
    </div>
  );
}

export default About;






// Omogbolahan//