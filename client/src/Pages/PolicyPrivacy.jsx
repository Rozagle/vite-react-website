// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {Link} from "@nextui-org/react";
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
        <Link to="/">{t('PolicyPrivacy.btn')}</Link>
      </button>
      <div className="max-w-4xl mx-auto p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">{t('PolicyPrivacy.heading')}</h1>
        </header>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-left mb-8">{t('PolicyPrivacy.time')}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacy.title1')}</h2>
            <p className="mb-4">{t('PolicyPrivacy.sub1title1')}</p>
            <p>{t('PolicyPrivacy.sub1title2')}</p>
            <p className="mb-4">{t('PolicyPrivacy.sub1title3')}</p>
            <p className="mb-4">{t('PolicyPrivacy.sub1title4')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacy.title2')}</h2>
            <p >{t('PolicyPrivacy.sub2title1')}</p>
            <p className="mb-4">{t('PolicyPrivacy.sub2title2')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacy.title3')}</h2>
            <p className="mb-4">{t('PolicyPrivacy.sub3title1')}</p>
            <p className="mb-4">{t('PolicyPrivacy.sub3title2')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacy.title4')}</h2>
            <p>{t('PolicyPrivacy.sub4title1')}{t('PolicyPrivacy.sub4title2')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacy.title5')}</h2>
            <p>{t('PolicyPrivacy.sub5title1')}{t('PolicyPrivacy.sub5title2')}{t('PolicyPrivacy.sub5title3')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacy.title6')}</h2>
            <p>{t('PolicyPrivacy.sub6title1')}{t('PolicyPrivacy.sub6title2')}{t('PolicyPrivacy.sub6title3')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacy.title7')}</h2>
            <p>{t('PolicyPrivacy.sub7title1')}</p>
            <p>{t('PolicyPrivacy.sub7title2')}{t('PolicyPrivacy.sub7title3')}</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('PolicyPrivacy.title8')}</h2>
            <p>{t('PolicyPrivacy.sub8title1')}<a href="mailto:privacy@siyeso.com" className="text-blue-500">privacy@siyeso.com</a></p>
            <p>{t('PolicyPrivacy.sub8title2')}{t('PolicyPrivacy.sub8title3')}</p>
          </section>
        </div>
      </div>
      <footer className="bg-black py-4 text-center">
        <p className="text-white">{t('PolicyPrivacy.contactUssub')}
        <a href="mailto:privacy@siyeso.com" className="text-blue-500">privacy@siyeso.com</a>
        {t('PolicyPrivacy.contactUssub1')}</p>
      </footer>

    </div>
  );
};

export default PrivacyPolicy