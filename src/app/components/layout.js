'use client'
import mongoose from 'mongoose'
import React, { useEffect } from 'react'

function AppLayout(props) {
  async function connectDb() {
    try {
      const db = await mongoose.connect('mongodb://127.0.0.1:27017/test')
      console.log(db)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    connectDb()
  }, [])
  return <div>{props.children}</div>
}

export default AppLayout
