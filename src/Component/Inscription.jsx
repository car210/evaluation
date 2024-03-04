import style from "./inscrit.module.css";

function Inscription() {
  return (
    <>
      <div className={style.divform}>
        <div className={style.formdiv}>
          <h2>Inscrivez-vous a notre Newsletter!</h2>
        </div>
        <div className={style.formdiv}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <button type="submit">S'inscrire</button>
        </div>
        <h2>Les Starters</h2>
      </div>
    </>
  );
}
export default Inscription;
