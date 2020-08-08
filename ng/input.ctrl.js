angular.module('app')
.controller('inputCtrl', function( $scope, $window ){
//로그인하지 않은 사용자가 URL을 치고 들어왔을 경우 차단
  $scope.$on('$viewContentLoaded', function(){
    if(!$scope.currentUser){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
    }
 });
//lease.html 뷰를 띄우기 위해 임대입력 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트를 전달함
  $scope.lease = function(){
    $scope.$emit('lease', 'lease');
  };
//sale.html 뷰를 띄우기 위해 매매입력 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트를 전달함
  $scope.sale = function(){
    $scope.$emit('sale', 'sale');
  };

});
