const Car = require("../models/Car")
require('dotenv').config()
const addCar = async (car, id) => {
    try {
        car.owner = id;
        return await Car.create({ ...car })
    } catch (error) {
        console.log(error)
        return error
    }
}
const getAllCars = async () => {
    return await Car.find({})
}
const getOneCar = async (id) => {
    return await Car.findById(id).populate('owner')
}
const getProfileCars = async (_id) => {
    return await Car.find({ owner: _id })
}
const editCar = async (id, data) => {
    try {
        return await Car.findByIdAndUpdate(id, { ...data }, { runValidators: true })
    } catch (error) {
        return error
    }
}
const deleteACar = async (id) => {
    await Car.findByIdAndDelete(id)
}
const getTop3Cars = async () => {
    const cars = await Car.find({}).sort({ price: -1 }).limit(3)
    return cars
}


module.exports = {
    getTop3Cars,
    deleteACar,
    editCar,
    getProfileCars,
    getOneCar,
    getAllCars,
    addCar,
}