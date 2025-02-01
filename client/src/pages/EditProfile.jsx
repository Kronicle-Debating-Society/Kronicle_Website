import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditProfile.css";

const API_URL = "http://localhost:8000/api/v1/users/update";

const EditProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    igLink: "",
    linkedLink: "",
    githubLink: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setFormData({
          name: parsedUser.name || "",
          igLink: parsedUser.igLink || "",
          linkedLink: parsedUser.linkedLink || "",
          githubLink: parsedUser.githubLink || "",
        });
      } else {
        console.warn("No user data found in localStorage.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.patch(
        API_URL,
        formData, // Send updated user data
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        console.log("Profile updated successfully:", response.data);
        setMessage("Profile updated successfully!");

        
        const updatedUser = { ...user, ...formData }; 

    
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);

        navigate("/profile"); 
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Error updating profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="igLink">Instagram Link</label>
          <input
            type="url"
            id="igLink"
            name="igLink"
            value={formData.igLink}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedLink">LinkedIn Link</label>
          <input
            type="url"
            id="linkedLink"
            name="linkedLink"
            value={formData.linkedLink}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="githubLink">GitHub Link</label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
