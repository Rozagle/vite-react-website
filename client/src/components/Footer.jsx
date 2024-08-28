// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>
            <footer className="bg-black text-white">
                <div className="container mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4">{t('FooterPage.heading1')}</h3>
                            <div className="mt-6">
                                <p style={{ marginBottom: '10px' }}>
                                    <a href="https://goo.gl/maps/LqEgX3RxspXzomoS7" className="text-white hover:text-gray-400">
                                        {t('FooterPage.address')}
                                    </a>
                                </p>
                                <p style={{ marginBottom: '10px' }}>
                                    <a href="tel:+905325959709" className="text-white hover:text-gray-400">
                                        {t('FooterPage.phone')}
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:info@siyeso.com" className="text-white hover:text-gray-400">
                                        {t('FooterPage.mail')}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:block"></div>
                        <div className="md:col-span-2">
                            <h3 className="text-lg font-bold mb-4">{t('FooterPage.heading2')}</h3>
                            <ul className="space-y-2">
                                <li><a href="#ContactUs" className="text-white hover:text-gray-400">{t('FooterPage.contactus')}</a></li>
                                <li><Link to="/privacypolicy" className="text-white hover:text-gray-400">{t('FooterPage.policy')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-700" />
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">&copy; 2024 All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;