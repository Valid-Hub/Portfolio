import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import styles from '../../styles/Components/Form/contact.form.module.css';
import { usePopup } from '../../contexts/PopupContext';

const contactForm: React.FC = () => {
    const { t } = useI18n();
    const { addPopup } = usePopup();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formsubmit.co/ajax/validsstorage@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                addPopup(t('sections.contact.form.submissionSuccess'), 'success');
                form.reset();
            } else {
                addPopup(t('sections.contact.form.submissionError'), 'error');
            }
        } catch (error) {
            addPopup(t('sections.contact.form.submissionError'), 'error');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>{t('sections.contact.form.title')}</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    <input type="hidden" name="_next" value="https://yourportfolio.com/#contact" />

                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            {t('sections.contact.form.nameLabel')}
                        </label>
                        <input type="text" id="name" name="name" placeholder={t('sections.contact.form.namePlaceholder')} className={styles.input} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            {t('sections.contact.form.emailLabel')}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t('sections.contact.form.emailPlaceholder')}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject" className={styles.label}>
                            {t('sections.contact.form.subjectLabel')}
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder={t('sections.contact.form.subjectPlaceholder')}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>
                            {t('sections.contact.form.messageLabel')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            placeholder={t('sections.contact.form.messagePlaceholder')}
                            className={styles.textarea}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        {t('sections.contact.form.submitButton')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default contactForm;
