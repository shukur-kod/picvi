 'use client'

import React, { useState } from 'react';
import styles from './catalog5.module.css';

const Catalog5 = () => {
    const [formData, setFormData] = useState({
        cargoName: '',
        packageSize: '',
        unitMeasurements: '',
        transportRoute: '',
        transportAddress: '',
        deliveryDeadline: '',
        arrivalPort: '',
        departurePort: '',
        cargoVolume: '',
        cargoRiskClass: '',
        additionalInfo: '',
        file: null,
        prrLevel: '',
        techCollectionPeriod: '',
        storageLevel: '',
        acceptancePossibility: '',
        feedback: '',
        name: '',
        companyName: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        setFormData({
            cargoName: '',
            packageSize: '',
            unitMeasurements: '',
            transportRoute: '',
            transportAddress: '',
            deliveryDeadline: '',
            arrivalPort: '',
            departurePort: '',
            cargoVolume: '',
            cargoRiskClass: '',
            additionalInfo: '',
            file: null,
            prrLevel: '',
            techCollectionPeriod: '',
            storageLevel: '',
            acceptancePossibility: '',
            feedback: '',
            name: '',
            companyName: '',
            phone: '',
            email: ''
        });
    };

    return (
        <div className={styles.catalogContainer}>
            <h2 className={styles.headerText}>Ariza topshirish </h2>
            <form onSubmit={handleSubmit}/>
            <div>
    <label htmlFor='cargoName' className={styles.label}>Yuk nomi</label>
    <input
        type='text'
        id='cargoName'
        name='cargoName'
        className={styles.input}
        value={formData.cargoName}
        onChange={handleChange}
        required
    />
</div>
            <div>
        <label htmlFor='packageSize' className={styles.label}>To&apos;plam hajmi</label>
        <input
            type='text'
            id='packageSize'
            name='packageSize'
            className={styles.input}
            value={formData.packageSize}
            onChange={handleChange}
            required
        />
    </div>
    <div>
        <label htmlFor='unitMeasurements' className={styles.label}>Yukning o&apos;lchov birliklari</label>
        <input
            type='text'
            id='unitMeasurements'
            name='unitMeasurements'
            className={styles.input}
            value={formData.unitMeasurements}
            onChange={handleChange}
            required
        />
    </div>
    <div>
        <label htmlFor='transportRoute' className={styles.label}>Transport yo&apos;nalishi</label>
        <input
            type='text'
            id='transportRoute'
            name='transportRoute'
            className={styles.input}
            value={formData.transportRoute}
            onChange={handleChange}
            required
        />
    </div>
    <div>
        <label htmlFor='transportAddress' className={styles.label}>Transport manzili</label>
        <input
            type='text'
            id='transportAddress'
            name='transportAddress'
            className={styles.input}
            value={formData.transportAddress}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor='deliveryDeadline' className={styles.label}>Yukni tashish uchun kelish muddati</label>
        <input
            type='date'
            id='deliveryDeadline'
            name='deliveryDeadline'
            className={styles.input}
            value={formData.deliveryDeadline}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor='arrivalPort' className={styles.label}>Yukni portga yetib kelish vaqti</label>
        <input
            type='text'
            id='arrivalPort'
            name='arrivalPort'
            className={styles.input}
            value={formData.arrivalPort}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor='departurePort' className={styles.label}>Yukni portdan chiqib ketish vaqti</label>
        <input
            type='text'
            id='departurePort'
            name='departurePort'
            className={styles.input}
            value={formData.departurePort}
            onChange={handleChange}
        />
    </div>


                        <div>
                    <label htmlFor='cargoVolume' className={styles.label}>Yuk tashish hajmi </label>
                    <input
                        type='text'
                        id='cargoVolume'
                        name='cargoVolume'
                        className={styles.input}
                        value={formData.cargoVolume}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='cargoRiskClass' className={styles.label}>Yuk  sinfi </label>
                    <input
                        type='text'
                        id='cargoRiskClass'
                        name='cargoRiskClass'
                        className={styles.input}
                        value={formData.cargoRiskClass}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="additionalInfo" className={styles.label}>Yuk haqida qo&apos;shimcha ma&apos;lumotlar:</label>
                    <textarea
                        id='additionalInfo'
                        name='additionalInfo'
                        className={styles.textarea}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor='file' className={styles.label}>Fayl biriktirish </label>
                    <input
                        type='file'
                        id='file'
                        name='file'
                        className={styles.input}
                        onChange={handleChange}
                    />
                    {formData.file ? (
                        <p>Tanlangan fayl: {formData.file.name}</p>
                    ) : (
                        <p className={styles.errorMessage}>Fayl tanlanmagan</p>
                    )}
                </div>

                <div>
                    <label htmlFor='prrLevel' className={styles.label}>Iltimos, xabar bering:</label>
                    <input
                        type='text'
                        id='prrLevel'
                        name='prrLevel'
                        className={styles.input}
                        value={formData.prrLevel}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor='techCollectionPeriod' className={styles.label}>Yuklarni texnologik yig&apos;ish davri </label>
                    <input
                        type='text'
                        id='techCollectionPeriod'
                        name='techCollectionPeriod'
                        className={styles.input}
                        value={formData.techCollectionPeriod}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='acceptancePossibility' className={styles.label}>Belgilangan vaqt oralig&apos;ida yukni qabul qilish va jo&apos;natish imkoniyati </label>
                    <input
                        type='text'
                        id='acceptancePossibility'
                        name='acceptancePossibility'
                        className={styles.input}
                        value={formData.acceptancePossibility}
                        onChange={handleChange}
                        required
                    />
                </div>

                {}
                <div>
                    <label htmlFor='name' className={styles.label}>Ism, familiya </label>
                    <input
                        type='text'
                        id="name"
                        name='name'
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {}
                <div>
                    <label htmlFor='companyName' className={styles.label}>Shirkat nomi </label>
                    <input
                        type='text'
                        id='companyName'
                        name='companyName'
                        className={styles.input}
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {}
                <div>
                    <label htmlFor='phone' className={styles.label}>Telefon/faks raqami </label>
                    <input
                        type='text'
                        id='phone'
                        name='phone'
                        className={styles.input}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                {}
                <div>
                    <label htmlFor='email' className={styles.label}>E-pochta manzili </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

             
                <div>
                    <button type='submit' className={styles.submitButton}>Yuborish</button>
                </div>

           
       
    

                        </div>
    )
}

export default Catalog5;