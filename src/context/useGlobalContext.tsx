"use client";

import { useRef } from "react";
import { useCarsStore } from "@/store/zustand";

export function StoreInitializer({ cars }: { cars: any }) {
    const data = JSON.parse(cars.value);
    const { addCars } = useCarsStore();
    const isInitialized = useRef(false);

    if (!isInitialized.current) {
        addCars(data);
        isInitialized.current = true;
    }
    return null;
}
