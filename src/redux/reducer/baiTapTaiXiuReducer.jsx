const stateDefault = {
    banChon: true,
    tongThang: 0,
    tongChoi: 0,
    xucXac : [
        {hinhAnh: './img/taixiu/3.png', diem: 3,},
        {hinhAnh: './img/taixiu/4.png', diem: 4,},
        {hinhAnh: './img/taixiu/5.png', diem: 5,},
    ]
}


export const baiTapTaiXiuReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case "BAN_CHON" :{
            state.banChon = action.banChon
            return {...state}

        }

        case "PLAY_GAME1" :{
           let newMang = []
           for(let i = 0; i<3; i++){
               let randomSo = Math.floor(Math.random()*6) +1
               let newObject = {hinhAnh: `./img/taixiu/${randomSo}.png`, diem: randomSo}
               newMang.push(newObject)
           }
           state.xucXac = newMang
           let tongDiem = 0;
           for(let index of newMang){
               tongDiem += index.diem
           }
           if((tongDiem > 11 && state.banChon) || (tongDiem < 11 && !state.banChon) ){
               state.tongThang += 1
           }
           console.log(tongDiem, state.tongThang);
           state.tongChoi += 1
           
           return {...state}
        }
        default: return state
    }
}
