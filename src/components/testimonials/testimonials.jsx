import React from 'react'
import './testimonials.css'

function Testimonials() {
    return (
        <div className='testimonials-container testimonials-text content' id='testimonials'>
            <div className='subheader'>Depoimentos</div>
            <div className='line'></div>
            <div className='testimonials-description'>
                Nesta seção, você encontra depoimentos de colegas, clientes e
                parceiros que compartilham suas experiências de trabalhar comigo.
                São palavras que refletem um pouco da minha jornada e das
                colaborações que construímos juntos.
            </div>

            <div className='testimonials-cards'>
                <div className='testimonial-card'>
                    <div className='testimonial-text'>
                        "Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat dolor enim duis veniam
                        ipsum anim magna sunt elit fore quem dolore labore illum veniam."
                    </div>
                    <div className='person-name'>Mário Sergio Cortela</div>
                    <div className='person-job'>Gestor de Renda Variável</div>
                    <div className='person-company'>XP Investimentos</div>
                </div>
                <div className='testimonial-card'>
                    <div className='testimonial-text'>
                        "Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat dolor enim duis veniam
                        ipsum anim magna sunt elit fore quem dolore labore illum veniam."
                    </div>
                    <div className='person-name'>Fernando Oliveria Gonçalves</div>
                    <div className='person-job'>Gestor de Renda Variável</div>
                    <div className='person-company'>XP Investimentos</div>
                </div>
                <div className='testimonial-card'>
                    <div className='testimonial-text'>
                        "Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat dolor enim duis veniam
                        ipsum anim magna sunt elit fore quem dolore labore illum veniam."
                    </div>
                    <div className='person-name'>João da Silva Junior</div>
                    <div className='person-job'>Gestor de Renda Variável</div>
                    <div className='person-company'>XP Investimentos</div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
