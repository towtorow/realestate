angular.module('app')
.controller('LeaseDetailCtrl', function( $scope, LeaseDetailSvc, $window){
//로그인하지 않은 사용자가 URL을 치고 들어왔을 경우 차단
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
//search.html 뷰를 띄우기 위해 조회하기 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트 전달함
  $scope.searchBtn = function(){
    $scope.$emit('search', 'search');
  };
//임대 아이템 갱신을 위해 LeaseDetailSvc에 파라미터 전달
  $scope.cond = 0;
  $scope.modifyLease = function(){
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
      LeaseDetailSvc.updateLease(
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
