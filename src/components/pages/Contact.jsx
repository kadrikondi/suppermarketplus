import React from 'react';
import { Stack } from 'react-bootstrap'; // Ensure you have react-bootstrap installed

const Contact = () => {
  const containerStyle = {
    display: 'flex',
    border: '2px solid #4CAF50', // Green border color
    borderRadius: '10px', // Rounded corners
    padding: '10px', // Inner padding (reduced)
    maxWidth: '900px', // Maximum width of the container
    margin: '20px auto', // Centering the container
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow for a nice effect
    backgroundColor: '#f9f9f9' // Light background color
  };

  const formContainerStyle = {
    flex: 2,
    paddingRight: '10px' // Reduced padding right
  };

  const sidebarStyle = {
    flex: 1,
    borderLeft: '2px solid #ddd',
    paddingLeft: '10px', // Reduced padding left
    color: '#555'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    margin: '10px 0' // Reduced margin
  };

  const subHeadingStyle = {
    textAlign: 'center',
    color: '#666',
    marginBottom: '10px' // Reduced margin bottom
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
    width: '100%',
    padding: '10px', // Reduced padding
    margin: '10px 0 0 0', // Reduced margin top
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50', // Green background color
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding a more pronounced shadow for the button
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '20px',
    borderRadius: '0 0 10px 10px'
  };

  return (
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
          <h4 style={{ margin: '10px 0' }}>Clifton Homes</h4>
          <p style={{ margin: '5px 0' }}>34 Senchi Street<br />Airport Residential<br />Accra</p>
          <p style={{ margin: '5px 0' }}>+233 (0)20 4677 033<br />+233 (0)30 278 6726</p>
          <p style={{ margin: '5px 0' }}><a href="mailto:info@cliftonghana.com">info@cliftonghana.com</a></p>
          <p style={{ margin: '5px 0' }}><a href="http://www.cliftonghana.com" target="_blank" rel="noopener noreferrer">www.cliftonghana.com</a></p>
        </div>
      </div>
      <div style={footerStyle}>
        <p>Footer Content Here</p>
      </div>
    </div>
  );
}

export default Contact;
