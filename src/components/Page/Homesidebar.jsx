import Accordion from 'react-bootstrap/Accordion';


function Homesidebar() {
  return (
    <>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Benefits for supermarkets</Accordion.Header>
        <Accordion.Body>
        <li> <b>Increased Foot Traffic:</b> By being featured on Supermarkets Plus, supermarkets can attract more customers who are actively seeking recommended and reliable stores.</li>
        <br />
      <li> <b>Enhanced Reputation: </b>Positive customer reviews and good publicity can significantly boost a supermarket's reputation, helping to build trust and credibility with potential shoppers.</li>
      <br />
    <li> <b>Quality Assurance: </b>The service ensures that only supermarkets meeting certain standards are referred, which helps maintain high-quality experiences for customers and encourages supermarkets to uphold high standards.</li>
    <br />
    <li> <b>Effective Marketing:</b> Supermarkets Plus provides trending and promotional opportunities, which can help supermarkets stand out in a competitive market and increase their visibility.</li>
    <li><b>Customer Insights: </b>Supermarkets can gain valuable feedback and insights from customer reviews, which can help them understand their strengths and areas for improvement.</li>
    
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <b>About Suppermarketplus</b> </Accordion.Header>
        <Accordion.Body>
        <ul>
    <p>Supermarkets Plus simplifies the referral process, making it easier for supermarkets to connect with new customers and manage their online presence effectively.</p>
    {/* <h4> Supermarkets Plus simplifies the referral process, making it easier for supermarkets to connect with new customers and manage their online presence effectively.</h4> */}
    {/* <li>Community Engagement: By participating in a platform that emphasizes safety and quality, supermarkets demonstrate their commitment to serving the community, enhancing their overall image and relationship with local customers.</li> */}
</ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</>
  );
}

export default Homesidebar;

// Afeez



