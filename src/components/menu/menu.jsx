import React from 'react'
import './menu.css'

export default function Menu() {
    return (
        <div className='menu'>
            <div className='name-container'>
                <div className='letters title'>DV</div>
            </div>
            <div className='sandwich'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='menu-container content'>
                <div>Home</div>
                <div>Sobre mim</div>
                <div>Currículo</div>
                <div>Habilidades</div>
                <div>Projetos</div>
                <div>Depoimentos</div>
                <button className='button content'>Contato</button>
            </div>
        </div>
    )
}
