/* ToDo List Controller */

var app = angular.module("toDoList", []); 
app.controller("toDoController", function($scope) {
    $scope.tasks = ["Lorem ipsum dolor sit amet", "Lorem dolor ipsum sit amet", "Lorem dolor sit ipsum amet", "Lorem ipsum sit dolor amet"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.tasks.indexOf($scope.addMe) == -1) {
            $scope.tasks.push($scope.addMe);
            $scope.addMe = "";
        } else {
            $scope.errortext = "The task is already in list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.tasks.splice(x, 1);
    }
});

/* jQuery Add New Task */

$(document).ready(function(){
    $("#btn").click(function(){
        $("#add").fadeIn(1000);
    });
});