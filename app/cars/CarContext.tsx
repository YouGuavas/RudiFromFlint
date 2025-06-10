'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type Car = 'spaceship' | 'default' | 'alternate';

interface CarContextType {
	cars: Car[];
	setCars: (cars: Car[]) => void;
}

export const CarContext = createContext<CarContextType | undefined>(undefined);

export const Provider = ({ children }: { children: React.ReactNode }) => {
	const [cars, setCarState] = useState<Car[]>([]);

	const setCars = (newCars: Car[]) => {
		setCarState(newCars);
	};

	return (
		<CarContext.Provider value={{ cars, setCars }}>
			{children}
		</CarContext.Provider>
	);
};
