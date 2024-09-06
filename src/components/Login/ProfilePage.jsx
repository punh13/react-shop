import React, { useContext, useEffect, useState } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          'https://api.escuelajs.co/api/v1/auth/profile',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          setError('Failed to fetch profile');
        }
      } catch (err) {
        setError('Error fetching profile');
      }
    };

    fetchProfile();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    setAuth({ accessToken: null });
    navigate('/login');
  };

  return (
    <div>
      <h1 className={styles.profileHeader}>Profile</h1>
      {profile ? (
        <div className={styles.profileContainer}>
          <img src={profile.avatar} className={styles.profileImg} alt="" />
          <div className={styles.profileInfo}>
            <p>{profile.role}</p>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
          </div>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <p className={styles.noProfile}>No profile data</p>
      )}
    </div>
  );
}
