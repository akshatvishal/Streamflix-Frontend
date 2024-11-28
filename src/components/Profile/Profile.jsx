import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

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

  // Fetch user profile (GET method)
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

  // Update user profile (PUT method)
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
    card: { /* Your styles here */ },
    title: { /* Your styles here */ },
    info: { /* Your styles here */ },
    button: { /* Your styles here */ },
    editForm: { /* Your styles here */ },
    label: { /* Your styles here */ },
    input: { /* Your styles here */ },
  };

  return (
    <>
    <div style={styles.card}>
      {!editing ? (
        <>
          <h2 style={styles.title}>User Profile</h2>
          <div style={styles.info}>
            <strong>First Name:</strong> {profile.first_name}
          </div>
          <div style={styles.info}>
            <strong>Last Name:</strong> {profile.last_name}
          </div>
          <div style={styles.info}>
            <strong>Username:</strong> {profile.username}
          </div>
          <div style={styles.info}>
            <strong>Email:</strong> {profile.email}
          </div>
          <button style={styles.button} onClick={() => setEditing(true)}>
            Edit Profile
          </button>
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
            Username:
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
    </>
  );
};

export default Profile;
