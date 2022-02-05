import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {carService} from "../services";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch})=>{
        try{
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        }catch (e) {
            console.log(e);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch})=>{
        try{
            await carService.deleteById(id)
            dispatch(deleteCar({id}))
        }catch (e) {
            console.log(e);
        }
    }
)

export const patchCar = createAsyncThunk(
    'carSlice/patchCar',
    async ({data}, {dispatch})=>{
        try{
            console.log("slice\n", data);

            const allCar = await carService.patch(data.id, data)
            dispatch({data: allCar})
        }catch (e) {
            console.log(e);
        }
    }
)



const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            console.log(action.payload.date);
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        sortByModel: (state, action) => {
            state.cars = state.cars.sort((a, b) => sortByNameFunc(a, b))
        },
        sortByPrice: (state, action) => {
            state.cars = state.cars.sort((a, b) => a.price > b.price ? 1 : -1)
        },
        sortByYear: (state, action) => {
            state.cars = state.cars.sort((a, b) => a.year > b.year ? 1 : -1)
        },
        getCarToEdit: (state, action)=>{
            return state.cars.filter(car => car.id === action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = "pending"
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.error = null
            state.cars = action.payload
            console.log(state.cars);
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        }
    }
})

function sortByNameFunc(a, b) {
    let nameA = a.model.toLowerCase(), nameB = b.model.toLowerCase()
    if (nameA < nameB)
        return -1
    if (nameA > nameB)
        return 1
    return 0
}

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, sortByModel, sortByPrice, sortByYear} = carSlice.actions;
export default carReducer;
