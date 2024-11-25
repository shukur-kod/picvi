'use client'


import React from 'react';
import Link from 'next/link'; 
import styles from './catalog4.module.css'; 

const Catalog4 = () => {
    return (
        <div className={styles.catalogContainer}>
            <h2 className={styles.headerText}>Shartnomalarni tuzish uchun ariza va hujjatlar ro&apos;yxati</h2>
            <p>Shartnoma tuzish imkoniyatini ko&apos;rib chiqish uchun kontragent quyidagi hujjatlarni taqdim etishi kerak:</p>
            <ul className={styles.documentList}>
                <li>
                    <strong>&apos;UzGidroTrans AJ&apos; bosh direktori nomiga ariza (taklif)</strong>, u tashkilotning blankida taqdim etiladi va kontragent shartnoma tuzishni taklif qilayotgan ish va xizmatlar turi, yukning nomenklaturasi va yuk nomenklaturasi to&apos;g&apos;risidagi ma&apos;lumotlarni o&apos;z ichiga olishi kerak. yil uchun umumiy hajm, oylar bo&apos;yicha taqsimlangan.
                </li>
                </ul>
                <li>
                    <strong>O&apos;zbekiston Respublikasi rezidentlari uchun (hujjatlar tashkilot rahbarining imzosi va muhri bilan tasdiqlangan bo&apos;lishi kerak):</strong>
                    <ul>
                        <li>yuridik shaxslarning yagona davlat reestridan ko&apos;chirma nusxasi (shartnoma tuzilgan sanadan kamida bir oy oldin beriladi);</li>
                        <li>ta&apos;sis hujjatlarining (nizom, nizom) nusxalari;</li>
                        <li>ijro etuvchi organni tayinlash to&apos;g&apos;risidagi bayonnoma nusxasi yoki bayonnomadan ko&apos;chirma;</li>
                        <li>davlat ro&apos;yxatidan o&apos;tkazilganligi to&apos;g&apos;risidagi guvohnoma nusxasi;</li>
                        <li>nizom asosida ish yurituvchi shaxsni tayinlash to&apos;g&apos;risidagi buyruq nusxasi;</li>
                        <li>vakilning ishonchnoma nusxasi;</li>
                        <li>soliq to&apos;lovchi sifatida hisobga olinganligi to&apos;g&apos;risidagi guvohnoma nusxasi;</li>
                        <li>tashkilot rahbari va bosh buxgalterning imzosi va muhri bilan tasdiqlangan va quyidagi ma&apos;lumotlarni o&apos;z ichiga olgan kontragentning to&apos;ldirilgan kartasi:</li>
                        <ul>
                            <li>Kontragentning yuridik manzili;</li>
                            <li>Kontragentning haqiqiy manzili;</li>
                            <li>Kontragentning bank rekvizitlari;</li>
                            <li>Aloqa ma&apos;lumotlari: faks raqami, elektron pochta manzili va telefon raqamlarini ko&apos;rsatgan aloqa shaxslar.</li>
                        </ul>
                    </ul>
                </li>
              
                    <strong>O&apos;zbekiston Respublikasi norezidentlari uchun (hujjatlar notarial tasdiqlangan rus tiliga tarjimasi bilan taqdim etilishi kerak):</strong>
                    <ul>
                        <li>kontragent-kompaniya kelib chiqqan mamlakatning Savdo reestridan ko&apos;chirma (kompaniyaning ishonchliligi to&apos;g&apos;risida);</li>
                        <li>ta&apos;sis hujjatlari va kompaniyani ro&apos;yxatdan o&apos;tkazish hujjatlari (nusxalari);</li>
                        <li>shaxsning shartnoma imzolash vakolatini tasdiqlash, notarial tasdiqlangan apostil qo&apos;yilgan ishonchnoma yoki lavozimga tayinlash (saylash) to&apos;g&apos;risidagi bayonnomadan ko&apos;chirma;</li>
                        <li>tashkilot rahbarining imzosi va muhri bilan tasdiqlangan va quyidagi ma&apos;lumotlarni o&apos;z ichiga olgan kontragentning to&apos;ldirilgan kartasi:</li>
                        <ul>
                            <li>Kontragentning yuridik manzili;</li>
                            <li>Kontragentning haqiqiy manzili;</li>
                            <li>Kontragentning bank rekvizitlari;</li>
                            <li>Aloqa ma&apos;lumotlari: faks raqami, elektron pochta manzili va telefon raqamlarini ko&apos;rsatgan aloqa shaxslar.</li>
                            <li>Shartnoma tuzilgan sanadan kamida bir oy oldin berilgan hujjatlar (nizom, nizom) nusxalari;</li>
                            </ul>

                            </ul>
                            <Link href='/catalog5' className={styles.linkText}>Ariza qoldirish</Link>
                            </div>
    )}


export default Catalog4;
