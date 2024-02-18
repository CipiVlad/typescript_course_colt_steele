//Generic Type
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Concrete Storage
var userStorage = {
    storage: ["1", "23"],
    addData: function (data) {
        console.log(data);
    }
};
//console.log(userStorage.addData('hello World'))
// Generic functions
function getRandomElement(list) {
    var randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
var randomElementsStrings = getRandomElement(["a", "b", "c"]);
var randomElementsNumbers = getRandomElement([1, 253, 595]);
//console.log(randomElementsStrings)
//console.log(randomElementsNumbers)
//With Type Inference 
var randomBoolean = getRandomElement([true, false]);
//console.log(randomBoolean)
// Generics With Multiple Types
function merge(objectA, objectB) {
    return __assign(__assign({}, objectA), objectB);
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
function mergeOnlyObjects(objectA, objectB) {
    return __assign(__assign({}, objectA), objectB);
}
var userNameObject = { firstName: 'John', lastName: 'Doe' };
var userSettingsObject = { settings: { id: 1, mode: 'system' } };
var userNameAndSettingsWithOnlyObjects = mergeOnlyObjects({ userNameObject: userNameObject }, { userSettingsObject: userSettingsObject });
function getMapData(doubleTheInput) {
    return doubleTheInput * 2;
}
/* This also works:

function getMapData(doubleTheInput:GermanMap):number{
    return doubleTheInput * 2
}
*/
var doubledLength = getMapData(429);
function combineProfiles(firstObject, secondObject) {
    return __assign(__assign({}, firstObject), secondObject);
}
var myGitHubProfile = {
    id: "2f0djl230",
    username: "nightswoosh",
    password: "hashed2dsaj32n",
    achievements: ["pushGod", "pullThatThang"],
    isActive: true,
};
var myStackoverflowProfile = {
    id: 103,
    username: "nightswoosh",
    password: "209dsdj22ßsß1",
    achievements: ["first anwsered", "ask me"],
    isActive: false,
    answerdQs: 9282,
};
var myComboProfiles = combineProfiles({ myGitHubProfile: myGitHubProfile }, { myStackoverflowProfile: myStackoverflowProfile });
var pushComboProfilesToArray = [];
pushComboProfilesToArray.push(myComboProfiles);
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (element) {
        this.queue.push(element);
    };
    return Playlist;
}());
var mark_knopfler = new Playlist;
mark_knopfler.add('Long Cool Girl');
console.log(mark_knopfler);
