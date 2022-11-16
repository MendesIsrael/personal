import { ChartLineUp } from 'phosphor-react'
import { ChalkboardTeacher } from 'phosphor-react'
import { ForkKnife } from 'phosphor-react'
import styles from './Page01.module.css'

export function Page01() {
  
  function trocaCor() {
    
  }

  return (
    <section>
      <header>
        <div className={styles.boxTittle}>
          <nav>
            <button className={styles.buttonTemaAzul}></button>
            <button className={styles.buttonTemaPreto}></button>
            <button className={styles.buttonTemaVerde}></button>
          </nav>
          <div>foto da logo</div>
          <h1>Jereimas Lopes</h1>
        </div>
      </header>
      <body>
        <div className={styles.boxBody}>
          <div className={styles.boxAnalise}>
            <h1>ANÁLISE</h1>
            <p>Nesta aba consiguirá ver todo os gráficos de análises e desenvolvimento</p>
            <ChartLineUp size={90}/>
          </div>
          <div className={styles.boxInfo}>
            <h1>INFO</h1>
            <p>Digite todas as informações nesta aba</p>
            <ChalkboardTeacher size={90}/>
          </div>
          <div className={styles.sectionPrescricao}>
            <div className={styles.boxPrescricao}>PERIODIZAÇÃO</div>
            <div className={styles.boxPrescricao}>TREINO AUTO</div>
            <div className={styles.boxPrescricao}>TREINO MANUAL</div>
          </div>
          <div className={styles.boxNutricao}>
            <h1>NUTRIÇÃO</h1>
            <ForkKnife size={90}/>
          </div>
        </div>
      </body>
      <footer>
        <p>instagran
          zap
        </p>
      </footer>
    </section>       
  )
}