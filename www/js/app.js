// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.doctorselect', {
            url: '/doctorselect/:name',
            views: {
                'menuContent': {
                    templateUrl: 'templates/doctor-select.html',
                    controller: 'DoctorSelectCtrl'
                }
            }
        })
        .state('app.doctorspecialities', {
            url: '/doctorspecialities',
            views: {
                'menuContent': {
                    templateUrl: 'templates/doctor-specialities.html',
                    controller: 'DoctorSpecialitiesCtrl'
                }
            }
        })
        .state('login', {
            url: '/login',


            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'

        })
        .state('signup', {
            url: '/signup',


            templateUrl: 'templates/signup.html',
            controller: 'LoginCtrl'

        })
        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html'
                }
            }
        })
        .state('app.playlists', {
            url: '/playlists',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlists.html',
                    controller: 'PlaylistsCtrl'
                }
            }
        })
        .state('app.laboratoryselect', {
            url: '/laboratoryselect/:name',
            views: {
                'menuContent': {
                    templateUrl: 'templates/laboratory-select.html',
                    controller: 'LaboratorySelectCtrl'
                }
            }
        })
        .state('app.labtesttype', {
            url: '/labtesttype',
            views: {
                'menuContent': {
                    templateUrl: 'templates/lab-testtype.html',
                    controller: 'LaboratoryTestTypesCtrl'
                }
            }
        })
			.state('app.laboratoryprofile', {
            url: '/laboratoryprofile',
            views: {
                'menuContent': {
                    templateUrl: 'templates/laboratory-profile.html',
                    controller: 'LaboratoryprofileCtrl'
                }
            }
        })
        .state('app.requestchemist', {
            url: '/requestchemist',
            views: {
                'menuContent': {
                    templateUrl: 'templates/request-chemist.html',
                    controller: 'RequestChemistCtrl'
                }
            }
        })
        .state('app.selectarea', {
            url: '/selectarea',
            views: {
                'menuContent': {
                    templateUrl: 'templates/select-area.html',
                    controller: 'SelectAreaCtrl'
                }
            }
        })

    .state('app.profile', {
            url: '/profile',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profile.html',
                    controller: 'ProfileCtrl'
                }
            }
        })
        .state('app.reportviewer', {
            url: '/reportviewer',
            views: {
                'menuContent': {
                    templateUrl: 'templates/reportViewer.html',
                    controller: 'ReportViewerCtrl'
                }
            }
        })
        .state('app.reporthistory', {
            url: '/reporthistory',
            views: {
                'menuContent': {
                    templateUrl: 'templates/report-history.html',
                    controller: 'ReportHistoryCtrl'
                }
            }
        })
        .state('app.chemisthistory', {
            url: '/chemisthistory',
            views: {
                'menuContent': {
                    templateUrl: 'templates/chemist-history.html',
                    controller: 'chemisthistoryCtrl'
                }
            }
        })
			.state('app.chemistselect', {
            url: '/chemistselect',
            views: {
                'menuContent': {
                    templateUrl: 'templates/chemist-select.html',
                    controller: 'chemistselectCtrl'
                }
            }
        })
        .state('app.chemistrecord', {
            url: '/chemistrecord',
            views: {
                'menuContent': {
                    templateUrl: 'templates/chemistRecord.html',
                    controller: 'ChemistRecordCtrl'
                }
            }
        }) 
			.state('app.aboutus', {
            url: '/aboutus',
            views: {
                'menuContent': {
                    templateUrl: 'templates/aboutus.html',
                    controller: 'AboutusCtrl'
                }
            }
        })
        .state('app.yourdoctors', {
            url: '/yourdoctors',
            views: {
                'menuContent': {
                    templateUrl: 'templates/your-doctors.html',
                    controller: 'ChemistRecordCtrl'
                }
            }
        })

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});