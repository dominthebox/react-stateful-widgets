import React from 'react';

export default function ToDoList() {

    return (
        <div className='to-do-list container'>
            <h2>To Do List</h2>
            <form>
                <input placeholder="enter task">
                </input>
                <button type="submit">add</button>
            </form>
        </div>
    )
}
