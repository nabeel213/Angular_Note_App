
form.
    // angular.module('appName', ['formComp']).
    component('formComp', {

        templateUrl: './form-fold/form.component.html',
        controller: function ($scope, myFactory, $state) {
            let $ctrl = this;

            $scope.notes = myFactory.notes();
           

            console.log($scope.notes);

            // $scope.notes = [{
            //     createdOn: 1428237500771,
            //     edit: false,
            //     text: "Hello, This is my Note Application"
            // }];

            $scope.addNote = function () {
                $scope.newNote = {};
                $scope.newNote.createdOn = Date.now();
                $scope.newNote.text = ' ';
                $scope.newNote.edit = true;
                $scope.notes.push($scope.newNote);
                console.log($scope.newNote.text + ' addNote function'); // Test purposes
                $scope.newNote = {};
            }
            $scope.delete = function (i) {
                var r = confirm("Are you sure you want to delete this note?");
                if (r == true)
                    $scope.notes.splice(i, 1);
            }

            $ctrl.notesTwo = '';
            $scope.update = function (i, note) {
                let a = $scope.notes[i].text = note;

                $ctrl.notesTwo = a;

                console.log('Spiderman: ' + $ctrl.notesTwo);
            }
        }
    });

app.factory('myFactory', function () {

    let factoryObject = {};
    factoryObject.myFactoryMethod = function () {
        console.log('this is factorydddddddddd')
    };

    factoryObject.notes = function(){

       return  [{
            createdOn: 1428237500771,
            edit: false,
            text: "Hello, This is my Note Application"

        }];
    } 
    return factoryObject;
});







// controller: function ($scope, myFactory) {
//     let $ctrl = this;

//     // Initial Data
//     $scope.notes = [{
//         createdOn: 1428237500771,
//         edit: false,
//         text: "Hello, This is my Note Application"
//     }];

//     // Add New Note
//     $scope.addNote = function () {
//         $scope.newNote = {};
//         $scope.newNote.createdOn = Date.now();
//         $scope.newNote.text = ' ';
//         $scope.newNote.edit = true;
//         $scope.notes.push($scope.newNote);
//         console.log($scope.newNote.text + ' addNote function');

//         $scope.tempFact1 = myFactory.myFactoryMethod();
//         console.log($scope.tempFact1);

//         $scope.tempFact2 = myFactory.myFactoryMethod2();
//         console.log($scope.tempFact2);

//         $scope.newNote = {};

//     };

//     // Delete Note
//     $scope.delete = function (i) {
//         var r = confirm("Are you sure you want to delete this note?");
//         if (r == true)
//             $scope.notes.splice(i, 1);
//     };

//     // Update Note
//     $scope.update = function (i, note) {
//         $scope.notes[i].text = note;
//         console.log($scope.notes[i]);

//     };

//     $scope.routeFun = function () {

//         let destination = $location.href;
//         console.log('destination');

//     }
// }
// });

// app.factory('myFactory', function () {

// let factoryObject = {};
// factoryObject.myFactoryMethod = function () {
// console.log('this is factory')
// return 10;
// };
// factoryObject.myFactoryMethod2 = function () {
// return 20;
// }
// return factoryObject;
// })





// testApp.factory('myFactory', function () {
//     let randomObject = {};
//     randomObject.myFactoryMethod = function () {
//         let consOut = 'some string'
//         return consOut;
//     };
//     return randomObject;
// });

// testApp.controller('myController', function ($scope, myFactory) {

//     $scope.tempVar = myFactory.myFactoryMethod();
//     console.log($scope.tempVar);
// });


//-------------------------------------------------------