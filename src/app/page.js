import styles from './page.module.css';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <div className={styles.leftDivs}>
                    <div className={styles.box}>Maxsulotlarni yuklash va tushirish xizmati</div>
                    <div className={styles.box}> Maxsulotlarni omborlarda saqlash xizmati</div>
                    <div className={styles.box}>Yuklarni tashish xizmati</div>
                    <div className={styles.box}>Qo&apos;shimcha xizmatlar</div>
                </div>
                <div className={styles.rightContent}>
                    <h1 className={styles.largeText}>UzGidroTrans AJga tegishli port Orol</h1>
                    <p className={styles.smallText}>Ushbu sayt orqali siz o&apos;z maxsulotlaringi logistikasini <br/> &apos;UzGidroTrans AJ&paos;orqali xafvsiz va qulay amalga oshirishingiz mumkin </p>
                    <Link href='/catalog1' className={styles.catalogLink}>Kompaniya haqida   </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;