/**
* Patient Checkin Module
*
* Description
*/
angular.module('PatientCheckin', ['ngRoute'])

    .factory('ApptsPatientsFactory', ['', function(){
        var apptsPatientsFactory = function() {

        };
        return new apptsPatientFactory();
    }])

    .config(['$locationProvider',function($locationProvider) {
        $locationProvider.hashPrefix('');
    }])

    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'patientHomeController',
                templateUrl: '/static/html/patient-home.html',
                // resolve: {
                //     appt:
                // },
            })
            .when('/patient-info/', {
                templateUrl: '/static/html/patient-info.html',
            })
            .when('/appt-info-check/', {
                templateUrl: '/static/html/appt-info-check.html',
            })
            .when('/patient-wait/', {
                templateUrl: '/static/html/patient-wait.html',
            })
    })

    .controller('patientHomeController', ['$scope', function($scope){
        $scope.purposes = [
            {'name':'I have an appointment', 'value':1},
            {'name':'I need a doctor but I do not have appoinments', 'value':2},
        ];
        $scope.radio = {};
        $scope.nextClicked = function() {
            
        };
    }])

    ;