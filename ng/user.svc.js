angular.module('app')
.service('UserSvc', function($http){
//아래 svc.login에서 사용되는 함수로 로그인 성공시 로그인된 회원 정보를 서버에 요청
  var svc = this;
  svc.getUser = function(){
    return $http.get('/api/users',{
      headers : {'X-Auth' : this.token}
    });
  };
//로그인시 LoginCtrl에서 전달 받은 이메일, 패스워드를 확인하기 위해 서버에 요청후 성공시 토큰을 받고 이를 이용해 다시 회원 정보를 서버에 요청
  svc.login = function(email, password){
    return $http.post('/api/sessions',{
      email : email, password : password
    }).then(function(val){
      if(val.data != '401'){
        svc.token = val.data;
        return svc.getUser();
      }else{
        return null;
      }
    });
  };
//회원가입시 RegisterCtrl에서 전달 받은 이메일과 패스워드로 회원 생성을 서버에 요청
  svc.register = function(email, password){
    return $http.post('/api/users',{
      email : email, password : password
    }).then(function(val){
      if(val.data == 201){
        return true;
      }else{
        return false;
      }
    });
  };

});
