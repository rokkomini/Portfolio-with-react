import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";


export default function ProjectModal({ openFunction }) {

    const [modalOpen, setModalOpen] = useState(false)

    function openModal() {
        setModalOpen(true)
    }


    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div>
            <button className='project-link' onClick={openModal}>Click to open</button>
            <Modal isOpen={modalOpen}>
                <div className='modalContainer'>
                    <div className='closeDiv'><FiX style={{ cursor: 'pointer' }} onClick={closeModal}/></div>
                    <div className='modalInfo'>
                        <h3>
                            Rubrik
                        </h3>
                        <h4>Underrubrik</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis, molestiae ipsum dolorum pariatur aliquam in, aliquid magni aperiam quaerat vitae voluptatum nemo nesciunt doloremque iste obcaecati perspiciatis recusandae adipisci.</p>
                        <div className='modalImages'><img src="" alt="" /> <img src="" alt="" /></div>
                    </div>
                    
                    
                </div>
            </Modal>
        </div>
    )
}
