import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import { projects } from './data/projects';


export default function ProjectModal({ openFunction }) {

    const [modalOpen, setModalOpen] = useState(false)
    const [image, setImage] = useState()

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
                    <div className='closeDiv'><FiX style={{ cursor: 'pointer' }} onClick={closeModal} /></div>
                    <div className='modalInfo'>
                        <h3>
                            {projects.name}
                        </h3>
                        <h4>A todo application</h4>
                        <p>{projects.paragraph}</p>
                        <div className='modalImages'>
                            {projects.images.map((imgs, index) => (
                                <img key={index} src={require (`${imgs.url}`)} alt={`'${imgs.alt}'`} />


                            ))}
                        </div>
                    </div>


                </div>
            </Modal>
        </div>
    )
}
