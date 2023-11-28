import React, {useState, useEffect} from 'react';
function HookMouse() {
    // state variable
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    //Here we define logMousePosition method and this is accepts an event as an argument
    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }
    //useEffect Hook accepts a function as an argument
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) // Here we put array ,[] or condition component not rendering subsequent like every time
  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse