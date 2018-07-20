child
    .component('childComp', {

        bindings: {
            notesTwo: '<',
        },
        templateUrl: "./child-fold/displayNotes.html ",
        controller: function ($scope) {
            let $ctrl = this;

            this.$onInit = function () {

            }
            $scope.displayFunction = function () {
            
            }
        }
    })

