import { BRANDS, MODELS } from './mockData';
import { resolveWithDelay, getRandomTime } from '../utils/timeUtils';
import '../typedefs';

/**
 * Get the list of car brands.
 * 
 * @return {Promise<CarBrand>} A promise with a list of car brands.
 */
const getCarBrands = () => {
    return resolveWithDelay(getRandomTime(2000), BRANDS);
}

/**
 * Get the list of car models for particular brand.
 * 
 * @param {string} brandId - The brand id.
 * @return {Promise<CarModel>} A promise with a list of car models.
 */
const getCarModelsByBrand = (brandId) => {
    const filteredModels = MODELS.filter((model) => model.brandId === brandId);
    return resolveWithDelay(getRandomTime(3000), filteredModels);
}

/**
 * Submit car search request.
 * 
 * @param {FormData} formData 
 */
const searchCar = (formData) => {
    const data = [];
    for (let item of formData) {
        data.push(item);
    }
    console.log({ data });
}

export {
    getCarBrands,
    getCarModelsByBrand,
    searchCar,
};
