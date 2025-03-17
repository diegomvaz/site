import React, { useState } from 'react'
import './menu.css'

export default function Menu() {
    const [hidden, setHidden] = useState('hidden')
    const toggleHidden = () => {
        hidden == '' ? setHidden('hidden') : setHidden('')
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
                <div>Home</div>
                <div>Sobre Mim</div>
                <div>Currículo</div>
                <div>Habilidades</div>
                <div>Projetos</div>
                <div>Depoimentos</div>
                <button className='button content'>Contato</button>
            </div>
            <div className={`menu-hidden content ${hidden}`}>
                <a href="#cover" onClick={() => toggleHidden()}>Home</a>
                <a href="#about" onClick={() => toggleHidden()}>Sobre Mim</a>
                <a href="#resume" onClick={() => toggleHidden()}>Currículo</a>
                <a href="#skills" onClick={() => toggleHidden()}>Habilidades</a>
                <a href="#projects" onClick={() => toggleHidden()}>Projetos</a>
                <a href="#testimonials" onClick={() => toggleHidden()}>Depoimentos</a>
                <a href="#contact" onClick={() => toggleHidden()}>Contato</a>
            </div>

        </div>
    )
}
