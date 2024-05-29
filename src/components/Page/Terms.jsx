import React from 'react';
const Terms = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Terms and Conditions</h1>
            <p>Welcome to SuppermarketPlus!</p>
            <p>These terms and conditions outline the rules and regulations for the use of SuppermarketPlus's Website, located at www.supermarketplus.com.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use SuppermarketPlus if you do not agree to take all of the terms and conditions stated on this page.</p>

            <h2 style={styles.subHeader}>Cookies</h2>
            <p>We employ the use of cookies. By accessing SuppermarketPlus, you agreed to use cookies in agreement with the SuppermarketPlus's Privacy Policy.</p>
            <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

            <h2 style={styles.subHeader}>License</h2>
            <p>Unless otherwise stated, SuppermarketPlus and/or its licensors own the intellectual property rights for all material on SuppermarketPlus. All intellectual property rights are reserved. You may access this from SupermarketPlus for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul style={styles.list}>
                <li>Republish material from SuppermarketPlus</li>
                <li>Sell, rent or sub-license material from SuppermarketPlus</li>
                <li>Reproduce, duplicate or copy material from SuppermarketPlus</li>
                <li>Redistribute content from SuppermarketPlus</li>
            </ul>

            <h2 style={styles.subHeader}>Hyperlinking to our Content</h2>
            <p>The following organizations may link to our Website without prior written approval:</p>
            <ul style={styles.list}>
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</li>
                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>
            
            <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

            <h2 style={styles.subHeader}>iFrames</h2>
            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

            <h2 style={styles.subHeader}>Content Liability</h2>
            <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

            <h2 style={styles.subHeader}>Your Privacy</h2>
            <p>Please read Privacy Policy</p>

            <h2 style={styles.subHeader}>Reservation of Rights</h2>
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

            <h2 style={styles.subHeader}>Removal of links from our website</h2>
            <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
            <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

            <h2 style={styles.subHeader}>Disclaimer</h2>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ul style={styles.list}>
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        
        margin: '0 auto',
        // backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    },
    header: {
        fontSize: '2em',
        marginBottom: '20px',
        textAlign: 'center'
    },
    subHeader: {
        fontSize: '1.5em',
        marginTop: '20px',
        marginBottom: '10px'
    },
    list: {
        paddingLeft: '20px'
    }
};

export default Terms;



//omogbolahan//
