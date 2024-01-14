//2 different syntax

//a)
const activeUsers: string[] = []
activeUsers.push('john')
console.log(activeUsers);

//b)
const passiveUsers: Array<string> = ['dani']
console.log(passiveUsers);


const ageList: number[] = [34, 55, 77]
console.log(ageList);

const isActive: boolean[] = [true, false]
console.log(isActive[0]);

//mix with object types
type Point = {
    x: number;
    y: number;
}

const coords: Point[] = []
coords.push({ x: 23, y: 88 })
console.log(coords);


//multidimensional arrays

// two-dim array
const board: string[][] = [["X"], ["0"]]
// three-dim array
const three: string[][][] = [[["X"]]]

