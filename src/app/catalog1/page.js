'use client'

import React from 'react';
import styles from './catalog1.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kompaniya haqida</h1>
      <div className={styles.newsGrid}>
        <div className={styles.newsCard}>
          <h2 className={styles.newsTitle}>Yralish tarixi</h2>
          <p className={styles.newsDate}>2034-01-20</p>
          <p className={styles.newsContent}>
            UzGidroTrans kompaniyasi global iqlim o&apos;zgarishi havo haroratning ko&apos;tarilishi natijasida dunyo okeanlarinign
            suvi ko&apos;payib sohil bo&apos;yi shaharlariga xavf sola boshlaganda ko&apos;rilgan chora tadbirlar natijasida paydo bo&apos;lgan.
            Ushbu chora tadbirlarga muvofiq dunyo okeanlaring suvi su&apos;iy bulutlar holida jahonning qurg&apos;oqchil cho&apos;l mintaqalariga
            yo&apos;naltirildi, shu jumladan O&apos;rta Osiyo chollariga ham buning uchun esa butun O&apos;rta Osiyo bo&apos;ylab kanallar tarmog&apos;i
            shakllantirildi va ular uchrashadigan joy Orol dengizi bo&apos;ldi. Bundan tashqari ushbu kanallar Turkmaniston orqali o&apos;tib Eronning
            chobahar portiga ham chiqdi.Orolport Porti shu tariqa vujudga keldi.
            
          </p>
        </div>
        <div className={styles.newsCard}>
          <h2 className={styles.newsTitle}>Port salohiyati</h2>
          <p className={styles.newsDate}>2034-01-19</p>
          <p className={styles.newsContent}>
          Port butun Markaziyu osiyo kanallar tarmog&apos;i tutashgan joy bo&apos;lganligi sabali Markaziy Osiyoda ishlab chiqarilgan va
          tayyorlangan maxsulotlar ushbu port orqali dunyoga chiqadi va import tovarlari ham aynan shu port orqali kirib keladi.
           Hozirda portda yuzda ortiq yirik yuk tashuvchi tankerlar fuqarolik kemalari va texnik xizmat ko&apos;rsatish korxonalari
           faoliyat yuritib kelmoqda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;