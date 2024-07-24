// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Storedetailmiddlebar from '../Page/Storedetailmiddlebar';
// import { BsArrowDownCircle } from "react-icons/bs";

// function Storedetailcenterbarmodal() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const bounceAnimation = {
//     '@keyframes bounce': {
//       '0%, 20%, 50%, 80%, 100%': {
//         transform: 'translateY(0)',
//       },
//       '40%': {
//         transform: 'translateY(-10px)',
//       },
//       '60%': {
//         transform: 'translateY(-5px)',
//       },
//     },
//     animation: 'bounce 2s infinite',
//   };

//   // Function to inject keyframes into a style tag
//   const injectKeyframes = (keyframes) => {
//     const styleSheet = document.styleSheets[0];
//     const keyframeString = `@keyframes bounce {
//       0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//       40% { transform: translateY(-10px); }
//       60% { transform: translateY(-5px); }
//     }`;
//     styleSheet.insertRule(keyframeString, styleSheet.cssRules.length);
//   };

//   const BouncingIcon = () => {
//     useEffect(() => {
//       injectKeyframes(bounceAnimation);
//     }, []);

//     return <BsArrowDownCircle style={{ animation: bounceAnimation.animation }} size={20} />;
//   };

//   const modalDialogStyle = {
//     maxWidth: '100%',
//   };

//   const modalContentStyle = {
//     height: '200vh',
//     width: '110vh',
//   };

//   const modalBodyStyle = {
//     overflowY: 'auto',
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         <marquee behavior="" direction="left">
//           <BouncingIcon />&nbsp;
//           Click here to see list of what you can find in our store, supermarketplace a business environment where you can find anything you need
//         </marquee>
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <div className="modal-dialog" style={modalDialogStyle}>
//           <div className="modal-content" style={modalContentStyle}>
//             <Modal.Header closeButton>
//               <Modal.Title>supermarketplace</Modal.Title>
//             </Modal.Header>
//             <Modal.Body style={modalBodyStyle}>
//               <Storedetailmiddlebar />
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//               <Button variant="primary" onClick={handleClose}>
//                 Explore more
//               </Button>
//             </Modal.Footer>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default Storedetailcenterbarmodal;



// How can i change the content of this code to google map search whereby its be a google map search where by people can search location through google map
import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsArrowDownCircle } from "react-icons/bs";

function Storedetailcenterbarmodal() {
  const [show, setShow] = useState(false);
  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (show) {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      const searchBox = new google.maps.places.SearchBox(searchBoxRef.current);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBoxRef.current);

      map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
      });

      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            return;
          }

          bounds.extend(place.geometry.location);
        });

        map.fitBounds(bounds);
      });
    }
  }, [show]);

  const bounceAnimation = {
    '@keyframes bounce': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0)',
      },
      '40%': {
        transform: 'translateY(-10px)',
      },
      '60%': {
        transform: 'translateY(-5px)',
      },
    },
    animation: 'bounce 2s infinite',
  };

  const injectKeyframes = (keyframes) => {
    const styleSheet = document.styleSheets[0];
    const keyframeString = `@keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }`;
    styleSheet.insertRule(keyframeString, styleSheet.cssRules.length);
  };

  const BouncingIcon = () => {
    useEffect(() => {
      injectKeyframes(bounceAnimation);
    }, []);

    return <BsArrowDownCircle style={{ animation: bounceAnimation.animation }} size={20} />;
  };

  const modalDialogStyle = {
    maxWidth: '100%',
  };

  const modalContentStyle = {
    height: '200vh',
    width: '110vh',
  };

  const modalBodyStyle = {
    overflowY: 'auto',
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <marquee behavior="" direction="left">
          <BouncingIcon />&nbsp;
          Click here to see list of what you can find in our store, supermarketplace a business environment where you can find anything you need
        </marquee>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <div className="modal-dialog" style={modalDialogStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <Modal.Header closeButton>
              <Modal.Title>Supermarketplace</Modal.Title>
            </Modal.Header>
            <Modal.Body style={modalBodyStyle}>
              <input ref={searchBoxRef} type="text" placeholder="Search for places" style={{ width: '100%', marginBottom: '10px' }} />
              <div ref={mapRef} style={{ height: '400px' }}></div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Explore more
              </Button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Storedetailcenterbarmodal;
