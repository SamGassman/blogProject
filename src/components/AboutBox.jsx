import React from 'react';

var AboutBox = function(props) {
  console.log(props);
  return (
    <div style={props.styles.boxContainer}>
      <div style={styles.imageContainer}></div>
    </div>
  );
};

const styles = {
  imageContainer: {

  },
};

export default AboutBox;
