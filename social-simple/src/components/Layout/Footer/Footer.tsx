import { address, emailAcc, encodedAdress, encodedEmail, footerUserfulItems, mobileNumber } from '@config/constants'
import { navItemType } from '@config/types/types'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import FooterLinksDiv from './partials/FooterLinksDiv'
import DesktopFollowMe from './partials/DesktopFollowMe'
import DetailsItem from './partials/DetailsItem'
import { useRouter } from 'next/router'

type Props = {}

const Footer = (props: Props) => {

    const router = useRouter();

    // states
    const [play, setPlay] = useState({ wakieIcon: false, emailIcon: false, locationIcon: false });

    const sendMail = () => {
        router.push('mailto:'.concat(atob(encodedEmail)));
    };

    const phoneCall = () => {
        router.push('tel:'.concat(atob(encodedEmail)));
    };

    const adressFind = () => {
        router.push(atob(encodedAdress));
    };

    return (
        <>
            <footer className="bg-primary pt-10 pb-4">
                <div className="container">

                    <div className="grid xll:grid-cols-[61%_39%] 3xll:grid-cols-2">

                        <div className='text-center md:grid md:grid-cols-3 md:text-start'>

                            <div className='col-span-2'>
                                <Typography variant="h4" gutterBottom className='text-white'>
                                    {` Let's keep in touch!`}
                                </Typography>

                                <Typography variant="subtitle1" gutterBottom className='text-white mt-0 mb-2'>
                                    Find us on any of these platforms, we respond 1-2 business days.
                                </Typography>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 mt-0 md:mt-9 xll:mt-0'>

                            <div className='mt-7 md:mt-0 flex flex-col items-center md:block'>
                                <FooterLinksDiv
                                    title='Useful Links'
                                    array={footerUserfulItems.slice(0, 3)}
                                />
                            </div>

                            <div className='mt-8 md:mt-0 flex flex-col items-center md:block'>
                                <FooterLinksDiv
                                    title='Legal'
                                    array={footerUserfulItems.slice(3, 6)}
                                />
                            </div>
                        </div>

                    </div>


                    <hr className="md:my-6 my-4 border-primary-300" />


                    <div className="w-full px-4 mx-auto text-center">
                        <Typography variant="body2" gutterBottom className="py-1 uppercase text-white">
                            Copyright ©
                            <span id="get-current-year">{new Date().getFullYear()}</span>
                            <span className='text-secondary'> Social Buzz</span>
                        </Typography>
                    </div>


                </div>
            </footer>
        </>
    )
}

export default Footer