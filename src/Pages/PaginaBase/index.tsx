import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './PaginaBase.module.scss';

function PaginaBase() {
  return (
    <section className={styles.paginaBase}>
        <Outlet />
    </section>
  )
}

export default PaginaBase