import React, { useEffect, useState } from 'react';
import { getCarBrands, getCarModelsByBrand, searchCar } from '../../services/CarService';
import CarSearchCard from './CarSearchCard';

/**
 * Container component for card search card.
 */
const CarSearchCardContainer = () => {
    const [carBrands, setCarBrands] = useState([]);
    const [carModels, setCarModels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getCarBrands()
            .then((data) => setCarBrands(data))
            .finally(() => setIsLoading(false));
    }, []);

    const onBrandSelect = (brandId) => {
        setIsLoading(true);
        setCarModels([]);
        getCarModelsByBrand(brandId)
            .then((data) => setCarModels(data))
            .finally(() => setIsLoading(false));
    }

    return (
        <CarSearchCard
            isLoading={isLoading}
            carBrands={carBrands}
            carModels={carModels}
            onBrandSelect={onBrandSelect}
            onSubmit={searchCar}
        />
    )
}

export default CarSearchCardContainer;
