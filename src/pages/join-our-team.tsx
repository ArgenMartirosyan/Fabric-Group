import React from 'react';

export default function JoinOurTeamPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '100px 20px 20px',
      background: 'linear-gradient(135deg, #f8f6f3 0%, #fdfbf7 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          textAlign: 'center', 
          fontSize: '3rem', 
          color: '#8B4513',
          marginBottom: '2rem'
        }}>
          Join Our Team
        </h1>
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.2rem', 
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Be part of something extraordinary. Join the Fabrica Group family and help us create 
          unforgettable dining experiences across our five unique restaurants in Yerevan.
        </p>
        <div style={{ 
          marginTop: '3rem', 
          textAlign: 'center',
          padding: '2rem',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ color: '#8B4513', marginBottom: '1rem' }}>Current Openings</h2>
          <p>We're currently hiring for various positions across our restaurants.</p>
          <p>Please send your resume to: <strong>careers@fabricagroup.am</strong></p>
        </div>
      </div>
    </div>
  );
} 