'use client'

import React from 'react';
import styles from './catalog3.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Yangiliklar</h1>
      <div className={styles.newsGrid}>
        <div className={styles.newsCard}>
          <h2 className={styles.newsTitle}>Yangilik 1</h2>
          <p className={styles.newsDate}>2034-01-20</p>
          <p className={styles.newsContent}>
            UzGidroTrans kompaniyasi yangi transport yo&apos;nalishini ochdi. 
            Bu yangi yo&apos;nalish orqali yuk tashish xizmatlari yanada samarali 
            va tezkor bo&apos;ladi.
          </p>
        </div>
        <div className={styles.newsCard}>
          <h2 className={styles.newsTitle}>Yangilik 2</h2>
          <p className={styles.newsDate}>2034-01-19</p>
          <p className={styles.newsContent}>
            Kompaniyamiz xalqaro konferensiyada ishtirok etdi. 
            Konferensiya davomida ko&apos;plab muhim kelishuvlarga erishildi 
            va yangi hamkorlik aloqalari o&apos;rnatildi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;