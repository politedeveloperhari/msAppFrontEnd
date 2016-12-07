msApp.factory(['GeneralServices',function($http){
	return {
		addUser: function(dataToServer) {
			$http({
			  'method':'POST',
			  'url':'http://localhost/user/',
			  'data':dataToServer
			}).then(function(response) {
				console.log(response);
			}, function myError(response) {
		        console.log('not responded');
		        console.log(response);
		    });
		}
	}
}])