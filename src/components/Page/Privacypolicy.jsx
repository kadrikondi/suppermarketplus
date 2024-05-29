import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const styles = {
  container: {
      padding: '20px',
      maxWidth: '800px',
    
  }
  }
const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy">
      <Row>
        <Col>
          <h1>Privacy Policy</h1>
          <p>Last updated: [Date]</p>

          <p>
            Welcome to SuppermarketPlus. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2>1. Important Information and Who We Are</h2>
          <p>
            SuppermarketPlus is the controller and responsible for your personal data (collectively referred to as "SuppermarketPlus", "we", "us", or "our" in this privacy policy).
          </p>
          <p>
            If you have any questions about this privacy policy, please contact us using the details set out below:
          </p>
          <p>Email address: privacy@suppermarketplus.com</p>
          <p>Postal address: 1234 Market Street, City, Country</p>

          <h2>2. The Data We Collect About You</h2>
          <p>
            We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ListGroup>
            <ListGroup.Item><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, date of birth, and gender.</ListGroup.Item>
            <ListGroup.Item><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</ListGroup.Item>
            <ListGroup.Item><strong>Financial Data</strong> includes bank account and payment card details.</ListGroup.Item>
            <ListGroup.Item><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</ListGroup.Item>
            <ListGroup.Item><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</ListGroup.Item>
            <ListGroup.Item><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</ListGroup.Item>
            <ListGroup.Item><strong>Usage Data</strong> includes information about how you use our website, products, and services.</ListGroup.Item>
            <ListGroup.Item><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and your communication preferences.</ListGroup.Item>
          </ListGroup>

          <h2>3. How Is Your Personal Data Collected?</h2>
          <p>We use different methods to collect data from and about you including through:</p>
          <ListGroup>
            <ListGroup.Item>
              <strong>Direct interactions.</strong> You may give us your Identity, Contact, and Financial Data by filling in forms or by corresponding with us by post, phone, email, or otherwise. This includes personal data you provide when you:
              <ListGroup>
                <ListGroup.Item>Apply for our products or services;</ListGroup.Item>
                <ListGroup.Item>Create an account on our website;</ListGroup.Item>
                <ListGroup.Item>Subscribe to our service or publications;</ListGroup.Item>
                <ListGroup.Item>Request marketing to be sent to you;</ListGroup.Item>
                <ListGroup.Item>Enter a competition, promotion, or survey;</ListGroup.Item>
                <ListGroup.Item>Give us feedback or contact us.</ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Automated technologies or interactions.</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, server logs, and other similar technologies.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Third parties or publicly available sources.</strong> We may receive personal data about you from various third parties and public sources as set out below:
              <ListGroup>
                <ListGroup.Item>Technical Data from analytics providers such as Google based outside the EU;</ListGroup.Item>
                <ListGroup.Item>Contact, Financial, and Transaction Data from providers of technical, payment, and delivery services based inside or outside the EU;</ListGroup.Item>
                <ListGroup.Item>Identity and Contact Data from data brokers or aggregators based inside or outside the EU;</ListGroup.Item>
                <ListGroup.Item>Identity and Contact Data from publicly available sources such as Companies House and the Electoral Register based inside the EU.</ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;

//omogbolahan//