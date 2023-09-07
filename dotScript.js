

function createDot(containerName) {
    var targetContainer = document.getElementById(containerName);
    var newDot = document.createElement('div');
    newDot.classList.add('contentDot', containerName + 'dot');
    targetContainer.append(newDot);
}

function electricityCarbon() {
    var targetTitle = document.getElementById('electricity').querySelector('.headerTitle');
}

createDot('processing');
createDot('storage');
createDot('transfer');
electricityCarbon() 