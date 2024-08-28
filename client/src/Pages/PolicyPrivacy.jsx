// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <div id='policyprivacy' className="bg-gray-100 min-h-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
        <Link to="/">{t('PolicyPrivacyPage.btn')}</Link>
      </button>
      <div className="max-w-4xl mx-auto p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">{t('PolicyPrivacyPage.heading')}</h1>
        </header>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-left mb-8">{t('PolicyPrivacyPage.time')}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacyPage.title1')}</h2>
            <p className="mb-4">{t('PolicyPrivacyPage.sub1title1')}</p>
            <p>{t('PolicyPrivacyPage.sub1title2')}</p>
            <p className="mb-4">{t('PolicyPrivacyPage.sub1title3')}</p>
            <p className="mb-4">{t('PolicyPrivacyPage.sub1title4')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacyPage.title2')}</h2>
            <p >{t('PolicyPrivacyPage.sub2title1')}</p>
            <p className="mb-4">{t('PolicyPrivacyPage.sub2title2')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacyPage.title3')}</h2>
            <p className="mb-4">{t('PolicyPrivacyPage.sub3title1')}</p>
            <p className="mb-4">{t('PolicyPrivacyPage.sub3title2')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacyPage.title4')}</h2>
            <p>{t('PolicyPrivacyPage.sub4title1')}{t('PolicyPrivacyPage.sub4title2')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacyPage.title5')}</h2>
            <p>{t('PolicyPrivacyPage.sub5title1')}{t('PolicyPrivacyPage.sub5title2')}{t('PolicyPrivacyPage.sub5title3')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacyPage.title6')}</h2>
            <p>{t('PolicyPrivacyPage.sub6title1')}{t('PolicyPrivacyPage.sub6title2')}{t('PolicyPrivacyPage.sub6title3')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacyPage.title7')}</h2>
            <p>{t('PolicyPrivacyPage.sub7title1')}</p>
            <p>{t('PolicyPrivacyPage.sub7title2')}{t('PolicyPrivacyPage.sub7title3')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacyPage.title8')}</h2>
            <p>{t('PolicyPrivacyPage.sub8title1')}<a href="mailto:privacy@siyeso.com" className="text-blue-500">privacy@siyeso.com</a></p>
            <p>{t('PolicyPrivacyPage.sub8title2')}{t('PolicyPrivacyPage.sub8title3')}</p>
          </section>
        </div>
      </div>
      <footer className="bg-black py-4 text-center">
        <p className="text-white">{t('PolicyPrivacyPage.contactUssub')}
        <a href="mailto:privacy@siyeso.com" className="text-blue-500">privacy@siyeso.com</a>
        {t('PolicyPrivacyPage.contactUssub1')}</p>
      </footer>

    </div>
  );
};

export default PrivacyPolicy