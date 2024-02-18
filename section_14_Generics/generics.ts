//Generic Type

type userData<T> = {
	storage: T[];
	addData:(data:T)=>void;
} 

// Concrete Storage

const userStorage:userData<string> = {
	storage:["1","23"],
	addData:(data)=>{
		console.log(data)
	}
}

//console.log(userStorage.addData('hello World'))


// Generic functions

function getRandomElement<T>(list: T[]):T{
	const randIdx = Math.floor(Math.random()* list.length)
	return list[randIdx]
}

const randomElementsStrings = getRandomElement<string>(["a","b","c"])
const randomElementsNumbers = getRandomElement<number>([1,253,595])

//console.log(randomElementsStrings)
//console.log(randomElementsNumbers)

//With Type Inference 
const randomBoolean = getRandomElement([true,false])
//console.log(randomBoolean)


// Generics With Multiple Types

function merge<T,U>(objectA:T, objectB:U){ //no need for declaring what function returns, because of TS-Inference
	return {
		...objectA,
		...objectB
	}
} 

// const userNameAndSettings = merge({name:'John Doe'}, {settings:{id:'1',mode:'dark'})
// console.log(userNameAndSettings)

/*
Type Constraints:

How to make sure, that each of merge-functions params are objects. 
Right now, merge() would even accept a number like 9, even though it's not an obj.
Therefore we have to provide that the merge()-params are objects:
Let's create another generic function that includes this idea.
*/

function mergeOnlyObjects<T extends object, U extends object>(objectA :T, objectB :U){
	return {
		...objectA,
		...objectB
	}
}

const userNameObject:{} = {firstName:'John', lastName:'Doe'}
const userSettingsObject ={settings:{id:1,mode:'system'}} 

const userNameAndSettingsWithOnlyObjects = mergeOnlyObjects({userNameObject},{userSettingsObject})
//const userNameAndSettingsWithOnlyObjects = mergeOnlyObjects({userNameObject},{9}) --> won't work any longer
// console.log(userNameAndSettingsWithOnlyObjects)



// Generic Funcitions constrains an Interface 

interface GermanMap{
	length:number
}

function getMapData<T extends GermanMap>(doubleTheInput:T):number{
	return doubleTheInput * 2
}

/* This also works:

function getMapData(doubleTheInput:GermanMap):number{
	return doubleTheInput * 2
}
*/

const doubledLength = getMapData(429)
// console.log(doubledLength)


//Combine Multiple Interfaces and Generic Functions

interface githubProfile{
	id:string | number;
	username:string;
	password:string;
	achievements:string[];
	isActive:boolean;
}


interface stackoverflowProfile{
	id:string |number;
	username:string;
	password:string;
	achievements:string;
	isActive:string[];
	answerdQs:number;
}


function combineProfiles<T extends githubProfile,U extends stackoverflowProfile>(firstObject,secondObject){
	return {
		...firstObject,
		...secondObject
	}
}

const myGitHubProfile = {
	id:"2f0djl230",
	username:"nightswoosh",
	password:"hashed2dsaj32n",
	achievements:["pushGod","pullThatThang"],
	isActive:true,
}

const myStackoverflowProfile = {
	id:103,
	username:"nightswoosh",
	password:"209dsdj22ßsß1",
	achievements:["first anwsered","ask me"],
	isActive:false,
	answerdQs:9282,
}


const myComboProfiles =combineProfiles({myGitHubProfile},{myStackoverflowProfile})

const pushComboProfilesToArray = [];
pushComboProfilesToArray.push(myComboProfiles)

// console.log(pushComboProfilesToArray)




// Generic Classes

interface Song{
	title:string;
	lyrics:string;
	artist:string;
}

interface Video{
	title:string;
	creator:string;
	resolution:string;
}

class Playlist<T>{
	public queue:T[] = []
	add(element :T){
		this.queue.push(element)
	}
}

const mark_knopfler = new Playlist<Video>
mark_knopfler.add('Long Cool Girl')
console.log(mark_knopfler)








