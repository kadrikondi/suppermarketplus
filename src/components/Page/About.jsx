import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  const [isHoveredContainer, setIsHoveredContainer] = useState(false);
  const [isHoveredSection, setIsHoveredSection] = useState(false);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    transition: 'box-shadow 0.3s ease',
    boxShadow: isHoveredContainer ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const sectionStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    margin: '20px 0',
    transition: 'background-color 0.3s ease',
    backgroundColor: isHoveredSection ? '#e0f7fa' : '#f9f9f9'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px'
  };

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

      <section 
        style={sectionStyle}
        onMouseEnter={() => setIsHoveredSection(true)}
        onMouseLeave={() => setIsHoveredSection(false)}
      >
        <h2>Welcome to Supermarket Plus</h2>
        <p>Supermarket Plus has been serving the community since 1990. Our mission is to provide high-quality products at affordable prices, ensuring customer satisfaction with every visit.</p>
      </section>

      <section 
        style={sectionStyle}
        onMouseEnter={() => setIsHoveredSection(true)}
        onMouseLeave={() => setIsHoveredSection(false)}
      >
        <h2>Our Mission</h2>
        <p>To provide the best shopping experience by offering a wide range of products, exceptional customer service, and a commitment to sustainability.</p>
      </section>

      <section 
        style={sectionStyle}
        onMouseEnter={() => setIsHoveredSection(true)}
        onMouseLeave={() => setIsHoveredSection(false)}
      >
        <h2>Our History</h2>
        <p>Founded in 1990, Supermarket Plus started as a small family-owned store. Over the years, we have grown into a leading supermarket chain, known for our fresh produce, diverse product range, and community involvement.</p>
      </section>

      <section 
        style={sectionStyle}
        onMouseEnter={() => setIsHoveredSection(true)}
        onMouseLeave={() => setIsHoveredSection(false)}
      >
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Integrity</li>
          <li>Community Involvement</li>
          <li>Sustainability</li>
        </ul>
      </section>

      <section 
        style={sectionStyle}
        onMouseEnter={() => setIsHoveredSection(true)}
        onMouseLeave={() => setIsHoveredSection(false)}
      >
        <h2>Meet Our Team</h2>
        <Row>
          <Col md={4} style={teamMemberStyle}>
            <Image src="team-member1.jpg" style={imageStyle} />
            <h4>John Doe</h4>
            <p>Founder & CEO</p>
          </Col>
          <Col md={4} style={teamMemberStyle}>
            <Image src="team-member2.jpg" style={imageStyle} />
            <h4>Jane Smith</h4>
            <p>COO</p>
          </Col>
          <Col md={4} style={teamMemberStyle}>
            <Image src="team-member3.jpg" style={imageStyle} />
            <h4>Mike Johnson</h4>
            <p>Head of Marketing</p>
          </Col>
        </Row>
      </section>

      <section 
        style={sectionStyle}
        onMouseEnter={() => setIsHoveredSection(true)}
        onMouseLeave={() => setIsHoveredSection(false)}
      >
        <h2>Contact Us</h2>
        <p>If you have any questions or need further information, feel free to contact us at:</p>
        <p>Email: info@supermarketplus.com</p>
        <p>Phone: +123 456 7890</p>
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
