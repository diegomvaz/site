import React from 'react'
import './projects.css'
import { default as site } from './../../assets/project-site.jpg';
import { default as link } from './../../assets/link.svg';

function Projects() {
    return (
        <div className='projects-container projects-text content' id='projects'>
            <div className='subheader'>Projetos</div>
            <div className='line'></div>
            <div className='projects-description'>
                Os projetos são a materialização do conhecimento em ação, onde
                ideias ganham vida e desafios se transformam em soluções. Nesta
                seção, compartilho alguns dos trabalhos que desenvolvi, cada um
                representando uma jornada única de análise, criatividade e aprendizado.
                Aqui, você encontrará exemplos práticos de como aplico minhas habilidades
                para resolver problemas reais e gerar valor no mercado financeiro.
            </div>

            <div className='projects-cards'>
                <div className='project-card'>
                    <div className='card-title hidden-info'>Site Pessoal</div>
                    <a href='https://github.com/diegomvaz/site' target='_blank' >
                        <img className='link-icon hidden-info' src={link} />
                    </a>
                    <img className='card-image' src={site} />
                    <div className='card-description hidden-info'>
                        Site pessoal feito em React.js
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
