import React, { Component } from 'react'
import {connect} from 'react-redux'




class XucXac extends Component {
     renderDiem = () =>{
         let tongDiem = 0;
         let ketQua  = "";
         for (let index of this.props.stateXucXac.xucXac){
             tongDiem += index.diem
         }
         ketQua = tongDiem > 11 ? "Tài" : "Xỉu"
         return `${tongDiem} điểm   -  ${ketQua}`
     }


    render() {
    return (
      <div className='container'>
          <div className="row mt-5 text-center">
              <div className="col-4">
                  <button onClick={() =>{
                      this.props.TaiXiu(true)
                  }} className="btn bg-primary">
                      <div className="display-4 p-5 text-white bg-primary">tài</div>
                  </button>
              </div>
              <div className="col-4">
                    {this.props.stateXucXac.xucXac.map((item, key) =>{
                        
                        return <img  key={key} src={item.hinhAnh} alt="..." width={50} className="mr-2" />
                    })}
                    <h3 className="text-success display-3">{this.renderDiem()}</h3>
              </div>
              <div className="col-4">
                <button onClick={() =>{
                    this.props.TaiXiu(false)
                }} className="btn bg-primary">
                      <div className="display-4 p-5 text-white bg-primary">xỉu</div>
                  </button>
              </div>
          </div>
      </div>
    )
  }
}




const mapStateToProps = (rootReducer) =>{
    return {
        stateXucXac : rootReducer.baiTapTaiXiuReducer
    }
}


const mapDispatchToProps  = (dispatch) =>{
    return {
        TaiXiu : (banChon) =>{
            const action ={
                type: "BAN_CHON",
                banChon
            }
            dispatch(action)
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(XucXac)
