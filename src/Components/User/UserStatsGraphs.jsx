import React, { useState } from 'react'
import styles from './UserStatsGraphs.module.css'

const UserStatsGraphs = ({data}) => {

    const [graph,setGraphs] = useState([]);
    const [total,setTotal] = useState(0);


  return (
    <section className={`${styles.graph} animeLeft`}>
        <div className={styles.total}>
            <p>Acessos: {total}</p>
        </div>
    </section>
  )
}

export default UserStatsGraphs