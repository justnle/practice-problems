type ProductData = {
    brand: string;
    details: string[];
    id: string;
    image: string;
    retailer: string;
    reviews: {
        customer: string;
        review: string;
        score: number;
    }[];
    sales: {
        weekEnding: string;
        retailSales: number;
        wholesaleSales: number;
        unitsSold: number;
        retailerMargin: number;
    }[];
    subtitle: string;
    tags: string[];
    title: string;
    [key: string]:
        | string
        | string[]
        | { customer: string; review: string; score: number }[]
        | {
              weekEnding: string;
              retailSales: number;
              wholesaleSales: number;
              unitsSold: number;
              retailerMargin: number;
          }[];
};

export type { ProductData };
