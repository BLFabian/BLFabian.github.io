
var currentTab = 'solution';


function createDot(containerName) {
    var targetContainer = document.getElementById(containerName);
    var newDot = document.createElement('div');
    newDot.classList.add('contentDot', containerName + 'dot');
    targetContainer.append(newDot);
}

function electricityCarbon() {
    var targetTitle = document.getElementById('electricity').querySelector('.headerTitle');
}

document.getElementById('solutionTab').addEventListener("click", function () {
    activeTab('solution');
});
document.getElementById('researchTab').addEventListener("click", function () {
    activeTab('research');
});
document.getElementById('aboutTab').addEventListener("click", function () {
    activeTab('about');
});
document.getElementById('contactTab').addEventListener("click", function () {
    activeTab('contact');
});

function activeTab(tabName) {
    var oldTab = document.getElementById(currentTab + 'Tab');
    var newTab = document.getElementById(tabName + 'Tab');
    var tabTab = document.getElementById("tabTab");
    var contentContent = document.getElementById('contentContainer');

    var oldContent = document.getElementById(currentTab + 'Content');
    var newContent = document.getElementById(tabName + 'Content');

    oldTab.classList.toggle('currentTab');
    newTab.classList.toggle('currentTab');

    oldContent.classList.toggle('currentContent');
    newContent.classList.toggle('currentContent');

    contentContent.classList.toggle(currentTab + 'Contented');
    contentContent.classList.toggle(tabName + 'Contented');

    tabTab.classList.toggle(currentTab + 'Tabbed');
    tabTab.classList.toggle(tabName + 'Tabbed');
    currentTab = tabName ;
}

createDot('processing');
createDot('storage');
createDot('transfer');
electricityCarbon() 