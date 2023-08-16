export const Task = (props) => {
    return (
      <div
        className="task"
        style={{ backgroundColor: props.completed ? "#4ae34aa6" : "white" }}
      >
        <h3>{props.taskName}</h3>
        <button className="complete-button" onClick={() => props.completeTask(props.id)}> &#10004; </button> 
        

        <button className="delete-button" onClick={() => props.deleteTask(props.id)}>
  <img src="/delete.png" alt="Delete" className="delete-icon" />
</button>


      </div>
    );
  };

  