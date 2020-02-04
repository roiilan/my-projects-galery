"use strict"

var gId = 1000;
var gProjs = [];

function crateProjs() {
    var currTime = new Date().getTime();
    gProjs.push(crateProj('mineSweeper', 'Mine Sweeper', 'improved mine sweeper',
        `The classical mine sweeper gmae with new features. 
    The left mouse button is used to click squares that don't contain mines,
    while the right mouse button is used to flag squares that contain mines.
    find all the mines mark all the flag.`,
        'https://roiilan.github.io/MineSweeper/', currTime, 'Game'));

    gProjs.push(crateProj('mineSweeper22', 'Mine Sweeper222', '222improved mine sweeper',
        `22 The classical mine sweeper gmae with new features. 
         The left mouse button is used to click squares that don't contain mines,
         while the right mouse button is used to flag squares that contain mines.
         find all the mines mark all the flag.`,
        'https://roiilan.github.io/MineSweeper/', currTime, 'Game'));
}


function crateProj(nameId, projName, title, desc, url, publishedAt, category) {
    var proj = {
        'id': nameId,
        'name': projName,
        'title': title,
        'desc': desc,
        'url': url,
        'publishedAt': publishedAt, //long number
        'category': category
    }
    return proj;
}

function getProjs() {
    return gProjs;
}

function getProjById(id) {
    return gProjs.find(proj => proj.id === id);
}