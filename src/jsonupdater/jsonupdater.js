const fs = require("fs");

function getJSONData(filename, path ='./') {
    const JSONRaw = fs.readFileSync(path + filename);
    return JSON.parse(JSONRaw);
};

function getConfigvalue(key, path = './', ) {

    let configFileRaw = fs.readFileSync('./' + 'config.json');
    let configFile = JSON.parse(configFileRaw);
    return configFile[key]
};

function renameKey ( obj, oldKey, newKey ) {

    let objAsString = JSON.stringify(obj);
    objAsString = objAsString.replace( oldKey, newKey);

    return JSON.parse(objAsString);
  }

function getObjects(obj, key, newVal, newKey) {
    var newValue = newVal;
    
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, newValue));
        } else if (i == key) {
            obj[key] = newValue;
        }
    }

    var returnObj = renameKey(obj, key, newKey);

    return returnObj;
}


const coreJSONFile = getConfigvalue(key='coreFileName');
const updateJSONFile = getConfigvalue(key='updateFiles');

let coreJSON = getJSONData(coreJSONFile);
let newKeyName = "address";

for (let i = 0; i < updateJSONFile.length; i++) {  
    let coreJSONCopy = JSON.parse(JSON.stringify(coreJSON));
    let updateJSON = getJSONData(updateJSONFile[i]);
    let newJSON = getObjects(coreJSONCopy, "replaceme",  updateJSON[newKeyName], newKeyName);
    let JSONOutput = JSON.stringify(newJSON, null, 2);
    fs.writeFileSync("updatedJSON" + i + ".json", JSONOutput);
  } 
