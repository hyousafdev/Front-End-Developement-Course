import React from 'react'
import Columns from './FragmentsColumns'

function Table() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;