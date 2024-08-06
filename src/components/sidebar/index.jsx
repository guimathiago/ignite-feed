import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react"; 

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1624696941338-934bf86c28b4?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" 
      />
    
      <div className={styles.profile}>
        <img src="https://github.com/guimathiago.png"/>
         <strong>Thiago Guimarães</strong>
         <span>Desenvolvedor Full Stack</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar meu perfil
        </a>
      </footer>
    </aside>
  );
}
