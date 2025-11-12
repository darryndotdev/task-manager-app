import { Draggable } from '@hello-pangea/dnd';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './BoardItem.module.css';
import Bookmark from '../../UI/Icons/Bookmark';
import Bin from '../../UI/Icons/Bin';

function BoardItem({ task, index, id }) {
    const { handleDeleteTasks } = useOutletContext();

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Link
                    to={`/app/ticket/${task.id}`}
                    state={{ from: '/app/board' }}
                >
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
                            <div className={styles.bookmark}>
                                <Bookmark />
                                {task.id}
                            </div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleDeleteTasks(id);
                                }}
                            >
                                <Bin fill='var(--colour)' />
                            </button>
                        </div>
                    </li>
                </Link>
            )}
        </Draggable>
    );
}

export default BoardItem;
