import React from 'react'
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

export default function SocialLinks() {
	return (
		<div
			className='social-box is-flex is-align-items-center is-justify-content-space-around column is-8'>
			<IoLogoGithub className="title m-0 is-4" cursor={"pointer"} />
			<IoLogoLinkedin className="inLogo title m-0 is-4" cursor={"pointer"} />
			<IoLogoInstagram className="instaLogo title m-0 is-4" cursor={"pointer"} />
			<IoLogoTwitter className="twitterLogo title m-0 is-4" cursor={"pointer"} />
			<IoLogoFacebook className="facebookLogo title m-0 is-4" cursor={"pointer"} />
		</div>
	)
}
