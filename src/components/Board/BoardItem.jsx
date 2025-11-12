import { Draggable } from '@hello-pangea/dnd';
import { Link } from 'react-router-dom';
import Bookmark from '../../UI/Icons/Bookmark';
import styles from './BoardItem.module.css';

function BoardItem({ task, index }) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Link to={`/app/ticket/${task.id}`}>
                    <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`${styles.item} ${
                            snapshot.isDragging ? styles.dragging : ''
                        }`}
                    >
                        <div className={styles.content}>
                            <h3 className='h4'>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                        <div className={styles.ticket}>
                            <Bookmark />
                            {task.id}
                        </div>
                    </li>
                </Link>
            )}
        </Draggable>
    );
}

export default BoardItem;
