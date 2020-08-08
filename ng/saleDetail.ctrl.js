angular.module('app')
.controller('SaleDetailCtrl', function( $scope, SaleDetailSvc, $window){
  //로그인하지 않은 사용자가 URL을 치고 들어왔을 경우 차단, 기존 만료여부 saleDetail.html 폼에 뿌리기
  $scope.$on('$viewContentLoaded', function(){
    if(!$scope.currentUser){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
    }
    console.log(!$scope.anItem.isExp);
    console.log($scope.isExp);
    if(!$scope.anItem.isExp){
      $scope.isExp = '만료';
    }else{
      $scope.isExp = '유효';
    }
 });
//search.html 뷰를 띄우기 위해 조회하기 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트를 전달함
  $scope.searchBtn = function(){
    $scope.$emit('search', 'search');
  };
//수정하기 버튼 클릭시 매매 아이템 갱신을 위해 SaleDetailSvc에 파라미터 전달
  $scope.cond = 0;
  $scope.modifySale = function(){
    if($scope.cond == 0){
      $('.form-control').attr('disabled', false);
      $scope.cond = 1;
    }else{
      console.log($scope.anItem._id);
      if($scope.expButton == "option1"){
        console.log('유효');
        $scope.anItem.isExp = false;
      }else{
        console.log('만료');
        $scope.anItem.isExp = true;
      }
      SaleDetailSvc.updateSale(
        $scope.anItem.isExp,
        $scope.anItem._id,
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
      ).then(function(sign){
        if(sign){
          alert('데이터 수정 성공');
          $window.location.href= "#!search";
        }else{
          alert('데이터 수정 실패');
        }
      });
      $scope.cond = 0;
    }
  };

});
