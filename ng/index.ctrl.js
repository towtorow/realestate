angular.module('app')
.controller('indexCtrl', function( $scope, $window ){
//input.html 뷰를 띄우기 위해 입력하기 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트 전달함
  $scope.input = function(){
    $scope.$emit('input', 'input');
  };
//search.html 뷰를 띄우기 위해 조회하기 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트 전달함
  $scope.search = function(){
    $scope.$emit('search', 'search');
  };
//alarm.html 뷰를 띄우기 위해 알람보기 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트 전달함
  $scope.alarm = function(){
    $scope.$emit('alarm', 'alarm');
  };

});
