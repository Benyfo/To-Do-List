import { useState } from "react";
import ModalAddTask from "./ModalAddTask";

const TaskPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  type TTaskLevel = 1 | 2 | 3 | "high" | "medium" | "low";

  interface ITask {
    readonly id: number; // Task id
    title: string; // Task title
    isCompleted: boolean; // True | False => default false
    description?: string; // For more description of task
    Level?: TTaskLevel; // Task levels
  }

  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: "Task 1",
      isCompleted: false,
      description: "Learn TypeScript",
      Level: "high",
    },
    {
      id: 2,
      title: "Task 2",
      isCompleted: true,
      description: "Go to gym",
      Level: "medium",
    },
    {
      id: 3,
      title: "Task 3",
      isCompleted: false,
      description: "Do homeworks",
      Level: 3,
    },
  ]);

  const addTask = (title: string, description: string, Level: TTaskLevel) => {
    const newTask: ITask = {
      id: tasks.length > 0 ? tasks.length + 1 : 1,
      title,
      isCompleted: false,
      description: description || "No description",
      Level: Level ?? "low",
    };
    setTasks([...tasks, newTask]);
    // console.log("newTask:", newTask);
    // console.log("tasks:", tasks);
  };

  // function to toggle task completion status
  const toggleTaskStatus = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      }),
    );
  };

  //   function to toggle modal visibility
  const handleOpenModal = () => {
    setModalOpen((prev) => !prev);
  };

  //   function to toggle modal disappear
  const handleCloseModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div className="h-full bg-[#9F7E69]">
      <h1 className="font-bold p-2 pb-4 border">To Do List Manager</h1>

      <div className="flex justify-center p-3 border">
        <button
          className="bg-[#F7FFE0] transition-all duration-300 hover:scale-105 text-[#9F7E69] font-bold py-2 px-4 rounded z-50"
          onClick={handleOpenModal}
        >
          Click at me to add Task
        </button>
      </div>

      <div className="w-full h-dvh grid grid-cols-5 gap-5 px-5 py-8 border">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="h-[200px] xl:h-[400px] bg-[#D2BBA0] rounded-lg p-3 flex flex-col justify-between gap-3 shadow-xl relative"
          >
            <h2 className="font-bold text-2xl xl:text-3xl overflow-hidden truncate border-b-2 py-2">
              {task.title}
            </h2>
            <p className="text-sm max-h-10 lg:max-h-60 overflow-hidden">
              {task.description}
            </p>

            <div className="absolute top-0 2xl:top-1">
              <p className="text-[#463239]">{task.Level}</p>
            </div>

            <div className="w-full h-fit flex flex-col justify-center items-center gap-2">
              <div className="w-full border h-0"></div>
              <div className="w-full h-fit p-1 flex justify-center items-center gap-2">
                <p
                  className={`text-xs bg-[#9F7E69] font-semibold w-full px-3 py-1.5 rounded ${task.isCompleted ? "text-[#00CC99]" : "text-[#880044]"}`}
                >
                  {task.isCompleted ? "Completed" : "Not Completed"}
                </p>
                <button
                  onClick={() => toggleTaskStatus(task.id)}
                  className="bg-[#9F7E69] text-[#F7FFE0] font-bold text-[12px] px-3 py-1.1 rounded-full hover:bg-[#463239] transition-colors duration-300"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <ModalAddTask addTask={addTask} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default TaskPage;
