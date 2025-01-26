import ProductData from './stackline_frontend_assessment_data_2021.json';

export const fetchProductData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProductData);
        }, 1500);
    });
};
