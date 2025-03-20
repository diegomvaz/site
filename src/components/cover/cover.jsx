import React from 'react'
import { default as documentIcon } from './../../assets/document.svg';
import { default as imageCover } from './../../assets/cover.jpg';
import './cover.css'


export default function Cover() {
    return (
        <div className='cover' id='cover'>
            <div className='cover-conteiner'>
                <div className='hello content'>
                    Olá! Me chamo Diego Vaz
                </div>
                <div className='cover-title content'>
                    Economista e Programador
                </div>
                <div className='description content'>
                    Crio soluções de Dados/TI voltadas para o Mercado Financeiro
                </div>
                <button className='download content'>
                    <img className='icon' src={documentIcon} />
                    <div>Download Currículo </div>
                </button>
                <div className='skills content'>
                    <div className='skills-card'>
                        <div className='skills-number'>13+</div>
                        <div className='skills-title'>Anos de Experiência em Mercado Financeiro</div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-number'>4+</div>
                        <div className='skills-title'>Formações em Economia e TI</div>
                    </div>
                    <div className='skills-card'>
                        <div className='skills-number'>3+</div>
                        <div className='skills-title'>Anos de Experiência em Dados</div>
                    </div>
                </div>
            </div>
            <img className='image' src={imageCover} />
        </div>
    )
}
