import React from 'react';
import './Members.css';
import FaceCard from './Facecard';

const Members = () => {
  return (
    <div>
      <h1>Co-ordinators</h1>

      <div className="facecard-container">
        <FaceCard
          name="Priyanshu Midha"
          image="/assets/priyanshu.png"
        />
        <FaceCard
          name="Gourav Vardhan Panigrahi"
          image="/assets/gourav.png"
        />
      </div>

      <h1>Asst. Co-ordinators</h1>

      <div className="facecard-container">
        <FaceCard
          name="Aadit Baxi"
          image="/assets/aadit.png"
        />
        <FaceCard
          name="Parth Sachdeva"
          image="/assets/paarth.png"
        />
      </div>

      <h1>Core Members</h1>

      <div className="facecard-container">
        <FaceCard
          name="Aishwarya Ganesan"
          image="/assets/aishwarya.png"
        />
        <FaceCard
          name="Bhumika Mohanty"
          image="/assets/bhumika.png"
        />
        <FaceCard
          name="Jay Anmol Rath"
          image="/assets/jay.png"
        />
        <FaceCard
          name="Manavi Vardhan"
          image="/assets/manavi.png"
        />
        <FaceCard
          name="Om Gupta"
          image="/assets/om.png"
        />
        <FaceCard
          name="Shreya Bangia"
          image="/assets/shreya.png"
        />
        <FaceCard
          name="Soham Nanda"
          image="/assets/soham.png"
        />
        <FaceCard
          name="Vipul Tripathi"
          image="/assets/vipul.png"
        />
        <FaceCard
          name="Vishesh Choudhary"
          image="/assets/vishesh.png"
        />
      </div>
    </div>
  );
};

export default Members;
