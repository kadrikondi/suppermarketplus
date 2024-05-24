import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Homeplaceholderanimation() {
  const now = 100;
  const storeprogress = "Store Progress";

  return (
    <>
      <ProgressBar striped variant="success" now={now} label={`${now}% ${storeprogress}`} />
    </>
  );
}

export default Homeplaceholderanimation;

// Afeez