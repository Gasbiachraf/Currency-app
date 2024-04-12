
import './firstSection.sass'
import Logo3 from '../../../assets/img/logo3.png'
import { useRef, useState } from 'react';
import emailjs from "emailjs-com"



import { LuKanbanSquareDashed } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { RxBackpack } from "react-icons/rx";
import { MdOutlineCurrencyExchange } from "react-icons/md";

import { MdOutlineContactSupport } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


export const FirstSectionContact = () => {
    const navigate = useNavigate()
    const [name , setName] = useState()
    const [object , setObject] = useState()
    const [email , setEmail] = useState()
    const [message , setMessage] = useState()


    const form = useRef();

    // ^^ emailjs :
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('achraf_gasbi', 'template_evu2wpy', form.current, '_Iv6kFj6Qr4fyFzwu',
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
            setName('')
            setObject('')
            setEmail('')
            setMessage('')
    };
    // ^^ fin emailjs :

    // const Submit =()=>{
    //     setName('')
    //     setObject('')
    //     setEmail('')
    //     setMessage('')
    // }
    return (
        <>
            <div className='h-screen w-[100%] colorContainer  p-4 flex gap-1'>
                {/* left div */}
                <div className='w-[15%] h-[100%]  rounded-2xl text-gray-400 pr-6 flex flex-col justify-between'>
                    <div className=' pl-2 h-[50%] w-[100%]'>
                        <img onClick={() => { navigate('/') }} src={Logo3} alt="" />
                        <div className=' h-[60%] w-[100%] flex flex-col justify-between'>

                            <div className='flex items-center  hover:bg-slate-500 py-1 rounded-full px-3'>
                                <LuKanbanSquareDashed className='text-2xl' />
                                <p className='text-xl pl-3'>Dashboard</p>
                            </div>
                            <div className='items-center w-[100%] flex justify-between hover:bg-slate-500 py-1 rounded-full px-3'>
                                <CiWallet className='text-2xl' />
                                <select className='w-[86%] text-xl bg-transparent outline-none' name="" id="">
                                    <option className='' value="">Wallets</option>
                                </select>
                            </div>
                            <div className='flex items-center  hover:bg-slate-500 py-1 rounded-full px-3'>
                                <RxBackpack className='text-2xl' />
                                <p className='text-xl pl-3'>trade</p>
                            </div>
                            <div className='flex items-center  hover:bg-slate-500 py-1 rounded-full px-3'>
                                <MdOutlineCurrencyExchange className='text-2xl' />
                                <p className='text-xl pl-3'>Exchange</p>
                            </div>
                        </div>
                    </div>
                    <div className=' h-[8%] flex flex-col justify-between'>
                        <div className='flex items-center py-1  hover:bg-slate-500  rounded-full px-3'>
                            <MdOutlineContactSupport className='text-2xl' />
                            <p onClick={() => { navigate('/contact') }} className='text-xl pl-3'>Contact</p>
                        </div>
                        {/* <div className='flex items-center py-1  hover:bg-slate-500  rounded-full px-3'>
                                <IoSettingsOutline className='text-2xl' />
                                <p className='text-xl pl-3'>Settings</p>
                            </div> */}
                    </div>
                </div>
                <div className='w-[85%] h-[100%]  rounded-2xl  flex flex-col'>
                    <div className='w-100 h-[100%] colorContainerChild rounded-xl'>
                        <div className='flex flex-col h-[100%] items-center justify-center '>
                            <div className='w-[80%]   flex flex-col items-center justify-center'>
                                <p className='text-3xl text-green-500 pb-4'>Contact Support</p>
                                <p className='text-slate-300 text-xl pb-6'>Email us with any questions or inquiries or call 05 55 56 57 58</p>
                                <div className='border-slate-500   rounded-xl border-2 w-[90%]  h-[50vh]  flex flex-col backdrop-blur-sm'>
                                    <form ref={form} className='flex flex-col p-2 h-[100%]' onSubmit={sendEmail}>
                                        <label className='mt-1 pl-1 text-slate-100 text-lg'>FullName</label>
                                        <input onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='your name' className='mb-2 pl-2 py-1 bg-transparent border-2 rounded border-slate-500  text-white' type="text" name="user_name" />
                                        <label className='mt-1 pl-1 text-slate-100 text-lg'>Object (Email)</label>
                                        <input onChange={(e)=>{setObject(e.target.value)}} value={object} placeholder='object mail' className='mb-2 pl-2 py-1 bg-transparent border-2 rounded border-slate-500  text-white' type="text" name="from_name" />
                                        <label className='mt-1 pl-1 text-slate-100 text-lg'>Email</label>
                                        <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='your Email' className='mb-2 pl-2 py-1 bg-transparent border-2 rounded border-slate-500  text-white' type="email" name="user_email" />
                                        <label className='mt-1 pl-1 text-slate-100 text-lg'>Message</label>
                                        <textarea onChange={(e)=>{setMessage(e.target.value)}} value={message} placeholder=' write message' className='mb-2 pl-2 py-1 bg-transparent border-2 rounded border-slate-500  text-white ' type="text" name="message" />
                                        <input className='w-[20%] hover:bg-slate-600 mt-2 border-2 rounded  text-slate-100 border-slate-500 ' type="submit" value="Send" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
