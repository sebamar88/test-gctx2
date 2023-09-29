import { create } from "zustand";

interface Car {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface CarsStore {
    cars: Car[];
    addCars: (cars: Car[]) => void;
}

export const useCarsStore = create<CarsStore>((set) => ({
    cars: [],
    addCars: (newCars: Car[]) =>
        set((state: CarsStore) => ({ cars: [...state.cars, ...newCars] })),
}));
