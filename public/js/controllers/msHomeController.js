msApp.controller('msHomeController',function($scope, GeneralServices){
	$scope.registerUser=function(){
		var dataToServer = {
				'emailId':$scope.emailId,
				'password':$scope.password,
				'employeeType':'admin'
		}		
		GeneralServices.addUser(JSON.stringify(dataToServer), function(resp){
			alert('fjhdj');
		});
	};
});