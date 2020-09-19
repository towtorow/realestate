angular.module('app')
.controller('saleCtrl', function( $scope , $window, SaleSvc){
//로그인하지 않은 사용자가 URL을 치고 들어왔을 경우 차단
  $scope.$on('$viewContentLoaded', function(){
      if(!$scope.currentUser){
        alert('로그인이 필요한 작업입니다');
        $window.location.href = "#!login";
      }
  });
//매매 아이템 생성을 위해 SaleSvc에 파라미터 전달
  $scope.submitSaleModel = function(){
    SaleSvc.registerSale(
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
      $scope.price,
      $scope.downPayment,
      $scope.middlePayment,
      $scope.middlePayDate,
      $scope.balance,
      $scope.balPayDate,
      $scope.specContent,
      $scope.sellerAdrr,
      $scope.sellerNo,
      $scope.sellerPhone,
      $scope.sellerName,
      $scope.sellerAgentAdrr,
      $scope.sellerAgentNo,
      $scope.sellerAgentName,
      $scope.buyerAdrr,
      $scope.buyerNo,
      $scope.buyerPhone,
      $scope.buyerName,
      $scope.buyerAgentAdrr,
      $scope.buyerAgentNo,
      $scope.buyerAgentName,
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

  $scope.backBtn = function(){
    $scope.$emit('input', 'input');
  };
});
