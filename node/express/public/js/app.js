var app=angular.module('cFcApp', ['ui.bootstrap','ui.router']);
app.controller('menuCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
  $scope.actions=[
  {name:'Chit Group',url:'/actions/ChitGroup'},
  {name:'Customer',url:'/actions/customer'},
  {name:'Employee',url:'/actions/Employee'},
  {name:'Auction',url:'/actions/Auction'},
  {name:'Invoice Generation',url:'/actions/InvGen'},
  {name:'Follow Up',url:'/actions/FollowUp'},
  {name:'Receipt',url:'/actions/Receipt'},
  {name:'ReceiptAccept',url:'/actions/ReceiptAccept'},
  {name:'Disbursment',url:'/actions/Disbursment'}
  ];
  $scope.reports=[
  {name:'All Groups',url:'/reports/AllGroups'},
  {name:'Group Summary',url:'/reports/GroupSummary'},
  {name:'Customer Report',url:'/reports/CustomerReport'},
  {name:'Pending Dues',url:'/reports/PendingDues'},
  {name:'My Customers',url:'/reports/myCustomers'}
  ];
  $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});
app.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.when("", "login");
$stateProvider.state({
                         name: 'login',
                         url: '/login',
                           controller: 'loginCtrl',
                         templateUrl: 'views/login.html'
                       })
               .state({
                          name: 'support',
                          url: '/support',
                          template: '<h3>Your are not subscribed to premier support! </h3>'
                        })
               .state({
                          name: 'home',
                          url: '/home',
                          templateUrl: 'views/dashboard.html'
                        })

//Actions
.state({name: '/actions/ChitGroup', url: '/actions/ChitGroup', templateUrl: 'views/actions/ChitGroup.html' })
.state({name: '/actions/customer', url: '/actions/customer',  controller: 'customerCtrl',templateUrl: 'views/actions/customer.html' })
.state({name: '/actions/Employee', url: '/actions/Employee', templateUrl: 'views/actions/Employee.html' })
.state({name: '/actions/Auction', url: '/actions/Auction', templateUrl: 'views/actions/Auction.html' })
.state({name: '/actions/InvGen', url: '/actions/InvGen', templateUrl: 'views/actions/InvGen.html' })
.state({name: '/actions/FollowUp', url: '/actions/FollowUp', templateUrl: 'views/actions/FollowUp.html' })
.state({name: '/actions/Receipt', url: '/actions/Receipt', templateUrl: 'views/actions/Receipt.html' })
.state({name: '/actions/ReceiptAccept', url: '/actions/ReceiptAccept', templateUrl: 'views/actions/ReceiptAccept.html' })
.state({name: '/actions/Disbursment', url: '/actions/Disbursment', templateUrl: 'views/actions/Disbursment.html' })

////Reports
.state({name: '/reports/AllGroups', url: '/reports/AllGroups', templateUrl: 'views/reports/AllGroups.html' })
.state({name: '/reports/GroupSummary', url: '/reports/GroupSummary', templateUrl: 'views/reports/GroupSummary.html' })
.state({name: '/reports/CustomerReport', url: '/reports/CustomerReport', templateUrl: 'views/reports/CustomerReport.html' })
.state({name: '/reports/PendingDues', url: '/reports/PendingDues', templateUrl: 'views/reports/PendingDues.html' })
.state({name: '/reports/myCustomers', url: '/reports/myCustomers', templateUrl: 'views/reports/myCustomers.html' })
         ;

});
app.controller('loginCtrl',function($scope,$state){
    console.log("loginCtrl");
    $scope.logIn=function(){
        console.log("Logged in");
        $state.go('home');
    };
});
app.controller('customerCtrl',function($scope,$state,$http){
    console.log("1customerCtrl");
    $scope.saveCust=function(){
        console.log("1saveCust" + angular.toJson($scope.cst));
        $http.post('/cst', $scope.cst).then(function(data){
            console.log('Sucess data ' + data);
            }, function(date){
                           console.log('Failed data ' + data);
           });

    };
});