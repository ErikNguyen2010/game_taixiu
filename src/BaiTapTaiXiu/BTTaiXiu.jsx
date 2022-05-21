import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import style from '../assets/styles/components/BaiTapTaiXiu.module.css'



export default class BTTaiXiu extends Component {
  render() {
    return (
      <div className={`${style['bg-game']}`}>
        <h3 className="text-center display-4 pt-3">Game tài xỉu</h3>
        <XucXac/>
        <KetQua/>
      </div>
    )
  }
}
