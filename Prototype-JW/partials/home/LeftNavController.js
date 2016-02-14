/*function LeftNavController() {
    this.data = [ {
        name: 'About Sri Lanka',
        children: [
            {name: 'Attractions '}, 
            {name: 'Events and Festivals'},
            {name: 'Beaches'},
            {name: 'Waterfalls'},
            {name: 'Flora and Fauna'},
            {name: 'Sri Lankan Food'},
        ]
        },
         {
        name: 'Why Sri Lanka',
        children: [{name: 'Sample text'}, {name: 'Sample text'}]
        },
         {
        name: 'Cities in Sri Lanka',
        children: [{name: 'Sample text'}, {name: 'Sample text'}]},
        ]
}*/
var jetwingAdminProtal = angular.module('jetwingAdminProtal',['ngRoute','ngMaterial']);

jetwingAdminProtal.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
/*jetwingAdminProtal.controller('LeftNavController', function() {

		this.data = [ {
        name: 'About Sri Lanka',
        children: [
            {name: 'Attractions '}, 
            {name: 'Events and Festivals'},
            {name: 'Beaches'},
            {name: 'Waterfalls'},
            {name: 'Flora and Fauna'},
            {name: 'Sri Lankan Food'},
        ]
        },
         {
        name: 'Why Sri Lanka',
        children: [{name: 'Sample text'}, {name: 'Sample text'}]
        },
         {
        name: 'Cities in Sri Lanka',
        children: [{name: 'Sample text'}, {name: 'Sample text'}]},
        ]
				});*/