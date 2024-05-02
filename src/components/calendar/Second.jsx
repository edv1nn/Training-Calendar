import styles from "./calendar.module.css";

const Second = () => {
  return (
    <div className={`${styles.second} container `} data-aos="zoom-out-down">
      <div className={styles.schedule}>
        <div className={styles.days}>
          <h5>Pirmadienis</h5>
          <h5>Antradienis</h5>
          <h5>Trečiadienis</h5>
          <h5>Ketvirtadienis</h5>
          <h5>Penktadienis</h5>
          <h5>Šeštadienis</h5>
          <h5>Sekmadienis</h5>
        </div>
        <div className={styles.colums}>
          <div>
            <h4>Rytinis bėgimas</h4>
            <p>09.00 - 09.20</p>
            <p>Bėgimas lauke arba ant bėgimo takelio</p>
          </div>
          <div></div>
          <div>
            <h4>Rytinis bėgimas</h4>
            <p>09.00 - 09.20</p>
            <p>Bėgimas lauke arba ant bėgimo takelio</p>
          </div>
          <div></div>
          <div>
            <h4>Rytinė mankšta</h4>
            <p>09.00 - 09.20</p>
            <p>Sesija, skirta pagerinti lankstumą ir ramybę</p>
          </div>
          <div></div>
          <div>
            <h4>Rytinis bėgimas</h4>
            <p>09.00 - 09.20</p>
            <p>Bėgimas lauke arba ant bėgimo takelio</p>
          </div>
        </div>
        <div className={styles.colums}>
          <div>
            <h4>Rytas HIIT</h4>
            <p>09.25 - 09.35</p>
            <p>Intensyvūs intervaliniai energijos pratimai</p>
          </div>
          <div></div>
          <div>
            <h4>Atsispaudimų treniruotė</h4>
            <p>09.25 - 09.35</p>
            <p>
              Įvairių tipų atsispaudimai krūtinės ir rankų raumenims stiprinti
            </p>
          </div>
          <div></div>

          <div>
            <h4>Planko mankšta</h4>
            <p>09.25 - 09.30</p>
            <p>
              Laikykite lentą, kad sustiprintumėte šerdį ir pagerintumėte
              laikyseną
            </p>
          </div>
          <div></div>
          <div>
            <h4>Atsispaudimų treniruotė</h4>
            <p>09.25 - 09.35</p>
            <p>
              Įvairių tipų atsispaudimai krūtinės ir rankų raumenims stiprinti
            </p>
          </div>
        </div>
        <div className={styles.colums}>
          <div>
            <h4>Rytinė joga</h4>
            <p>09.40 - 09.50</p>
            <p>Sesija, skirta pagerinti lankstumą ir ramybę</p>
          </div>
          <div></div>
          <div>
            <h4>Treniruotės su TRX</h4>
            <p>09.40 - 09.50</p>
            <p>
              Pratimai naudojant TRX dirželius, kad sustiprintų šerdį ir
              pagerintų pusiausvyrą
            </p>
          </div>
          <div></div>

          <div>
            <h4>Atsispaudimai</h4>
            <p>09.40 - 09.50</p>
            <p>
              Įvairių tipų atsispaudimai krūtinės ir rankų raumenims stiprinti
            </p>
          </div>
          <div></div>
          <div>
            <h4>Dviračių treniruotė</h4>
            <p>10.00 - 10.30</p>
            <p>
              Intervalinė treniruotė širdies ir kraujagyslių sistemai stiprinti
            </p>
          </div>
        </div>
        <div className={styles.colums}>
          <div>
            <h4>Dviračių treniruotė</h4>
            <p>10.00 - 10.30</p>
            <p>
              Intervalinė treniruotė širdies ir kraujagyslių sistemai stiprinti
            </p>
          </div>
          <div></div>
          <div></div>
          <div></div>

          <div>
            <h4>Presas</h4>
            <p>10.00 - 10.05</p>
            <p>
              Įvairių tipų atsispaudimai krūtinės ir rankų raumenims stiprinti
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Second;
