import { DragDropContext } from '@hello-pangea/dnd';
import { useOutletContext } from 'react-router-dom';
import styles from './Board.module.css';
import Column from './Column';
import BoardLayout from '../../UI/BoardLayout/BoardLayout';

function Board() {
    const { tasks, handleUpdateTasks } = useOutletContext();

    const statuses = ['todo', 'doing', 'done'];

    function onDragEnd(result) {
        const { destination, source, draggableId } = result;

        // if dropped outside any column, ignore
        if (!destination) return;

        // if dropped in same column, do nothing
        if (destination.droppableId === source.droppableId) return;

        // find the task being dragged
        const updatedTask = tasks.find((task) => task.id === draggableId);
        if (!updatedTask) return;

        // update its status to match the new column
        handleUpdateTasks({
            ...updatedTask,
            status: destination.droppableId,
        });
    }

    return (
        <BoardLayout>
            <h1>Board</h1>
            <div className={styles.board}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {statuses.map((status) => (
                        <Column
                            key={status}
                            status={status}
                            tasks={tasks.filter(
                                (task) => task.status === status
                            )}
                        />
                    ))}
                </DragDropContext>
            </div>
        </BoardLayout>
    );
}

export default Board;
