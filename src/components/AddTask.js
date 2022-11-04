import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText ] = useState('')
    const [day, setDay ] = useState('')
    const [time, setTime] = useState('')
    const [description, setDes] = useState('')
    const [reminder, setReminder ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a Task.')
            return
        }

        onAdd({ text, day, time, description, reminder })

        setText('')
        setDay('')
        setTime('')
        setDes('')
        setReminder(false)
    }




    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='add-form'>
            <label>💡 Task :-</label>
            <div>
                <input 
                    type='text' 
                    placeholder='Add Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
        <div className='add-form'>
            <label>📆 Date :-</label>
            <div> 
                <input 
                    type='date' 
                    placeholder='Add Day & Time'
                    value={day} 
                    onChange={(e) => setDay(e.target.value)} />  
            </div>    
        </div>
        <div className='add-form'>
            <label>⏰ Time :-</label>
            <div>   
                <input 
                    type='time' 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} />
            </div>
        </div>
        <div className='add-form'>
            <label>✍ Task Description :-</label>
            <div>
                <textarea
                    placeholder='Add Description' 
                    value={description} 
                    onChange={(e) => setDes(e.target.value)} />
            </div>
        </div>
        
        <div className='add-form form-control-check'>
            <label>📌 Set Reminder</label>
            <input 
                type='checkbox' 
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Task' 
        className='btn btn-block'
        
        />
    </form>
  )
}

export default AddTask
