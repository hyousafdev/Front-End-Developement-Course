import React from 'react'
import ReactDOM from 'react-dom';

function PortalsDemo() {
    return ReactDOM.createPortal(
        <h1>
            Portals Demo
        </h1>,
        document.getElementById('portal-root')

       /* <div>
            <h1>Portals Demo</h1>
        </div> */
    )
}

export default PortalsDemo;