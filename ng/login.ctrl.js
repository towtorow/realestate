angular.module('app')
.controller('LoginCtrl', function(UserSvc, $scope){
//이메일과 패스워드를 확인하기 위해 UserSvc에 전달
  this.login = function(email, password){
    UserSvc.login(email, password)
    .then(function(user){
      if(!user){
        alert('로그인 실패');
      }else{
        alert('로그인 성공');
        $scope.$emit('login', user.data);
      }
    });
  };

});
