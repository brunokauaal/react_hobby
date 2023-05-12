import React from 'react'
import './Hobby.css'


function Hobby() {

    return (
        <>
            <nav>
                <div>

                    <span className='titulo'>Bruno</span>

                        <img id='logo' src="https://th.bing.com/th/id/OIP.JnZNQnDtXsgXncXEAh-J-gHaG7?pid=ImgDet&rs=1" alt="foto do ronie coleman" />

                </div>

            </nav>
            <main>
                <h1 id='recordes'>HOBBY: </h1>
                <section id='sobre'>
                    <div className='texto_sobre'>
                        <p>
                            Olá, meu nome é Bruno e tenho 18 anos. Eu amo treinar e, com apenas 12 meses de treino, consegui levantar 80kg no supino, 420kg no leg press e 200kg no hack leg. Agora, estou me preparando para entrar em uma fase de cutting para definir meu corpo.
                        </p>

                        <video id='video' autoPlay muted loop controls >
                            <source src="src\assets\VIDEO\TRANSFORMAÇAO.mp4" type="video/mp4" />

                        </video>

                    </div>

                </section>
            </main>

        <footer>



        </footer>


        </>


    )



}
export default Hobby;