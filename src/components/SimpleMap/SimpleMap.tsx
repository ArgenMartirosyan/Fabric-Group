import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background: #f0f0f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const MapPlaceholder = styled.div`
  text-align: center;
  color: #666;
  font-family: ${({ theme }) => theme.fonts.main};
`;

const MapImage = styled.div<{ $coordinates: [number, number] }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #e0e0e0 25%, transparent 25%), 
              linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #e0e0e0 75%), 
              linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  position: relative;
  
  &::after {
    content: "📍";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapText = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

interface SimpleMapProps {
  coordinates: [number, number];
  address: string;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ coordinates, address }) => {
  return (
    <MapContainer>
      <MapImage $coordinates={coordinates} />
      <MapOverlay>
        <MapText>
          <strong>Location:</strong><br />
          {address}<br />
          <small>Coordinates: {coordinates[0]}, {coordinates[1]}</small><br />
          <small>Google Maps integration available with API key</small>
        </MapText>
      </MapOverlay>
    </MapContainer>
  );
};

export default SimpleMap; 