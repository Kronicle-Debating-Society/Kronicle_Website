import React from "react";
import "./ProfileDashboard.css"; 

const ProfileDashboard = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h2>Profile Menu</h2>
        <ul>
          <li>
            <button>Dashboard</button>
          </li>
          <li>
            <button>Edit Profile</button>
          </li>
          <li>
            <button>Change Password</button>
          </li>
          <li>
            <button>Log Out</button>
          </li>
        </ul>
      </div>

      <div className="right-section">
        <div className="image-div">
          <div className="user-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2 21a8 8 0 0 1 13.292-6" />
              <circle cx="10" cy="8" r="5" />
              <path d="m16 19 2 2 4-4" />
            </svg>
          </div>
        </div>

        <div className="user-name">
          <h3>John Doe</h3>
        </div>

        <div className="user-email">
          <h4>Email:</h4>
          <p>johndoe@example.com</p>
        </div>

        <div className="events-participated">
          <h4>Events Participated:</h4>
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;