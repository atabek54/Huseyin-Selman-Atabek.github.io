// src/components/Project.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Project: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="page project">
      <div className="content">
        <h1>Proje {id}</h1>
        <p>Proje {id} hakkında detaylı bilgi...</p>
        <a href="/" className="button">Ana Sayfaya Dön</a>
      </div>
    </div>
  );
};

export default Project;
