import { Droppable } from '@hello-pangea/dnd';
import BoardItem from './BoardItem';
import styles from './Column.module.css';

function Column({ status, tasks }) {
    const titles = {
        todo: 'To do',
        doing: 'Doing',
        done: 'Done',
    };

    return (
        <div className={styles.column}>
            <h2>{titles[status]}</h2>
            <Droppable droppableId={status}>
                {(provided) => (
                    <ul
                        className={styles.list}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks.map((task, index) => (
                            <BoardItem
                                key={task.id}
                                id={task.id}
                                task={task}
                                index={index}
                            />
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </div>
    );
}

export default Column;
