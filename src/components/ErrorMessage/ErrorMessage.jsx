import style from "./ErrorMessage.module.css";

export default function ErrorMessage({ error }) {
  return <div className={style.errorMessage}>{error}</div>;
}