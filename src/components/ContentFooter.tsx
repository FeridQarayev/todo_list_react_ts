import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   changeActiveFilter,
//   clearCompleted,
// } from '../redux/todoSlice/todoSlice'

const ContentFooter = () => {
//   const items = useSelector((state) => state.todos.items)
//   const dispatch = useDispatch()
//   const activeFilter = useSelector((state) => state.todos.activeFilter)
  return (
    <footer className="footer">
      {/* <span className="todo-count">
        <strong>{items.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault()

              dispatch(changeActiveFilter('all'))
            }}
            className={activeFilter === 'all' ? 'selected' : ''}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault()
              dispatch(changeActiveFilter('active'))
            }}
            className={activeFilter === 'active' ? 'selected' : ''}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault()
              dispatch(changeActiveFilter('complated'))
            }}
            className={activeFilter === 'complated' ? 'selected' : ''}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => {
          dispatch(clearCompleted())
        }}
      >
        Clear completed
      </button> */}
    </footer>
  )
}

export default ContentFooter