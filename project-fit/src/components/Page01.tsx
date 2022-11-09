import styles from './Page01.module.css'

export function Page01() {
  return (
    <section>
      <header>
        <div className={styles.boxTittle}>
          <div>menu</div>
          <div>foto da logo</div>
          <h1>Jereimas Lopes</h1>
        </div>
      </header>
      <body>
        <div className={styles.boxAnalise}>
          <h1>analise</h1>
          <h2>kgk</h2>
          <p>Nesta aba consiguirá ver todo os gráficos de análises e desenvolvimento</p>
        </div>
        <div className={styles.boxInfo}>
          <h1>info</h1>
          <p>Digite todas as informações nesta aba</p>
        </div>
        <div className={styles.sectionPrescricao}>
          <div className={styles.boxPrescricao}>Periodizacao</div>
          <div className={styles.boxPrescricao}>Treino auto</div>
          <div className={styles.boxPrescricao}>Treino manual</div>
        </div>
        <div className={styles.boxNutricao}>
          <h1>nutriçao</h1>
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