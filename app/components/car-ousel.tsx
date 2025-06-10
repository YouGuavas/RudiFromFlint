import Image from 'next/image';
import Link from 'next/link';
import { cars, filters } from '../cars/cars.ts';
import { CarProviderWrapper } from '../cars/CarProviderWrapper.tsx';
import Card from './Card';
import InteractiveList from './InteractiveList.tsx';

export default function Carousel() {
	return (
		<div className={`flex column center`}>
			<CarProviderWrapper>
				<InteractiveList categories={filters} />
			</CarProviderWrapper>
			<div className={`flex row width-full left-align`}>
				{cars.map((car) => {
					return (
						<Card
							imageSrc={car.src}
							model={car.model}
							make={car.make}
							category={car.category}
							year={car.year}
							mileage={car.mileage}
						/>
					);
				})}
				{/*
			
			<Card
				imageSrc={red_car.src}
				model={`Car`}
				make={`Red`}
				category={`dignified ride`}
				year={1998}
				mileage={160000}
			/>
			<Card
				imageSrc={green_car.src}
				model={`Car`}
				make={`Green`}
				category={`dignified ride`}
				year={2006}
				mileage={150000}
			/>
			<Card
				imageSrc={black_car.src}
				model={`Car`}
				make={`Black`}
				category={`dignified ride`}
				year={2002}
				mileage={170000}
			/>*/}
			</div>
		</div>
	);
}
