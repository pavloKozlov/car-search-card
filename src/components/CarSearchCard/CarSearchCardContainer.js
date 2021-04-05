import React, { useEffect, useState } from 'react';
import { getCarBrands, getCarModelsByBrand, searchCar } from '../../services/CarService';
import CarSearchCard from './CarSearchCard';

/**
 * Container component for card search card.
 */
const CarSearchCardContainer = () => {
    const [carBrands, setCarBrands] = useState([]);
    const [carModels, setCarModels] = useState([]);

    useEffect(() => {
        getCarBrands()
            .then((data) => setCarBrands(data));
    }, []);

    const onBrandSelect = (brandId) => {
        setCarModels([]);
        getCarModelsByBrand(brandId)
            .then((data) => setCarModels(data));
    }

    return (
        <CarSearchCard
            carBrands={carBrands}
            carModels={carModels}
            onBrandSelect={onBrandSelect}
            onSubmit={searchCar}
        />
    )
}

export default CarSearchCardContainer;
