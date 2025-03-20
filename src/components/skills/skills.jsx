import React from 'react'
import './skills.css'
import { default as python } from './../../assets/python.svg';
import { default as database } from './../../assets/database.svg';
import { default as javascript } from './../../assets/javascript.svg';
import { default as react } from './../../assets/react.svg';
import { default as git } from './../../assets/git.svg';
import { default as powerbi } from './../../assets/powerbi.svg';

function Skills() {
    return (
        <div className='skills-container skills-text content' id='skills'>
            <div className='subheader'>Habilidades</div>
            <div className='line'></div>
            <div className='skills-description'>
                No universo dinâmico do mercado financeiro, onde dados e decisões se entrelaçam,
                a combinação de habilidades técnicas e uma visão estratégica clara é o que transforma
                números em insights valiosos. Nesta seção, apresento algumas das ferramentas, técnicas
                e conhecimentos que utilizo para navegar por esse cenário complexo, buscando sempre
                contribuir com soluções que não apenas resolvem problemas, mas também abrem novas oportunidades.
            </div>
            <div className='skills-cards'>
                <div className='skill-card'>
                    <img className='skill-icon' src={python} />
                    Python
                </div>
                <div className='skill-card'>
                    <img className='skill-icon' src={database} />
                    SQL
                </div>
                <div className='skill-card'>
                    <img className='skill-icon' src={javascript} />
                    JavaScript
                </div>
                <div className='skill-card'>
                    <img className='skill-icon' src={react} />
                    React.js
                </div>
                <div className='skill-card'>
                    <img className='skill-icon' src={git} />
                    Git
                </div>
                <div className='skill-card'>
                    <img className='skill-icon' src={powerbi} />
                    Power BI
                </div>
                <div className='skill-card'>
                    {/* <img className='skill-icon' src={''} /> */}
                    Precificação de Ativos
                </div>
                <div className='skill-card'>
                    {/* <img className='skill-icon' src={''} /> */}
                    Fundos de Investimento
                </div>
            </div>
        </div>
    )
}

export default Skills