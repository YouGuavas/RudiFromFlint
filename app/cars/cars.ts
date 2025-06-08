import blue_car from '../../public/cars/blue_car.svg';
import red_car from '../../public/cars/red_car.svg';
import green_car from '../../public/cars/green_car.svg';
import black_car from '../../public/cars/black_car.svg';

const cars = [
	{
		src: blue_car.src,
		make: 'Blue',
		model: 'Car One',
		year: 1994,
		mileage: 150000,
		category: 'Dignified Ride',
	},
	{
		src: red_car.src,
		make: 'Red',
		model: 'Car One',
		year: 1998,
		mileage: 150000,
		category: 'Dignified Ride',
	},
	{
		src: black_car.src,
		make: 'Black',
		model: 'Car One',
		year: 2005,
		mileage: 170000,
		category: 'Dignified Ride',
	},
	{
		src: green_car.src,
		make: 'Green',
		model: 'Car One',
		year: 2011,
		mileage: 180000,
		category: 'Dignified Ride',
	},
	{
		src: blue_car.src,
		make: 'Blue',
		model: 'Car Two',
		year: 2024,
		mileage: 50000,
		category: 'Dignified Ride',
	},
];
const filters = [{ category: 'Blue', models: [cars[0], cars[5]] }];
export { cars, filters };
