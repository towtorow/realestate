angular.module('app')
.controller('RegisterCtrl',function($scope, UserSvc, $window){
//회원가입을 위해 UserSvc에 이메일 패스워드 파라미터 전달
  this.register = function(email, password){
    UserSvc.register(email, password)
    .then(function(sign){
      if(sign){
        alert('회원가입 성공');
        $window.location.href= "#!login";
      }else{
        alert('회원가입 실패');
      }
    });
  };

});
