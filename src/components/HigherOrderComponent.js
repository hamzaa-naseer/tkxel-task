import React, { useEffect } from 'react';

const withLogging = (WrappedComponent) => {
  return function(props) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} component mounted`);
      return () => {
        console.log(`${WrappedComponent.name} component unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

// Example usage
const SimpleComponent = () => <h1>Simple Component</h1>;
const EnhancedComponent = withLogging(SimpleComponent);

export { withLogging, EnhancedComponent };