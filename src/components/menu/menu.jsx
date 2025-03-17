import React, { useState } from 'react'
import './menu.css'

export default function Menu() {
    const [hidden, setHidden] = useState('hidden')
    const toggleHidden = () => {
        hidden == '' ? setHidden('hidden') : setHidden('')
    }
    const sessions = {
        'cover': 'Home',
        'about': 'Sobre Mim',
        'resume': 'Currículo',
        'skills': 'Habilidades',
        'projects': 'Projetos',
        'testimonials': 'Depoimentos',
        'contact': 'Contato'
    }

    return (
        <div className='menu'>
            <div className='name-container'>
                <div className='letters title'>DV</div>
            </div>
            <div className='sandwich' onClick={() => toggleHidden()} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='menu-container content'>
                {Object.entries(sessions)
                    .map(([key, value]) => {
                        return (
                            <a
                                className={key == 'contact' ? 'button' : ''}
                                href={'#' + key}
                                key={key}
                            >
                                {value}
                            </a>
                        )
                    }
                    )}
            </div>
            <div className={`menu-hidden content ${hidden}`}>
                {Object.entries(sessions)
                    .map(([key, value]) => {
                        return (
                            <a
                                href={'#' + key}
                                key={key}
                                onClick={() => toggleHidden()}
                            >
                                {value}
                            </a>
                        )
                    }
                    )}
            </div>
        </div>
    )
}
