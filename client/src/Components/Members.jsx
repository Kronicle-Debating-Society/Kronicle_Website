import React from 'react';
import FaceCard from './Facecard';

const Members = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-36">Co-ordinators</h1>

      <div className="flex justify-center flex-wrap gap-10 mt-8">
        <FaceCard name="Priyanshu Midha" image="https://ik.imagekit.io/shubhusarathy/priyanshu.png?updatedAt=1728830695292" />
        <FaceCard name="Gourav Vardhan Panigrahi" image="https://ik.imagekit.io/shubhusarathy/gourav.png?updatedAt=1728830692670" />
      </div>

      <h1 className="text-center text-3xl font-bold mt-24">Asst. Co-ordinators</h1>

      <div className="flex justify-center flex-wrap gap-10 mt-8">
        <FaceCard name="Aadit Baxi" image="https://ik.imagekit.io/shubhusarathy/aadit.png?updatedAt=1728830689816" />
        <FaceCard name="Parth Sachdeva" image="https://ik.imagekit.io/shubhusarathy/parth.png?updatedAt=1728830693419" />
      </div>

      <h1 className="text-center text-3xl font-bold mt-24">Core Members</h1>

      <div className="flex justify-center flex-wrap gap-10 mt-8">
        <FaceCard name="Aishwarya Ganesan" image="https://ik.imagekit.io/shubhusarathy/aishwarya.png?updatedAt=1728830690095" />
        <FaceCard name="Bhumika Mohanty" image="https://ik.imagekit.io/shubhusarathy/bhumika.png?updatedAt=1728830690101" />
        <FaceCard name="Jay Anmol Rath" image="https://ik.imagekit.io/shubhusarathy/jay.png?updatedAt=1728830692687" />
        <FaceCard name="Manavi Vardhan" image="https://ik.imagekit.io/shubhusarathy/manavi.png?updatedAt=1728830692705" />
        <FaceCard name="Om Gupta" image="https://ik.imagekit.io/shubhusarathy/om.png?updatedAt=1728830693160" />
        <FaceCard name="Shreya Bangia" image="https://ik.imagekit.io/shubhusarathy/shreya.png?updatedAt=1728830695377" />
        <FaceCard name="Soham Nanda" image="https://ik.imagekit.io/shubhusarathy/soham.png?updatedAt=1728830695546" />
        <FaceCard name="Vipul Tripathi" image="https://ik.imagekit.io/shubhusarathy/vipul.png?updatedAt=1728830696275" />
        <FaceCard name="Vishesh Choudhary" image="https://ik.imagekit.io/shubhusarathy/vishesh.png?updatedAt=1728830696095" />
      </div>
    </div>
  );
};

export default Members;
