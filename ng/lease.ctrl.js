angular.module('app')
.controller('leaseCtrl', function( $scope , $window, LeaseSvc){
//로그인하지 않은 사용자가 URL을 치고 들어왔을 경우 차단
  $scope.$on('$viewContentLoaded', function(){
    if(!$scope.currentUser){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
    }
 });
//임대 아이템 생성을 위해 LeaseSvc에 파라미터 전달
  $scope.submitModel = function(){
    LeaseSvc.registerLease(
      $scope.currentUser.email,
      $scope.contrDate,
      $scope.contrExpDate,
      $scope.contrPeriod,
      $scope.site,
      $scope.landpur,
      $scope.landArea,
      $scope.structure,
      $scope.use,
      $scope.buildingArea,
      $scope.deposit,
      $scope.downPayment,
      $scope.middlePayment,
      $scope.middlePayDate,
      $scope.balance,
      $scope.balPayDate,
      $scope.rent,
      $scope.rentPayDate,
      $scope.specContent,
      $scope.lessorAdrr,
      $scope.lessorNo,
      $scope.lessorPhone,
      $scope.lessorName,
      $scope.lessorAgentAdrr,
      $scope.lessorAgentNo,
      $scope.lessorAgentName,
      $scope.hirerAdrr,
      $scope.hirerNo,
      $scope.hirerPhone,
      $scope.hirerName,
      $scope.hirerAgentAdrr,
      $scope.hirerAgentNo,
      $scope.hirerAgentName,
      $scope.officeSite,
      $scope.officeName,
      $scope.representative,
      $scope.regiNo,
      $scope.officePhone,
      $scope.liceRealEstateAgent
    )
      .then(function(sign){
        if(sign){
          alert('데이터 입력 성공');
          $window.location.href= "#!search";
        }else{
          alert('데이터 입력 실패');
        }
      });
  };
  $scope.searchBtn = function(){
    $scope.$emit('search', 'search');
  };

});
