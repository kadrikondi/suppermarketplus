import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import './Faq.css'; // Make sure to import the CSS file if the styles are in an external file

export default function Faq() {
  return (
    <div>
      <br /><br />
      <center style={{ fontSize: "29px", fontWeight: 'bold' }}>
        <span className="animated-span">F</span>
        <span className="animated-span">R</span>
        <span className="animated-span">E</span>
        <span className="animated-span">Q</span>
        <span className="animated-span">U</span>
        <span className="animated-span">E</span>
        <span className="animated-span">N</span>
        <span className="animated-span">T</span>
        <span className="animated-span">L</span>
        <span className="animated-span">Y</span>

-
        <span className="animated-span">A</span>
        <span className="animated-span">S</span>
        <span className="animated-span">K</span>
        <span className="animated-span">E</span>
        <span className="animated-span">D</span>
<span />-

        <span className="animated-span">Q</span>
        <span className="animated-span">U</span>
        <span className="animated-span">E</span>
        <span className="animated-span">S</span>
        <span className="animated-span">T</span>
        <span className="animated-span">I</span>
        <span className="animated-span">O</span>
        <span className="animated-span">N</span>
        <span className="animated-span">S</span>
      </center>
      <br />
      <Container>
        <Row>
          <Col sm={6}>
            <Accordion defaultActiveKey={['0']}>
              {Array.from({ length: 1 }, (_, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header> How long will it take to receive my order ?</Accordion.Header>
                  <Accordion.Body>
                  Delivery times vary depending on your location and the shipping method chosen. Standard shipping typically takes 2 days, expedited takes 2 days, and overnight shipping takes 1 day. We offer several shipping options including standard, expedited, and overnight shipping. You can choose your preferred method during checkout.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>


            <Accordion defaultActiveKey={['0']}>
              {Array.from({ length: 1 }, (_, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header> What shipping options are available ?</Accordion.Header>
                  <Accordion.Body>
                  Delivery times vary depending on your location and the shipping method chosen. Standard shipping typically takes 2 days, expedited takes 2 days, and overnight shipping takes 1 day. We offer several shipping options including standard, expedited, and overnight shipping. You can choose your preferred method during checkout.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>


            <Accordion defaultActiveKey={['0']}>
              {Array.from({ length: 1 }, (_, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header> Where can I find product manuals or instructions ?</Accordion.Header>
                  <Accordion.Body>
                  Product manuals and instructions can be found on the product page under the 'Storedetail' section or you can contact customer support for assistance.


                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>


            
            <Accordion defaultActiveKey={['0']}>
              {Array.from({ length: 1 }, (_, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header> What should I do if I encounter a technical issue ?</Accordion.Header>
                  <Accordion.Body>
                  For any technical issues, please contact our technical support team via email at [wixoboy@gmail.com] or call us at [09018402702]. We are here to help you resolve The Issue.


                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>


          </Col>
          <Col sm={6}>
            <Accordion defaultActiveKey={['0']}>
              {Array.from({ length: 1 }, (_, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>How do I initiate a return ?</Accordion.Header>
                  <Accordion.Body>
                  To initiate a return, please contact our customer support team with your order number and reason for return. We will provide you with further instructions. Refunds are processed within  15 days after we receive the returned item. You will be notified via email once your refund has been issued.
                  </Accordion.Body>
                </Accordion.Item>

                
              ))}
            </Accordion>



            <Accordion defaultActiveKey={['0']}>
              {Array.from({ length: 1 }, (_, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>Do you offer customization options ?
</Accordion.Header>
                  <Accordion.Body>
                  Yes, we offer customization options for certain products. Please check the product page for availability or contact us for more information.
                  Yes, we are committed to sustainability and many of our products are made from eco-friendly materials. Please check the product descriptions for specific details.


                  </Accordion.Body>
                </Accordion.Item>

                
              ))}
            </Accordion>


            <Accordion defaultActiveKey={['0']}>
              {Array.from({ length: 1 }, (_, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header> Is my payment information secure ? </Accordion.Header>
                  <Accordion.Body>
                  Yes, we use industry-standard encryption to protect your payment information. Your data is secure with us. We accept a variety of payment methods including credit/debit cards, PayPal, and [other payment methods].
                  </Accordion.Body>
                </Accordion.Item>

                
              ))}
            </Accordion>

            <Accordion defaultActiveKey={['0']}>
              {Array.from({ length: 1 }, (_, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header> What shipping options are available ? </Accordion.Header>
                  <Accordion.Body>
                  We offer several shipping options including standard, expedited, and overnight shipping. You can choose your preferred method during checkout.
                  We offer a wide range of services/products . Our offerings are designed to meet the needs of our audience.
                  </Accordion.Body>
                </Accordion.Item>

                
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
