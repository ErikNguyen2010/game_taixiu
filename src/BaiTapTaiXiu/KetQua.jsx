import React, { Component } from 'react'
import {connect} from 'react-redux'


class KetQua extends Component {
  render() {
      let {banChon, tongThang, tongChoi} = this.props.stateTaiXiu
    return (
      <div className='container text-center'>
          <div>
              <p className='display-4'>
                  bạn chọn: <span className='text-warning'>{banChon ? "Tài" : "Xỉu"}</span>
              </p>
          </div>
          <div>
              <p className='display-4'>
                  tổng số bàn thắng: <span className='text-success'>{tongThang}</span>
              </p>
          </div>
          <div>
              <p className='display-4'>
                  tổng số bàn chơi: <span className='text-primary'>{tongChoi}</span>
              </p>
          </div>
          <div>
              <button onClick={() =>{
                  this.props.playGame()
              }} className="btn btn-success">
                 <div className="p-3 display-3 bg-success text-white">play game</div>
              </button>
          </div>
      </div>
    )
  }
}



const mapStateToProps = (rootReducer) => {
    return {
        stateTaiXiu : rootReducer.baiTapTaiXiuReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        playGame :() =>{
            const action = {
                type: "PLAY_GAME1"
            }
            dispatch(action)
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(KetQua)