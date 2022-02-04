import {createSlice} from "@reduxjs/toolkit"

function sortByNameFunc(a, b){
    let nameA=a.model.toLowerCase(), nameB=b.model.toLowerCase()
    if (nameA < nameB)
        return -1
    if (nameA > nameB)
        return 1
    return 0
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        deleteAll: (state, action)=>{
            state.cars = []
        },
        sortByModel:(state, action)=>{
            state.cars = state.cars.sort((a,b)=>sortByNameFunc(a, b))
        },
        sortByPrice:(state, action)=>{
            state.cars = state.cars.sort((a, b)=>a.price > b.price?1:-1)
        },
        sortByYear:(state, action)=>{
            state.cars = state.cars.sort((a, b)=>a.year > b.year?1:-1)
        },

    },
    extraReducers: {}
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, deleteAll, sortByModel, sortByPrice, sortByYear} = carSlice.actions;
export default carReducer;