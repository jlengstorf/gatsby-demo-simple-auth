import React from 'react';
import styles from './view.module.css';

export default ({ title, children }) => (
  <section className={styles.view}>
    <h1 className={styles['view__heading']}>{title}</h1>
    {children}
  </section>
);
