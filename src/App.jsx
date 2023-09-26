import { MoviesGrid } from "./MoviesGrid.jsx";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Peliculas DEVF</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}