"use client";

import { useCarsStore } from "@/store/zustand";

import React from "react";

const Table = () => {
    const { cars } = useCarsStore();
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="font-bold text-5xl text-center underline pt-4">
                Datos desde contexto Global
            </h1>
            <div className="p-8 grid grid-cols-5 gap-2">
                {!!cars &&
                    cars.map(({ userId, id, title, completed }: any) => (
                        <article key={id} className="border-white border-2 p-2">
                            <h2>Titulo: {title}</h2>
                            <p>UserID: {userId}</p>
                            <p>
                                Estado:{" "}
                                {completed ? "Completado" : "Incompleto"}
                            </p>
                        </article>
                    ))}
            </div>
        </div>
    );
};

export default Table;
