import React from 'react'
import './contact.css'


function Contact() {

    return (
        <>
            <div className='contact-container content' id='contact'>

                <div className='subheader'>Contato</div>
                <div className='line'></div>

                <div className='contact-description'>
                    Gostou do meu trabalho e quer conversar sobre ideias ou projetos?
                    Vamos tomar um café virtual! Me mande uma mensagem e vamos criar algo juntos.
                </div>

                <a
                    href='https://diegovaz.notion.site/ebd/1c6a6330171c803fa7cbc6700b91a7ba'
                    target='_blank'
                >
                    <div className='form-button' >Mande uma mensagem </div>
                </a>

                <div className='forma' />
            </div>
        </>
    )
}

export default Contact