import AddTaskModal from "./AddTaskModal";
import NotFound from "./NotFound";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskLIst from "./TaskLIst";
import { useState } from "react";

const Taskboard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      " I want to Learn React such than i can treat it like my slave and make whtever i wanted to do",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  // const [fav,setFav] = useState([defaultTask])
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowAddModal(false);
  };
  //  * working with edit
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  const handleDeleteClick = (taskId) => {
    // console.log('deleted');
    const taskterAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskterAfterDelete);
  };
  const handleAllDeleteClick = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  const handleFav = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite;
    setTasks(newTasks)
  };
 
  const handleSearch=(searchTerm)=> {
    // console.log(searchTerm);

    const filtered = tasks.filter(task=> (
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    setTasks([...filtered])
      setTasks('')
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch}/>
        </div>
        {/* <!-- Search Box Ends --> */}
        <div className=" rounded-xl border border-[rgba(286,206,206,0,12)] bg-[#1d212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => setShowAddModal(true)}
            onDeleteClick={handleAllDeleteClick}
          />
          {
            tasks.length > 0? 
            (<TaskLIst
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteClick}
            onFav={handleFav}
               
          />
            )
            : (
              <NotFound/>
            )
         }
        </div>
      </div>
    </section>
  );
};

export default Taskboard;
