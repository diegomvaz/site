import React from 'react'
import './about.css'


export default function About() {
    return (
        <div className='about' id='about'>

            <div className='subheader content'>Sobre Mim</div>
            <div className='line'></div>
            <div className='text content'>
                Diego Vaz é um Analista de Dados com mais de 13 anos de experiência no mercado financeiro.
                Atualmente, trabalha na Icatu Vanguarda, uma das maiores gestoras independentes de recursos do Brasil, onde desenvolve
                soluções de dados e automações de processos visando gerar insights para os tomadores de decisão.
                Formado em Economia pela UERJ e em programação pela UFF, com especializações em Ciência de Dados
                e Engenharia de Software, ele domina ferramentas  como Python, JavaScript, React.js,
                SQL e Power BI. Diego combina habilidades técnicas de  TI e de Mercado Financeiro para
                otimizar rotinas de back/middle office e implementar soluções  estratégicas de BI com foco
                em análise de dados e gestão de conhecimento.
            </div>

            <div className='info content'>
                <div>
                    <div className='info-name'>Idade</div>
                    <div>35</div>
                </div>
                <div>
                    <div className='info-name'>Website</div>
                    <div>diegovaz.com.br</div>
                </div>
                <div>
                    <div className='info-name'>Cidade</div>
                    <div>Rio de Janeiro</div>
                </div>
                <div>
                    <div className='info-name'>Formação</div>
                    <div>Pós-graduação</div>
                </div>
                <div>
                    <div className='info-name'>E-mail</div>
                    <div>martins13@hotmail.com</div>
                </div>
                <div>
                    <div className='info-name'>Social Media</div>
                    <div>martins13@hotmail.com</div>
                </div>
            </div>

        </div>
    )
}
