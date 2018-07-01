import React from 'react';

const MyLoadingComponent = (props) => {
  if (props.error) {
    return (
      <div>
        <span>Sorry, there was a problem loading the page.</span>
        <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

export default MyLoadingComponent;
