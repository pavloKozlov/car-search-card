import { getCarBrands, getCarModelsByBrand } from './CarService';
import { BRANDS, MODELS } from './mockData';

describe('CarService', () => {
    describe('getCarBrands', () => {
        it('should resolve promise with the list of brands', () => {
            return getCarBrands()
                .then((data) => {
                    expect(data).toEqual(BRANDS);
                });
        });
    });

    describe('getCarModelsByBrand', () => {
        it('should resolve promise with the list of models for particular brand', () => {
            const brandId = BRANDS[0].id;
            const filteredModels = MODELS.filter((model) => model.brandId === brandId);
            return getCarModelsByBrand(brandId)
                .then((data) => {
                    expect(data).toEqual(filteredModels);
                });
        });

        it('should revolve promise with empty array if the there are no models for particular brand', () => {
            return getCarModelsByBrand('fake-brand-id')
                .then((data) => {
                    expect(data).toEqual([]);
                });
        })
    });
});