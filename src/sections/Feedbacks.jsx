import React from 'react'
import user1 from '../assets/images/clients_pfp/pfp_morena.png';
import user2 from '../assets/images/clients_pfp/pfp_homem.png';
import user3 from '../assets/images/clients_pfp/pfp_loira.png';
import star from '../assets/images/clients_pfp/star.png';

function Feedbacks() {
  return (
    <section className='flex flex-col items-center mt-[140px] md:mt-0'>
      <div className='flex flex-col items-center'>
        <h1 className='title'>O que nosso <span className='text-main font-bold'>clientes</span> dizem?</h1>
        <p className='subtitle'>Feedbacks de alguns de nossos clientes</p>
      </div>

      <div className='mt-[40px] flex flex-col md:flex-row gap-[40px]'>
        <article className='shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.7)] w-[400px] h-[300px] rounded-[20px] py-[10px] px-[12px]'>
          <div className='flex items-center gap-1'>
            <img src={user1}/>

            <div>
              <p className='font-bold'>Ana Bezerra</p>
              <p>Proprietária de Escola de Idiomas</p>
            </div>
          </div>

          <div className='mt-[10px]'>
            <p className='text-accent text-[13pt]'>
              "O BusiLess transformou nosso fluxo de matrículas. Em menos de 3 meses, triplicamos o numero de alunos sem aumentar o orçamento. Finalmente temos uma agência de marketing trabalhando com a gente."
            </p> 

            <div className='flex mt-[10px] ml-[10px]'>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
          </div>
        </article>

        <article className='shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.7)] w-[400px] h-[300px] rounded-[20px] py-[10px] px-[12px]'>
          <div className='flex items-center gap-1'>
            <img src={user2}/>

            <div>
              <p className='font-bold'>Rodrigo Pires</p>
              <p>CEO de empresa de tecnologia</p>
            </div>
          </div>

          <div className='mt-[10px]'>
            <p className='text-accent text-[13pt]'>
              "A equipe é super acessível e transparente. Sabemos exatamente onde nosso dinheiro vai e o que está gerando retorno. Agora temos clareza no marketing."
            </p> 

            <div className='flex mt-[60px] ml-[10px]'>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
          </div>
        </article>

        <article className='shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.7)] w-[400px] h-[300px] rounded-[20px] py-[10px] px-[12px]'>
          <div className='flex items-center gap-1'>
            <img src={user3}/>

            <div>
              <p className='font-bold'>Juliana Costa</p>
              <p>Proprietária de clínica de estética</p>
            </div>
          </div>

          <div className='mt-[10px] ml-[10px]'>
            <p className='text-accent text-[13pt]'>
              "Antes gastávamos muito em anúncios e não víamos retorno. Com a estratégia que desenvolvemos juntos, nosso custo por cliente caiu quase pela metade, e hoje temos agenda cheia praticamente o mês todo."
            </p> 

            <div className='flex mt-[10px]'>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Feedbacks
