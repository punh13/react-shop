import React from 'react';
import icon from '/icon.svg';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About Developer</h1>
      <p>
        Hello there! I'm <span>Punhan Talibkhanli</span>, passionate front-end
        developer behind this website. <br /> I am excited and motivated to
        learn more about different technologies in web development and advance
        my skills. As a self tought developer, I am now looking forward to
        seeing my hard work and effort pay off in the form of real results. I am
        extremely driven to continue to improve my technical abilities and
        advance professionally in the field of web development.
      </p>
      <br />
      <p>This website was build in React.</p>
      <div className={styles.reactLogo}>
        <img src={icon} alt="" />
      </div>
    </div>
  );
}
