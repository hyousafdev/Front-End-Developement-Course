import React from 'react'

function InlineCSS() {
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
    return (
        <div>
            {/* Module not defined as child */}
            {/* <h1 className={styles.success}>Success</h1> */}

            <h1 className='error'>Error</h1>

            <h1 style={heading}>Inline CSS</h1>
        </div>
    )
}

export default InlineCSS
