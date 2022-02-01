import styles from "./styles.module.css";

export function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      <p> {props.description}</p>
    </div>
  );
}
