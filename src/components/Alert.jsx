import React from 'react'
import { X } from "lucide-react"

const Alert = ({ alertData, setAlert, setAlertData }) => {
    setTimeout(() => {
        setAlert(false)
        setAlertData({ type: "", msg: "" })
    }, [2000])

    const handleClose = () => {
        setAlert(false)
        setAlertData({ type: "", msg: "" })
    }

    return (
        <div className='fixed top-[12%] right-0 left-0 bg-[#4be953b7] backdrop-blur-sm rounded py-3 px-5 flex items-center justify-between z-10'>
            <h2 className='text-white'><strong>{alertData.type}</strong> {alertData.msg}</h2>
            <button onClick={handleClose}><X size={20} color='#fff' /></button>
        </div>
    )
}

export default Alert
