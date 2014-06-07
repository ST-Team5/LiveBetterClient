'use strict';
/* jshint ignore:start */

/**
 * AUTHORIZE
 */

function handleUserError(data){
//	console.info(data);
	if('unauthorized' == data.error){
		authenticate();
	} else if ('access_denied'  == data.error){
		//TODO
		window.open('access_denied.html', '_self');
	};
}

function handleError(data, $rootScope){
	if($rootScope.authorized){
		if('unauthorized' == data.error){
			window.open('inactivity.html', '_self');
		} else {
			console.info(data.error);
			window.open('default_error.html', '_self');
		};
	}
}


function authenticate() {
	window.open(SERVER_ADDRESS + "login.jsp", '_self');
}

/* jshint ignore:end */