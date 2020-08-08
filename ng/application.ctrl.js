angular.module('app')
.controller('AppliCtrl', function( $scope, $window){
//내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 login 이벤트 전달을 통해 사용자 객체를 전달받음
  $scope.$on('login', function(_, user){
    $scope.currentUser = user;
    sessionStorage.setItem('currentUser', JSON.stringify($scope.currentUser));
    $window.location.href = '#!index';
  });
//로그아웃 수행
  $scope.logout = function(){
    alert("로그아웃 성공");
    $scope.currentUser = null;
    sessionStorage.removeItem('currentUser');
    //$window.location.href = '/';
    $window.location.reload();
  };
//index.html 뷰를 보여주기위해 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 이벤트 전달받음
  $scope.$on('index', function(){
    $window.location.href = '#!index';
  });
//로그인 폼을 보여주기위해 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 이벤트 전달받음
  $scope.$on('input', function(){
    if($scope.currentUser == null){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
      return;
    }
    $window.location.href = '#!input';
  });
//리스트 폼을 보여주기위해 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 이벤트 전달받음
  $scope.$on('search', function(){
    if($scope.currentUser == null){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
      return;
    }
    $window.location.href = '#!search';
  });
//판매 아이템 입력 폼을 보여주기위해 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 이벤트 전달받음
  $scope.$on('sale', function(){
    if($scope.currentUser == null){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
      return;
    }
    $window.location.href = '#!sale';
  });
//임대 아이템 입력 폼을 보여주기위해 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 이벤트 전달받음
  $scope.$on('lease', function(){
    if($scope.currentUser == null){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
      return;
    }
    $window.location.href = '#!lease';
  });
//알람 리스트를 보여주기위해 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 이벤트 전달받음
  $scope.$on('alarm', function(){
    if($scope.currentUser == null){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
      return;
    }
    $window.location.href = '#!alarm';
  });
//뷰가 로드된 후 브라우저 로컬스토리지에서 현재유저를 불러옴
  $scope.$on('$viewContentLoaded', function(){
    if(localStorage){
      var currentUserTmp = localStorage.getItem('currentUser');
      if(currentUserTmp){
        $scope.currentUser = JSON.parse(currentUserTmp);
      }
    }
  });
//임대 및 매매 아이템 리스트에서 하나의 아이템을 클릭시 이것을 디테일 폼으로 전달하기위해 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 이벤트 전달받음
  $scope.$on('clickAnItem', function(_, item){
    console.log(item);
    $scope.anItem = item;
    $scope.date = function(date){
      return new Date(date);
    };
    if($scope.anItem.contrType == '임대'){
      $window.location.href = "#!leaseDetail";
    }else if($scope.anItem.contrType == '매매'){
      $window.location.href = "#!saleDetail";
    }
  });

});
