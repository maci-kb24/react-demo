import React from 'react';
import styles from './Table.module.css';

const TableHeader = () => {
    return (
        <thead className={styles.thead}>
            <tr>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Job</th>
                <th className={styles.th}>Remove</th>
            </tr>
         </thead>
    )
}

const TableBody = (props) => {

    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)} className={styles.button}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

const Table = (props) => {

    const {characterData, removeCharacter} = props

    return (
        <table className={styles.table}>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )  
}
    
export default Table