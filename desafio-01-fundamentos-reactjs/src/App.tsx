import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskType } from './components/Task';


const tasks: TaskType[] = [
  // {
  //   id: uuidv4(),
  //   title: 'Task 1 Lorem ipsum',
  //   isComplete: false
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Task 2 ipsum dolor sit',
  //   isComplete: false
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Task 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid omnis sed aperiam qui illum, deserunt ducimus.',
  //   isComplete: true
  // }
];

function App() {
  return (
    <div className={styles.main}>
      <Header />     
      <div className={styles.wrapper}>
      <main><Task tasks={tasks} /></main>
      </div>
    </div>
  )
}

export default App
