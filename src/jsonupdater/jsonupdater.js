const fs = require("fs");

configFileRaw = fs.readFileSync('./config.json');
configFile = JSON.parse(configFileRaw);

coreJSONFile =configFile.coreFileName;
updateJSONFiles = configFile.updateFiles;
fileOne = updateJSONFiles[0];

const coreJSONRaw = fs.readFileSync("./" + coreJSONFile);
coreJSON = JSON.parse(coreJSONRaw);

const updateJSONRaw = fs.readFileSync("./" + fileOne);
updateJSON = JSON.parse(updateJSONRaw);

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

newKeyName = "address";

var newJSON = getObjects(coreJSON, "replaceme",  updateJSON[newKeyName], newKeyName);
let JSONOutput = JSON.stringify(newJSON, null, 2);
fs.writeFileSync("updatedJSON.json", JSONOutput);