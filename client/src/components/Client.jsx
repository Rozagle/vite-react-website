// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';

import { akbank, BurganBank, ziraatkatilim, ziraatteknoloji, DenizBank, hsbc, intertech, kalkilmayatirimbankasi, odeabank, evrensel } from '../assets/bank-logos/Banks';

function Client() {
    const { t, i18n } = useTranslation();
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'tr';

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>
            <div id='Client' className="w-full min-h-[500px] flex flex-col justify-center items-center ">
                <div className='w-[100%] flex flex-col'>
                    <div className='flex space-y-2 flex-col text-center mb-14 text-black'>
                        <h1 className="md:text-4xl sm:text-3xl xxs:text-4xl  xs:text-6xl text-2xl font-bold text-center mt-8 mb-4 capitalize">
                            {t('ClientPage.heading')}
                        </h1>
                        <span className='lg:text-3xl md:text-3xl sm:text-3xl xs:text-2xl xxs:text-lg  '>
                            {t('ClientPage.subheading')}
                        </span>
                    </div>
                    <Marquee autoFill pauseOnMouseOver>
                        <div className=' m-1 flex space-x-1 p-1 cursor-pointer'>
                            <img src={BurganBank} alt="Burgan Bank" className="inline-block h-16 mr-8 ml-8 md:mr-4 md:ml-2 " />
                        </div>
                        <div className=' m-1 flex space-x-1 p-1 cursor-pointer '>
                            <img src={akbank} alt="Akbank" className="inline-block h-12 mr-8 ml-8 md:mr-2 md:ml-2  " />
                        </div>
                        <div className=' m-1 flex space-x-1 p-1 cursor-pointer '>
                            <img src={ziraatkatilim} alt="Ziraat Katilim Bankasi" className="inline-block h-10 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className=' m-1 flex space-x-1 p-1 cursor-pointer'>
                            <img src={ziraatteknoloji} alt="Ziraat Teknoloji" className="inline-block h-10 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className=' m-1 flex space-x-1 p-1 cursor-pointer '>
                            <img src={DenizBank} alt="DenizBank" className="inline-block h-16 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className=' m-1 flex space-x-1 p-1 cursor-pointer '>
                            <img src={hsbc} alt="HSBC" className="inline-block h-12 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className='m-1 flex space-x-1 p-1 cursor-pointer '>
                            <img src={intertech} alt="Intertech" className="inline-block h-16 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className='m-1 flex space-x-1 p-1 cursor-pointer '>
                            <img src={kalkilmayatirimbankasi} alt="Kalkilma Yatirim Bankasi" className="inline-block w-[165px] h-[105px] mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className='m-1 flex space-x-1 p-1 cursor-pointer '>
                            <img src={odeabank} alt="Odea Bank" className="inline-block h-16 mr-8 ml-8 md:mr-2 md:ml-2 " />
                        </div>
                        <div className='m-1 flex space-x-1 p-1 cursor-pointer '>
                            <img src={evrensel} alt="Evrensel" className="inline-block h-12 mr-8 ml-8 md:mr-2 md:ml-5 " />
                        </div>
                    </Marquee>
                </div>
            </div>

        </>
    );
}

export default Client;
