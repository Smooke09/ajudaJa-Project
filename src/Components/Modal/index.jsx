import React from "react";
import { Link } from "react-router-dom";

const Modal = ({closeModal, confirmModal, label, labelStrong}) => { 
    return(
        <div className=" w-[40%] fixed bg-[#eee] top-[25%] left-[50%] px-8 py-8 translate-x-[-50%] rounded-lg text-center shadow-md  ">
            <div className="modalContainer">
               
                <div className="pb-8 text-xl ">
                    <h1>{label} <strong>{labelStrong}</strong>?</h1>
                </div>
                <div className="body">
                </div>
                <div className="footer">
                   
                    <button className="border px-8 py-2 rounded-lg text-navFontColor font-bold hover:bg-navBg hover:text-white" onClick={() => closeModal(false)}>Cancelar</button>
                    <button className="px-6 py-2 rounded-lg text-white font-bold ml-2  bg-navBg hover:bg-opacity-0 border hover:text-navFontColor hover:border"><Link href={confirmModal}>Confirmar</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Modal