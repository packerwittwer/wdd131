const articles = [
	{
		id: 1,
		title: 'The Lord of the Rings: 50th Anniversary One Volume Edition',
		date: 'October 21, 2004',
		description:
			'"The Lord of the Rings" is a high-fantasy novel series written by English author J.R.R. Tolkien. The story began as a sequel to Tolkien\'s 1937 fantasy novel "The Hobbit", but eventually developed into a much larger work. The series is set in the fictional world of Middle-earth and follows the quest of the hobbit Frodo Baggins and his companions to destroy the One Ring.',
		imgSrc: 'images/lotr_cover.webp',
		imgAlt: 'Book cover for LoTR',
		ages: '12+',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Dune',
		date: 'August 1965',
		description:
			'"Dune" is a science fiction novel written by Frank Herbert. Set in the distant future amidst a sprawling feudal interstellar empire where planetary fiefdoms are controlled by noble Houses, the story explores the complex and multi-layered interactions of politics, religion, ecology, technology, and human emotion. The narrative primarily follows Paul Atreides, a young noble boy, who is thrust into a dangerous political intrigue when his family relocates to the desert planet Arrakis, the only source of the most valuable substance in the universe, "the spice". A tale of betrayal and survival, "Dune" is a timeless classic in the genre of science fiction.',
		imgSrc:
			'images/dune_cover.webp',
		imgAlt: 'Book cover for Dune',
		ages: '12+',
		genre: 'Science Fiction',
		stars: '⭐⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
			"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
			"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]

var articleSection = document.querySelector('.article');

articles.forEach(article => {
	let info = document.createElement('div')
	info.className = 'info';
	let book = document.createElement('div')
	book.className = 'book';

	let infoContent = `<p>${article.date}</p>
						<p>Recommended Age: ${article.ages}</p>
						<p>${article.genre}</p>
						<p>${article.stars}</p>`
					   
	let bookContent = `<h2>${article.title}</h2>
                    	<img src="${article.imgSrc}" alt="${article.imgAlt}">
                    	<p>${article.description}</p>`

	info.innerHTML = infoContent
	// let infoHolder = document.getElementsByClassName('info')

	book.innerHTML = bookContent
	// let bookHolder = document.getElementsByClassName('book')

	// infoHolder.appendChild(info)
	// bookHolder.appendChild(book)
	articleSection.append(info)
	articleSection.append(book)
});


// articles.forEach((article)=>{
//     // <article> </article>
//     let book = document.createElement('article')

//     let articleContent = `<h1>${article.title}</h1>
//                           <p>${article.description}</p>
//     `
//     book.innerHTML = articleContent

//     let holder = document.getElementById('books')
//     holder.appendChild(book)

//   })