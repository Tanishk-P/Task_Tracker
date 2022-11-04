import { useState,useEffect } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
// import Button from './Button'
import {Link} from 'react-router-dom'

function TaskDetails() {
    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState({})
    const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if(res.status === 404 ) {
                navigate('/')
            }

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    })


    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <hr></hr>
            <h4>{task.text}</h4>
            <p>{task.day} at {task.time}</p>
            <p>{task.description} </p>
            {/* <Button text='Go Back' onClick={() => {
                navigate(-1)
            }} /> */}
            <Link to='/' onClick={() => {
                navigate(-1)
            }}>Go Back</Link>          
            <hr></hr>

        </div>
    )
}

export default TaskDetails