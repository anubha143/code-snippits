import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, errorInfo) {
    // return { error };
    // This method is called when an error occurs during the initial render or in a lifecycle method
    console.error("ANUBHAAAAAAA (componentDidCatch):", error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children, fallback: Fallback } = this.props;
    if (error && !Fallback) return <ErrorScreen error={error} />;
    if (error) return <Fallback error={error} />;
    return children;
  }
}
