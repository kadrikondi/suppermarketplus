import React from 'react'

export default function About() {
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








// Omogbolahan//