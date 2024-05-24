import React from 'react';
import { Stack } from 'react-bootstrap'; // Ensure you have react-bootstrap installed

const Contact = () => {
  const containerStyle = {
    display: 'flex',
    borderRadius: '10px', 
    padding: '10px', 
    maxWidth: '1000px', 
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#e5e5e5' 
  };

  const formContainerStyle = {
    flex: 2,
    paddingRight: '10px,'
  
  };

  const sidebarStyle = {
    flex: 1,
    borderLeft: '2px solid #ddd',
    paddingLeft: '120px', 
    paddingTop: '140px', 
    color: '#555'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    margin: '10px 0' 
  };

  const subHeadingStyle = {
    textAlign: 'center',
    color: '#666',
    marginBottom: '10px' 
  };

  const itemStyle = {
    padding: '5px 0', // Adjusted padding for better layout
  };

  const inputStyle = {
    width: '100%',
    padding: '8px', // Reduced padding
    margin: '5px 0',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff'
  };

  const buttonStyle = {
    width: '50%',
    padding: '10px', // Reduced padding
    margin: '10px 0 0 110px', // Reduced margin top
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#0077b6', // Green background color
    color: '#fff',
    fontSize: '16px',
    // cursor: 'pointer',
    boxShadow: '0 4px 8px rgb(0, 0, 0, 0.2)', // Adding a more pronounced shadow for the button
  };

  const footerStyle = {
    backgroundColor: '#0077b6',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0, 0, 40px',
    marginTop: '20px',
    borderRadius: '0 0 10px 10px'
  };

  

  return (





// // omogbolahan//

    <div>
      <div style={containerStyle}>
        <div style={formContainerStyle}>
          <Stack gap={3}>
            <h1 style={headingStyle}>Contact Us</h1>
            <h5 style={subHeadingStyle}>CONTACT US TODAY FOR AVAILABILITY</h5>
            <div style={itemStyle}>
              <input style={inputStyle} type="text" placeholder="Name" />
            </div>
            <div style={itemStyle}>
              <input style={inputStyle} type="email" placeholder="Email" />
            </div>
            <div style={itemStyle}>
              <input style={inputStyle} type="email" placeholder="Confirm Email" />
            </div>
            <div style={itemStyle}>
              <input style={inputStyle} type="tel" placeholder="Phone" />
            </div>
            <div style={itemStyle}>
              <button style={buttonStyle} type="submit">Submit</button>
            </div>
          </Stack>
        </div>
        <div style={sidebarStyle}>
          <h4 style={{ margin: '10px 0' }}>Supermarket Plus</h4>
          <p style={{ margin: '5px 0' }}>Lagos island Street<br />Airport Residential<br />NIGERIA</p>
          <p style={{ margin: '5px 0' }}>+234 (0)20 4677 033<br />+234 (0)30 278 6726</p>
          <p style={{ margin: '5px 0' }}><a href="#">info@supermarketplus.com</a></p>
          <p style={{ margin: '5px 0' }}><a href="#" target="_blank" rel="noopener noreferrer">www..info@supermarketplus.com</a></p>
        </div>
      </div>
      <div></div>
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

export default Contact;




