import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import parse from 'html-react-parser';


export default function ProjectModal({ openFunction, project }) {

    const [modalOpen, setModalOpen] = useState(false)

    function openModal() {
        setModalOpen(true)
    }

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div>
            <button className='project-link' onClick={openModal}>See project</button>
            <Modal isOpen={modalOpen}>
                <div className='modalContainer'>
                    <div className='closeDiv'><FiX style={{ cursor: 'pointer' }} onClick={closeModal} /></div>
                    <div className='modalInfo'>
                        <h2>
                            {project.name}
                        </h2>
                        <p>{parse(project.about)}</p>
                        <p></p>
                        <div className='modalImages'>
                            {project.images.map((imgs, index) => (
                                <img key={index} src={require(`${imgs.url}`)} alt={`'${imgs.alt}'`} />
                            ))}
                        </div>
                    </div>


                </div>
            </Modal>
        </div>
    )
}
