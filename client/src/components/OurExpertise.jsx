// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Aboutusreg from '../assets/Aboutusreg.svg';
import Aboutusblob from '../assets/Aboutusblob.svg';
import icon1 from '../assets/iconn1.svg'
import icon2 from '../assets/iconn2.svg'
import icon3 from '../assets/iconn10.png'
import icon4 from '../assets/iconn4.svg'



function OurExpertise() {
    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>
            <div id='OurExpertise' className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10 max-w-[1500px] mx-auto" style={{ zIndex: -1 }}>
                <img src={Aboutusreg} alt="" className='absolute mb-24 xxl:left-[200px] lg:left-[1000px] lg:max-w-[80%] lg:mb-48 md:left-[750px] md:max-w-[87%] sm:left-[600px] ss:left-[500px] ss:max-w-[70%] xs:left-[900px] xs:max-w-[30%] xxs:left-[300px] ' style={{ zIndex: -1 }} />
                <img src={Aboutusblob} alt="" className='absolute lg:right-[1100px] md:right-[800px] md:max-w-[80%] md:mt-42 sm:right-[620px]  sm:max-w-[60%] ss:right-[600px] ss:max-w-[50%] xs:right-[400px] xs:max-w-[80%] xxs:right-[282px] xxs:w-[25%] xxs:mt-42 ' style={{ zIndex: -1 }} />
                <div className='flex space-y-2 flex-col text-center mb-14 '>
                    <h1 className="text-2xl md:text-4xl sm:text-3xl xxs:text-3xl xs:text-5xl font-bold text-center mt-8 mb-4 capitalize">
                        {t('OurExpertisePage.heading')}
                    </h1>
                    <span className='text-2xl xs:text-2xl xxs:text-xl'>
                        {t('OurExpertisePage.subheading')}
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 group bg-none rounded-3xl" style={{ zIndex: -1 }}>
                    <div className="p-10 flex flex-col items-center text-center group border-2 border-gray-700 bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 " >
                        <img src={icon1} alt="" className="p-4 rounded-xl  border-2 border-black bg-[#ff7d37] text-white shadow-lg shadow-red-200"></img>
                        <p className="text-2xl md:text-3xl xxs:text-xl xs:text-3xl font-medium text-slate-700 m-3">{t('OurExpertisePage.firstgridheading')}</p>
                        <p className="mt-2 text-md md:text-xl xxs:text-xl xs:text-2xl text-slate-500">{t('OurExpertisePage.firstgridsubheading')}</p>
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group border-2  border-gray-700 bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 ">
                        <img src={icon2} alt="" className="p-4 rounded-xl border-2 border-black bg-[#F33E33] text-white shadow-lg shadow-orange-200"></img>
                        <p className="text-2xl md:text-3xl xxs:text-xl xs:text-3xl font-medium text-slate-700 m-3">{t('OurExpertisePage.secondgridheading')}</p>
                        <p className="mt-2 text-md md:text-xl xxs:text-lg xs:text-2xl text-slate-500">{t('OurExpertisePage.secondgridsubheading')}</p>
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group border-2  border-gray-700 bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 ">
                        <img src={icon3} alt="" className="p-4 rounded-xl  border-2 border-black bg-[#05FF00] text-white shadow-lg shadow-yellow-200"></img>
                        <p className="text-2xl md:text-3xl xxs:text-xl xs:text-3xl font-medium text-slate-700 m-3">{t('OurExpertisePage.thirdgridhaeding')}</p>
                        <p className="mt-2 text-md md:text-xl xxs:text-lg xs:text-2xl text-slate-500">{t('OurExpertisePage.thirdgridsubhaeding')}</p>
                    </div>

                    <div className="p-10 flex flex-col items-center text-center group border-2  border-gray-700 bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 ">
                        <img src={icon4} alt="" className="p-4 rounded-xl  border-2 border-black  bg-[#0091ff] text-white shadow-lg shadow-lime-200"></img>
                        <p className="text-2xl xxs:text-xl md:text-3xl xs:text-3xl font-medium text-slate-700 m-3">{t('OurExpertisePage.forthgridheading')}</p>
                        <p className="mt-2 text-md xxs:text-lg md:text-xl xs:text-2xl text-slate-500">{t('OurExpertisePage.forthgridsubheading')}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurExpertise;
