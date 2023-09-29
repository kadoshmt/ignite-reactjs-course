import styles from './Task.module.css'
import clipboard from '../assets/clipboard.svg'
import { Trash, PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
    tasks: TaskType[]
}

export function Task({tasks}: TaskProps) {

    const [newTaskText, setNewTaskText] = useState('');
    const [tasksList, setTasksList] = useState(tasks); 
    
    const completedTasks = useMemo(() => {
        return tasksList
          .filter((task) => {
            return task.isComplete === true;
          })
          .length.toString();
      }, [tasksList]);

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        const newTask = {id: uuidv4(), title: newTaskText, isComplete: false}
        setTasksList([...tasksList, newTask])
        setNewTaskText('');
    }   

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }
    
    function handleCompleteTask(event: ChangeEvent<HTMLInputElement>) {        
        const taskId = event.target.value;        
        const modifiedTasks = tasksList.map(task => {
            return task.id === taskId ? {...task, isComplete: !task.isComplete } : task;
        })      
        setTasksList(modifiedTasks);
    }

    function deleteTask(taskId: string){
        const modifiedTasks = tasksList.filter(task => {
            return task.id !== taskId
        })

        setTasksList(modifiedTasks);
    }    

  return (
    <>
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                value={newTaskText}
                onChange={handleNewTaskChange}
                required
            />
            <button type='submit'>Criar<PlusCircle size={24} /></button>
        </form>

        <header className={styles.header}>
            <div className={styles.created}>
                Tarefas criadas<span>{tasksList.length}</span>
            </div>
            <div className={styles.finished}>
            Concluídas
            { tasksList.length === 0 && <span>0</span> }
            { tasksList.length > 0 &&  <span>{completedTasks} de {tasksList.length}</span> }
            
            </div>
        </header>
        { tasksList.length === 0 &&            
            <div className={styles.clipboard}>
                <img src={clipboard} alt="ícone clipboard" width="58" />
                <p><b>Você ainda não tem tarefas cadastradas</b></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>            
        }

        {tasksList.map(task => {            
            return (
                <div className={styles.item} key={task.id}>
                    <input type="checkbox" defaultChecked={task.isComplete} value={task.id} onChange={handleCompleteTask}></input>
                    <p className={task.isComplete ? styles.checked : ""}>{task.title}</p>
                    <button title="Deletar tarefa"> <Trash size={20} onClick={() => deleteTask(task.id)} /> </button>
                </div>
            )
        })}
        
    </>
  );
}
