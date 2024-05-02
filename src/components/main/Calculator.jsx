import { useEffect, useState } from "react";
import styles from "./home.module.css";

function calcBmi(weight, height) {
  const convertedHeight = height / 100;
  const bmi = (weight / convertedHeight ** 2).toFixed(1);
  return bmi;
}

const Second = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [status, setStatus] = useState("");
  const [bmi, setBmi] = useState(0);

  function handleWeight(e) {
    setWeight(+e.target.value);
  }

  function handleHeight(e) {
    setHeight(+e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setBmi(calcBmi(weight, height));
  }

  useEffect(
    function () {
      if (!bmi) return;

      if (bmi < 18.5) setStatus("Svorio Trūkumas");
      else if (bmi < 25) setStatus("Sveikas");
      else if (bmi < 30) setStatus("Svorio Trūkumas");
      else if (bmi >= 30) setStatus("Nutukęs");
    },
    [bmi]
  );

  let statusColor;
  if (status === "Svorio Trūkumas") {
    statusColor = "#f8c800";
  } else if (status === "Nutukęs") {
    statusColor = "#ff4b4b";
  } else if (status === "Antsvoris") {
    statusColor = "#ffa24b";
  } else if (status === "Sveikas") {
    statusColor = "#a1f65e";
  }

  return (
    <div className={`${styles.second} container sections-padding`}>
      <div data-aos="zoom-out-down">
        <h2>
          Apskaičiuokite Savo <span>KMI</span>
        </h2>
        <p className={styles.second_subtitle}>
          Lengvai nustatykite savo kūno masės indeksą naudodami mūsų tikslų
          skaičiavimo įrankį.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              min={1}
              placeholder="Svoris / kg"
              value={weight || ""}
              onChange={handleWeight}
              required
            />

            <input
              type="text"
              min={1}
              placeholder="Aukštis / cm"
              value={height || ""}
              onChange={handleHeight}
              required
            />
          </div>
          <div className={styles.calculate_bmi}>
            <p>
              Jūsų KMI yra:{" "}
              <span className={styles.calculate_number}>{bmi || ""}</span>
            </p>
            <p>
              Jūsų svoris yra:
              <span style={{ color: statusColor }}> {status}</span>
            </p>
          </div>

          <button>Apskaičiuoti</button>
        </form>
      </div>
    </div>
  );
};

export default Second;
