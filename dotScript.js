

function createDot(containerName) {
    var targetContainer = document.getElementById(containerName);
    var newDot = document.createElement('div');
    newDot.classList.add('contentDot', containerName + 'dot');
    targetContainer.append(newDot);
}

createDot('processing');
createDot('storage');
createDot('transfer');