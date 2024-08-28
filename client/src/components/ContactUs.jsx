/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ContactUs() {
    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    const formInitialDetails = {
        firstName: "",
        comName: "",
        email: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, comName, email, message } = formDetails;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!firstName.trim()) {
            setErrorMessage(t('ContactUsPage.erroremptyname'));
            return;
        } else if (!comName.trim()) {
            setErrorMessage(t('ContactUsPage.erroremptycompany'));
            return;
        } else if (!email.trim()) {
            setErrorMessage(t('ContactUsPage.erroremail'));
            return;
        } else if (!emailRegex.test(email)) {
            setErrorMessage(t('ContactUsPage.errorvalidemail'));
            return;
        } else {
            setErrorMessage('');
        }

        setButtonText("sending...");
        try {
            let response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(formDetails)
            });
            let result = await response.json();
            setButtonText("send");
            if (response.ok) {
                setFormDetails(formInitialDetails);
                setStatus({ success: true, message: "Message sent successfully" });
                setSubscriptionSuccess(true);
                setTimeout(() => setSubscriptionSuccess(false), 3000);
            } else {
                setStatus({ success: false, message: result.message || "Something went wrong. Please try again later." });
            }
        } catch (error) {
            setButtonText("send");
            setStatus({ success: false, message: "An error occurred. Please try again later." });
        }

        setTimeout(() => {
            setErrorMessage('');
        }, 5000);
    };

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    return (
        <>
            <div id='ContactUs' className='w-full py-16 text-black bg-[#6391FF] px-4'>
                <div className='max-w-[1240px] max-h-[420px] xxs:max-h-[640px] mx-auto grid lg:grid-cols-3'>
                    <div className='lg:col-span-2 sm:mx-16 select-none'>
                        <h1 className='md:text-5xl sm:text-4xl text-2xl xxs:text-5xl font-bold py-6 xxs:py-2'> {t('ContactUsPage.heading')}</h1>
                        <h2 className='mt-4 md:text-3xl sm:text-2xl text-xl font-bold py-2 xxs:text-lg xxs:py-0'>{t('ContactUsPage.subheading')}</h2>
                    </div>
                    <div className='my-4 md:my-0 md:pr-4'>
                        <form className='flex flex-col sm:flex-cols items-center justify-between w-full' onSubmit={handleSubmit}>
                            <input
                                className='p-3 m-2 flex w-full sm:w-5/6 rounded-md text-black'
                                type="text"
                                placeholder={t('ContactUsPage.placeholdername')}
                                value={formDetails.firstName}
                                onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                required
                            />
                            <input
                                className='p-3 m-2 flex w-full sm:w-5/6  rounded-md text-black'
                                type="text"
                                placeholder={t('ContactUsPage.placeholdercompanyname')}
                                value={formDetails.comName}
                                onChange={(e) => onFormUpdate('comName', e.target.value)}
                                required
                            />
                            <input
                                className='p-3  m-2 flex w-full sm:w-5/6  rounded-md text-black'
                                type="email"
                                placeholder={t('ContactUsPage.placeholderemail')}
                                value={formDetails.email}
                                onChange={(e) => onFormUpdate('email', e.target.value)}
                                required
                            />
                            <textarea
                                className='p-3 m-2 flex w-full  sm:w-5/6  rounded-md text-black'
                                placeholder={t('ContactUsPage.placeholdermessage')}
                                value={formDetails.message}
                                onChange={(e) => onFormUpdate('message', e.target.value)}
                                required
                                rows={3}
                            ></textarea>
                            <div className="flex flex-col items-start">
                                <div>
                                    <p>
                                        {t('ContactUsPage.policydescription')}
                                        <span className='text-blue-600' style={{ textDecoration: 'underline' }}>
                                            <Link to="/privacypolicy" >
                                                {t('ContactUsPage.policydescriptionspan')}
                                            </Link>
                                        </span>.
                                    </p>
                                </div>
                                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-black text-white rounded-md font-medium w-[200px] ml-62 my-2 px-6 py-4"
                                    style={{ whiteSpace: 'nowrap' }}
                                >
                                    {t('ContactUsPage.notifymebtn')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {subscriptionSuccess && (
                <div className="fixed top-5 right-10 w-[450px] bg-green-500 bg-opacity-80 text-white p-4 rounded-lg shadow-md transition-opacity duration-500">
                    <h2 className='subscriptionSuccesstxt'>{t('ContactUsPage.subscriptionSuccesstxt')}</h2>
                    <p className='subscriptionSuccesstxt2'>{t('ContactUsPage.subscriptionSuccesstxt2')}</p>
                </div>
            )}
        </>
    );
}

export default ContactUs;
