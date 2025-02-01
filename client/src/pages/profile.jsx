import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  
  const loadUserData = () => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored user value from localStorage:", storedUser);

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log("Parsed user:", parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUser(null);
        navigate("/login");
      }
    } else {
      console.warn("No user data found in localStorage.");
      setUser(null);
      navigate("/login");
    }
  };

 
  useEffect(() => {
    loadUserData();
  }, [navigate]);

  
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "user") {
        loadUserData();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return <p>No user data found. Please log in.</p>;
  }

  return (
    <div className="container">
      <div className="left-section">
        <h2>Profile Menu</h2>
        <ul>
          <li>
            <button onClick={() => navigate("/")}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
          </li>
          <li>
            <button onClick={() => navigate("/ResetPassword")}>Change Password</button>
          </li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </div>

      <div className="right-section">
        <div className="image-div">
          <div className="user-image">
            <img src={user.avatar} alt="User Avatar" width="90" height="90" />
          </div>
        </div>

        <div className="user-name">
          <h3>{user.name}</h3>
        </div>

        <div className="user-email">
          <h4>Email:</h4>
          <p>{user.email}</p>
        </div>

        <div className="events-participated">
          <h4>Events Participated:</h4>
          <ul>
            {user.eventHistory?.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
