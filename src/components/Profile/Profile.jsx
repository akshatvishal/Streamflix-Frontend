import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); 
  };
  

  


  
  const fetchProfile = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.get("https://streamflix-6rvf.onrender.com/api/profile/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      console.log(data);

      setProfile(data);
      setUpdatedProfile({
        firstName: data.first_name || "",
        lastName: data.last_name || "",
        username: data.username || "",
        email: data.email || "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  
  const updateProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put("https://streamflix-6rvf.onrender.com/api/profile/", updatedProfile, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;
      setProfile(data);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const styles = {
    card: { },
    title: { },
    info: {  },
    button: { },
    editForm: {  },
    label: {},
    input: {  },
  };
  return (
    <div className="container-big">
      
      <nav className="navv" style={styles.navbar}>
        <button
          style={styles.button}
            onClick={() => navigate("/")} 
            >
          Home
        </button>

        <div className="div">User Profile</div>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      
      <div className="carrier" style={styles.card}>
        {!editing ? (
          <>
            
            <div style={styles.info}>
              <strong>First Name:</strong> {profile.first_name}
            </div>
            <div style={styles.info}>
              <strong>Last Name:</strong> {profile.last_name}
            </div>
            
            <div style={styles.info}>
              <strong>Email:</strong> {profile.email}
            </div>
            
            <div style={styles.info}>
              <strong>Phone:</strong> {profile.phone_number}
            </div>
            

            
            
          </>
        ) : (
          <div style={styles.editForm}>
            <h2 style={styles.title}>Edit Profile</h2>
            <label style={styles.label}>
              First Name:
              <input
                type="text"
                value={updatedProfile.firstName}
                onChange={(e) =>
                  setUpdatedProfile({ ...updatedProfile, firstName: e.target.value })
                }
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Last Name:
              <input
                type="text"
                value={updatedProfile.lastName}
                onChange={(e) =>
                  setUpdatedProfile({ ...updatedProfile, lastName: e.target.value })
                }
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              
              <input
                type="text"
                value={updatedProfile.username}
                onChange={(e) =>
                  setUpdatedProfile({ ...updatedProfile, username: e.target.value })
                }
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Email:
              <input
                type="email"
                value={updatedProfile.email}
                onChange={(e) =>
                  setUpdatedProfile({ ...updatedProfile, email: e.target.value })
                }
                style={styles.input}
              />
            </label>
            <button style={styles.button} onClick={updateProfile}>
              Save
            </button>
            <button
              style={{ ...styles.button, backgroundColor: "#f87171" }}
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
