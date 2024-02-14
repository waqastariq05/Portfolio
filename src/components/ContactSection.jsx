import React, { useRef, useState } from 'react'
import SubTitleSection from './SubTitleSection'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser';

const ContactSection = ({ setAlert, setAlertData }) => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs.sendForm(`${import.meta.env.VITE_PUBLIC_SERVICE_ID}`, `${import.meta.env.VITE_PUBLIC_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_API_KEY}`)
      .then((result) => {
        setAlertData({ type: "Success", msg: "Your Message is Sended." })
        setAlert(true)
        setIsLoading(false)
        e.target.reset();
      }, (e) => {
        setAlertData({ type: "Warning", msg: "Enter Correct Credentials." })
        setAlert(true)
        setIsLoading(false)
        e.target.reset();
      });
  }

  return (
    <div id='contact' className='w-full md:w-[90%] mx-auto pt-10 mb-16 sm:mb-20 px-5 md:px-0'>
      <SubTitleSection title="Contact" text="Let’s talk for your next projects" />
      <div className="sm:px-10 flex md:flex-nowrap flex-wrap">
        <div className="w-full lg:w-1/3 md:w-1/2 sm:mr-10 mt-2 sm:mt-7">
          <div className='flex items-start justify-start gap-4 mb-8'>
            <div>
              <MapPin size={20} color='#fd481d' />
            </div>
            <div>
              <p className='text-sm sm:text-base text-white tracking-wide'>Flat No E-17, Sana Avenu, Block 12, Gulistan-e-johar, Karachi Pakistan</p>
            </div>
          </div>
          <div className='flex items-center justify-start gap-4 mb-8'>
            <div>
              <Mail size={20} color='#fd481d' />
            </div>
            <div>
              <p className='text-sm sm:text-base text-white tracking-wide'>waqastariq274@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center justify-start gap-4 mb-8'>
            <div>
              <Phone size={20} color='#fd481d' />
            </div>
            <div>
              <p className='text-sm sm:text-base text-white tracking-wide'>+92 332 2018906</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 md:w-1/2 md:ml-auto mt-4 md:mt-0">
          <form ref={form} onSubmit={handleSubmit}>
            <div className='flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-5 mb-4 sm:mb-5'>
              <div className="w-full">
                <label htmlFor="name" className="leading-10 text-sm text-white/90">Full Name</label>
                <input type="text" id="name" name="name" className="w-full bg-transparent border-2 border-white/80 rounded-lg focus:border-textOrange text-base outline-none py-2 px-3 text-white placeholder:text-sm" placeholder='John Dev' required autoComplete='off' />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="leading-10 text-sm text-white/90">Email Address</label>
                <input type="email" id="email" name="email" className="w-full bg-transparent border-2 border-white/80 rounded-lg focus:border-textOrange text-base outline-none py-2 px-3 text-white placeholder:text-sm" placeholder='support@gmail.com' required autoComplete='off' />
              </div>
            </div>
            <div className="mb-4 sm:mb-5 w-full">
              <label htmlFor="subject" className="leading-10 text-sm text-white/90">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full bg-transparent border-2 border-white/80 rounded-lg focus:border-textOrange text-base outline-none py-2 px-3 text-white placeholder:text-sm" placeholder='Subject' required autoComplete='off' />
            </div>
            <div className="mb-4 sm:mb-6 w-full">
              <label htmlFor="message" className="leading-10 text-sm text-white/90">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full bg-transparent border-2 border-white/80 rounded-lg focus:border-textOrange text-base outline-none py-2 px-3 text-white placeholder:text-sm" placeholder='Write message' required></textarea>
            </div>
            <button className="btn w-[60%] sm:w-auto m-0 mx-auto sm:m-[10px] flex items-center justify-center gap-2" disabled={isLoading ? true : false}>{isLoading ? (
              <>loading...</>
            ) : (
              <>
                <Send size={20} color='#fff' /> Send
              </>
            )}
            </button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default ContactSection
