// import React, { Component } from "react";

// export default class ErrorBoundary extends Component {
//   state = { error: null };

//   static getDerivedStateFromError(error) {
//     return { error };
//   }
//   componentDidCatch(error, errorInfo) {
//     // return { error };
//     // This method is called when an error occurs during the initial render or in a lifecycle method
//     console.error("ANUBHAAAAAAA (componentDidCatch):", error, errorInfo);
//   }

//   render() {
//     const { error } = this.state;
//     const { children, fallback: Fallback } = this.props;
//     if (error && !Fallback) return <ErrorScreen error={error} />;
//     if (error) return <Fallback error={error} />;
//     return children;
//   }
// }

import React, { useState } from "react";

const ErrorBoundary = ({ children, fallback: Fallback }) => {
  const [error, setError] = useState(null);

  const onError = (error, errorInfo) => {
    // Handle the error or log it as needed
    console.error("ANUBHAAAAAAA (onError):", error, errorInfo);
    setError(error);
  };

  if (error) {
    return <Fallback error={error} />;
  }

  return (
    <React.ErrorBoundary onError={onError}>{children}</React.ErrorBoundary>
  );
};

export default ErrorBoundary;
