import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { FiX } from "react-icons/fi";
import parse from 'html-react-parser';


// const navbar = document.getElementsByClassName('navbar')

export default function ProjectModal({ openFunction, project }) {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  if (document.getElementById('navbar') && document.body) {
    if (modalOpen) {
      document.getElementById("navbar").style.display = "none"
      document.body.style.overflow = "hidden"
    } if (!modalOpen) {
      document.getElementById("navbar").style.display = ""
      document.body.style.overflow = "scroll"
    }
  }


  return (
    <div>
      <button className='project-link' onClick={toggleModal}>See project</button>
      <Modal isOpen={modalOpen} ariaHideApp={false}>
        <div className='modalContainer'>
          <div className='closeDiv'><FiX style={{ cursor: 'pointer' }} onClick={toggleModal} /></div>
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
