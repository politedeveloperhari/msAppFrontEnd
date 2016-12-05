app.service('GeneralServices',function($http){
	return addUser = function(var dataToServer) {
		$http({
		  'method':'POST'
		  'url':'http://localhost/user/',
		  'data':dataToServer
		}).then()
	}
})