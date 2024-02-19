//type narrowing when working with primitives

function triple(value: number | string){
	if(typeof value === "string"){
		return value.repeat(3)
	}
	if (typeof value === "number"){
		return value *3
	}

}

// console.log(triple(2))


// Truthiness Guards

const letterArray = ['a','b','c']

function printLetters(word:string | null){
	if(!word){
		//if word is null, don't loop over it
		console.log('No word was provided!')
	}
	else{
		//only loop if word exists/ is truthy
		letterArray.forEach(letter => console.log(letter))
	}
}

// printLetters()


// Equality Guards
// test is only valid if value and data type are equal

function checkIfvalid(x:string | number,y:string|number){
	if(x===y){
		console.log(x,y)
	}else{
		throw new Error('unequal')
	}

}
// checkIfvalid(1,1)



// Narrowing Objects with the "in" operator
// Complex Types --> Objects
// write a function to figure out "duration"
// if we're using "Movie" than just return the interface Movie duration, else we check TVShow

interface Movie{
	title:string;
	duration:number
}

interface TVShow{
	title:string;
	numEpisodes:number;
	episodesDuration:number;
}

function getRuntime(media: Movie | TVShow){
	if("numEpisodes" in media){
		return media.numEpisodes * media.episodesDuration + " it's a tv show"
	}

	return media.duration + " it's a movie"
}

//what is it: movie or tv show?
// console.log(getRuntime({title:'Matrix', duration: 148}))
// console.log(getRuntime({title:'Vikings', numEpisodes:8, episodesDuration:45}))



// using js - "instanceof" for type narrowing

function getDate(date: string | Date){
	if(date instanceof Date){
		console.log(date.toUTCString())
	}else{
		console.log(new Date(date).toUTCString())
	}
}

// getDate("Mon, 19 Feb 2024 22:36:59")














