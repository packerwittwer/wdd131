const vehicles = [
	{
        year: '2020',
		make: 'Honda',
		model: 'Accord',
        image: './images/2020-accord-hero.jpg',
        description: 'The 2020 Honda Accord is a midsize sedan known for its refined driving experience, spacious interior, and impressive fuel efficiency. It features a sleek design with a comfortable and well-equipped cabin, advanced safety features, and a choice of turbocharged and hybrid powertrains. ',
        mpg: '30 City / 38 Hwy',
        cost_per_day: '28'
	},
	{
        year: '2021',
		make: 'Chevrolet',
		model: 'Blazer',
        image: './images/2021-Blazer-exterior.webp',
        description: 'The 2021 Chevy Blazer is a stylish midsize SUV that blends sporty design with practicality. It offers a comfortable and tech-savvy interior, with a range of engine options including a robust V6. The Blazer features a spacious cabin with user-friendly infotainment, modern safety features, and a sporty driving experience, making it a versatile choice for both daily commutes and weekend adventures.',
        mpg: '22 City / 29 Hwy',
        cost_per_day: '34'
	},
	{
        year: '2021',
		make: 'Ford',
		model: 'Bronco',
        image: './images/2021-ford-bronco-23l-black-diamond-123-1627680376.jpg',
        description: 'The Ford Bronco is a rugged and iconic SUV known for its off-road capabilities and distinctive design. Revived in 2021, it combines retro styling with modern technology. The Bronco offers a variety of engine options, including powerful turbocharged engines, and features a robust four-wheel-drive system. It\'s designed to handle tough terrains, while also providing a comfortable and tech-forward interior for everyday driving.',
        mpg: '20 City / 22 Hwy',
        cost_per_day: '41'
	},
	{
        year: '2021',
		make: 'Honda',
		model: 'CR-V',
        image: './2021-Honda-CR-V-VTi-LX-AWD-1.webp',
        description: 'The 2021 Honda CR-V is a compact SUV that offers a blend of practicality, comfort, and efficiency. It features a spacious and well-designed interior with ample cargo space, user-friendly technology, and advanced safety features. The CR-V comes with a turbocharged engine option for a balance of power and fuel efficiency, making it a versatile choice for both urban and long-distance driving.',
        mpg: '28 City / 34 Hwy',
        cost_per_day: '32'
	},
	{
        year: '2022',
		make: 'Hyundai',
		model: 'Elantra',
        image: './images/2022-hyundai-elantra_100816425.jpg',
        description: 'The 2022 Hyundai Elantra is a compact sedan known for its bold design, advanced technology, and impressive fuel efficiency. It features a sleek exterior with a modern, tech-focused interior that includes a large touchscreen infotainment system and a range of driver-assistance features. With its combination of style, technology, and practicality, the 2022 Elantra is a strong contender in the compact sedan segment.',
        mpg: '33 City / 43 Hwy',
        cost_per_day: '29'
	},
	{
        year: '2023',
		make: 'Dodge',
		model: 'Charger',
        image: './images/2023-Dodge-Charger-Review-New-2.jpg',
        description: 'The 2023 Dodge Charger is a full-size sedan that combines muscle car performance with modern comfort. Known for its powerful engine options, including V6 and V8 choices, the Charger delivers strong acceleration and a dynamic driving experience. It features a bold, aggressive design and a spacious interior with advanced technology and infotainment options.',
        mpg: '19 City / 30 Hwy',
        cost_per_day: '33'
	},
	{
        year: '2023',
		make: 'Dodge',
		model: 'Durango',
        image: './images/2023-Dodge-Durango.jpg',
        description: 'The 2023 Dodge Durango is a midsize SUV that offers a powerful performance and a spacious, versatile interior. It features a range of engine options, including a robust V6 and an optional V8 for those seeking high performance. The Durango is known for its bold design and ample cargo space, making it suitable for families and adventurous drivers alike. It also comes with modern technology, including an advanced infotainment system and various driver-assistance features, enhancing both comfort and safety on the road.',
        mpg: '19 City / 26 Hwy',
        cost_per_day: '35'
	},
	{
        year: '2023',
		make: 'Nissan',
		model: 'Rogue',
        image: './images/2023-nissan-rogue_100854694_m.jpg',
        description: 'The 2023 Nissan Rogue is a compact SUV that focuses on comfort, practicality, and advanced technology. It features a sleek exterior design and a spacious, well-appointed interior with ample cargo space. The Rogue is equipped with a turbocharged engine that provides a good balance of performance and fuel efficiency. It comes with modern technology, including a user-friendly infotainment system, and a suite of standard driver-assistance features to enhance safety and convenience.',
        mpg: '30 City / 37 Hwy',
        cost_per_day: '32'
	},
    {
        year: '2023',
		make: 'Chevrolet',
		model: 'Silverado',
        image: './images/2023-silverado-masthead-02.jpg',
        description: 'The 2024 Chevy Silverado is a full-size pickup truck known for its powerful performance, rugged capability, and modern features. It offers a range of engine options, including efficient V6s and robust V8s, catering to various towing and hauling needs. The Silverado features a bold design, a spacious and comfortable interior with advanced technology, and an updated infotainment system. It also includes a range of driver-assistance features to enhance safety.',
        mpg: '24 City /29  Hwy',
        cost_per_day: '51'
    },
    {
        year: '2024',
		make: 'Toyota',
		model: 'Tacoma',
        image: './images/2024_Toyota_Tacoma_Limited_012-copy.jpg',
        description: 'The 2024 Toyota Tacoma is a midsize pickup truck known for its off-road prowess, durability, and practical design. It offers a rugged exterior and a versatile interior that balances functionality with comfort. The Tacoma is available with a range of engine options, including a powerful V6, and comes with advanced off-road features and capabilities.',
        mpg: '21 City / 26 Hwy',
        cost_per_day: '43'
    },
    {
        year: '2024',
		make: 'Chevrolet',
		model: 'Camaro',
        image: './images/2024-camaro-performance-1.jpg',
        description: 'The 2024 Chevy Camaro is a sporty muscle car that combines aggressive styling with high-performance capabilities. It offers a range of engine options, from a fuel-efficient turbocharged four-cylinder to a potent V8, catering to different driving preferences. The Camaro features a sleek, aerodynamic design and a driver-focused interior with modern technology and infotainment options.',
        mpg: '18 City / 29 Hwy',
        cost_per_day: '33'
    },
    {
        year: '2024',
		make: 'Ford',
		model: 'F-150',
        image: './images/2024-Ford-F-150-Platinum.jpg',
        description: 'The 2024 Ford F-150 is a full-size pickup truck renowned for its versatility, power, and advanced technology. It offers a variety of engine choices, including efficient V6 options and a robust V8, as well as hybrid and all-electric variants for different performance and efficiency needs. The F-150 features a durable design, a spacious and comfortable interior, and modern technology such as an advanced infotainment system and driver-assistance features.',
        mpg: '20 City / 26 Hwy',
        cost_per_day: '50'
    },
    {
        year: '2023',
		make: 'Jeep',
		model: 'Gladiator',
        image: './images/',
        description: 'The 2023 Jeep Gladiator is a midsize pickup truck that combines off-road capability with the practicality of a truck bed. It features a rugged, adventurous design and comes with powerful engine options, including a V6. The Gladiator is known for its exceptional off-road performance, supported by features like four-wheel drive and a high ground clearance. Inside, it offers a functional and comfortable cabin with modern technology and infotainment options.',
        mpg: '22 City / 28 Hwy',
        cost_per_day: '48'
    },
    {
        year: '2022',
		make: 'Toyota',
		model: 'Camry',
        image: './images/toyota_camry_toyota-camry_2022-exterior.jpg',
        description: 'The 2022 Toyota Camry is a midsize sedan known for its reliability, comfort, and efficient performance. It features a sleek, modern design and offers a choice of engines, including a fuel-efficient four-cylinder and a more powerful V6. The Camry\'s interior is spacious and well-equipped with user-friendly technology, including a touchscreen infotainment system and advanced safety features.',
        mpg: '28 City / 39 Hwy',
        cost_per_day: '26'
    }
]

export default vehicles