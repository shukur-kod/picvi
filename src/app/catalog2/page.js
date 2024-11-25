'use client';
import Link from 'next/link';
import styles from './catalog2.module.css';

export default function Catalog() {
    return (
        <div className={styles.catalogContainer}>
          <h2 className={styles.headerText}>Xizmatlar</h2>
            <div className={styles.catalogGrid}>
                <div className={styles.catalogItem}>yuklarni saqlash</div>
                <div className={styles.catalogItem}>Ombor operatsiyalari</div>
                <div className={styles.catalogItem}>O&apos;rnatish operatsiyalari</div>
                <div className={styles.catalogItem}>Mollarni tashish va expor qilish</div>
                <div className={styles.catalogItem}>Yuklash va tushirish ihlari</div>
                <div className={styles.catalogItem}>Qo&apos;shimcha xizmatlar</div>
            </div>
            
            <div className={styles.additionalInfo}>
                <h3>Qo&apos;shimcha Ma&apos;lumotlar</h3>
                <ul>
                    <li>
                        <Link href='/path-to-pdf-1.pdf'>
                            2022 yil uchun UzGidroTrans hududiga kirishni boshqarish xizmatlari uchun tariflar (PDF)
                        </Link>
                    </li>
                    <li>
                        <Link href='/path-to-pdf-2.pdf'>
                            Shartnoma narxini va ish uchun tariflarni belgilash shartlari (PDF)
                        </Link>
                    </li>
                    <li>
                        <Link href='/path-to-pdf-3.pdf'>
                            Yuk tashish shartnomasi (standart shakl) (PDF)
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}