import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { sendEmail } from '@/Actions/sendEmails';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';


const apperanceAnimation = {
    initial: {
        opacity: 0.2,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section ref={ref} id="contact" className='scroll-mt-28 mb-28 px-2' variants={apperanceAnimation} initial={"initial"} whileInView={"animate"} >
            <SectionHeading>Contact</SectionHeading>
            <p className='-mt-8 mb-8'>
                Please contact me directly at <a href="mailto:ahmed.reda.elshahawy@gmail.com" className='underline'>ahmed.reda.elshahawy@gmail.com</a> or through this form
            </p>

            <form
                className='flex flex-col gap-4 w-[min(100%,38rem)]'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully");
                }}
            >
                <input type="email" name="email" id="email" className='px-4 py-3 outline-none rounded shadow' placeholder='email' required maxLength={500} />
                <textarea name="message" id="message" rows={5} className='px-4 py-3 resize-none outline-none rounded shadow' placeholder='message' required maxLength={5000}></textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}