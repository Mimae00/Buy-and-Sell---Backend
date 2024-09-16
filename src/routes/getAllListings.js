import { fakeListings } from "./fake-data";

export const getAllSListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) => {
        return fakeListings;
    }
}