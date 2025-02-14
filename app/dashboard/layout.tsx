import React from 'react'
import SideNav from '../ui/dashboard/sidenav'
import styles from '@/app/ui/dashboard.module.css'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}

export default layout
