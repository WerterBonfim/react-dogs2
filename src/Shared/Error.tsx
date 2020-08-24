import React from 'react';

interface ErrorProps {
    error: string
}

const Error: React.FC<ErrorProps> = ( {error} ) => {
  return (
      <p style={{ color: '#f31', margin: '1rem 0' }} >
          { error }
      </p>
  );
}

export default Error;