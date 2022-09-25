import ReCAPTCHA from "react-google-recaptcha"
import React from "react"
import { useState } from "react"

export default function EmailSection() {

    const [verified, setVerified] = useState(false)
    const [email, setEmail] = useState(false)

    const handleClick = async (captchaCode) => {
        if (!captchaCode) { return; }
        try {
            const response = await fetch("/api/recaptcha", {
                method: "POST",
                body: JSON.stringify({ captcha: captchaCode }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const body = await response.json()
                setEmail(body.email)
                setVerified(true)
            } else {
                const error = await response.json();
                setVerified(false)
                throw new Error(error.message)
            }
        } catch (error) {
            console.log(error?.message || "Something went wrong with the Recaptcha request");
        }
    }

    return (
        <div className="my-10">
            <h2 className="text-2xl my-5" onClick={handleClick}>Email</h2>
            <div className="my-2">{verified ? email : "Complete reCAPTCHA to reveal"}</div>
            <div><ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} style={{ visibility: verified ? 'none' : null }} onChange={handleClick} /></div>
        </div>
    )
}