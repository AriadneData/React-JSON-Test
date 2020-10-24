const fs = require("fs");

function getJSONData(filename, path ='./') {
    const JSONRaw = fs.readFileSync(path + filename);
    return JSON.parse(JSONRaw);
};

function getConfigvalue(key, path = './', ) {

    configFileRaw = fs.readFileSync('./' + 'config.json');
    configFile = JSON.parse(configFileRaw);
    return configFile[key]
};

function renameKey ( obj, oldKey, newKey ) {

    objAsString = JSON.stringify(obj);
    objAsString = objAsString.replace( oldKey, newKey);
    updatedObj = JSON.parse(objAsString);

    return updatedObj;
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

    returnObj = renameKey(obj, key, newKey);

    return returnObj;
}


const coreJSONFile = getConfigvalue(key='coreFileName');
const updateJSONFile = getConfigvalue(key='updateFiles');

const coreJSON = getJSONData(coreJSONFile);


let newKeyName = "address";

for (i = 0; i < updateJSONFile.length; i++) {
    var updateJSON = getJSONData(updateJSONFile[0]);
    var newJSON = getObjects(coreJSON, "replaceme",  updateJSON[newKeyName], newKeyName);
    let JSONOutput = JSON.stringify(newJSON, null, 2);
    fs.writeFileSync("updatedJSON" + i + ".json", JSONOutput);
  } 
