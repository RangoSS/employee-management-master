import React, { useState } from "react";
import Title from './../Title'
const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({
        name: "",
        definition: "",
        priority: "Low",
        status: "Incomplete",
        dueDate: "",
    });
    const [filter, setFilter] = useState({
        dueDate: "",
        priority: "",
        status: "",
    });

    const handleTaskInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask({
            name: "",
            definition: "",
            priority: "Low",
            status: "Incomplete",
            dueDate: "",
        });
    };

    const updateTask = (index, updatedTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const filteredTasks = tasks.filter((t) => {
        const matchesDueDate = filter.dueDate ? t.dueDate === filter.dueDate : true;
        const matchesPriority = filter.priority ? t.priority === filter.priority : true;
        const matchesStatus = filter.status ? t.status === filter.status : true;
        return matchesDueDate && matchesPriority && matchesStatus;
    });

    return (
        <div className="container">
            <Title subTitle='Wellcome back' title='We are delighted to have you' />
            <h2>Task Planner</h2>

            {/* Task Form */}
            <div className="form_top">
                <input className="form-control regis"
                    type="text"
                    name="name"
                    placeholder="Task Name"
                    value={task.name}
                    onChange={handleTaskInputChange}
                />
                <input className="form-control regis"
                    type="text"
                    name="definition"
                    placeholder="Task Definition"
                    value={task.definition}
                    onChange={handleTaskInputChange}
                />
                <select className="form-select custom-select" name="priority" value={task.priority} onChange={handleTaskInputChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select className="form-select custom-select" name="status" value={task.status} onChange={handleTaskInputChange}>
                    <option value="Incomplete">Incomplete</option>
                    <option value="Complete">Complete</option>
                </select>
                <input className="form-control"
                    type="date"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleTaskInputChange}
                />
                <button className="btn btn-dark mt-3 mb-3" onClick={addTask}>Add Task</button>
            </div>

            {/* Filter Tasks */}

            <h3>Filter Tasks</h3>
            <div className="d-flex">

                <input className="form-control"
                    type="date"
                    placeholder="Filter by Due Date"
                    value={filter.dueDate}
                    onChange={(e) => setFilter({ ...filter, dueDate: e.target.value })}
                />
                <select className="form-select custom-select"
                    value={filter.priority}
                    onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
                >
                    <option value="">All Priorities</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select className="form-select custom-select"
                    value={filter.status}
                    onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                >
                    <option value="">All Status</option>
                    <option value="Incomplete">Incomplete</option>
                    <option value="Complete">Complete</option>
                </select>
            </div>

            {/* Display Tasks */}
            <div>
                <h3 className="mt-3 mb-3">Tasks</h3>
                {filteredTasks.map((t, index) => (
                    <div key={index}>
                        <h4>{t.name}</h4>
                        <p>{t.definition}</p>
                        <p>Priority: {t.priority}</p>
                        <p>Status: {t.status}</p>
                        <p>Due Date: {t.dueDate}</p>
                        <button className="btn btn-danger me-2" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="btn btn-success" onClick={() => updateTask(index, { ...t, status: "Complete" })}>
                            Mark as Complete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
