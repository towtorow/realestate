var app = angular.module("app");
app.controller('AlarmCtrl', function($scope, AlarmSvc, $window){
//로그인하지 않은 사용자가 URL을 치고 들어왔을 경우 차단
  $scope.$on('$viewContentLoaded', function(){
    if(!$scope.currentUser){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
    }
 });
//임대 및 매매 아이템에서 얻은 알람 리스트 뿌리기
  var email = $scope.currentUser.email;
  AlarmSvc.fetch(email).then(function(list){
    $scope.alarmList = list.data;
  });
//현재 날짜와 입력된 날짜의 차이 구하기
  $scope.calcDateDiff = function (date) {
    var diff = new Date(date).getDate() - new Date().getDate();
    return diff;
  };
//차임수령 버튼 클릭시 차임지불날짜 갱신
  $scope.confirmAlarm = function(alarm){
    console.log(alarm._id);
    var rentPayDate = new Date(alarm.rentPayDate);
    AlarmSvc.updateRentPayDate(alarm._id, rentPayDate.setMonth(rentPayDate.getMonth() + 1))
    .then(function(sign){
      if(sign){
        alert('차임 지불 확인 성공');
        $window.location.href= "#!alarm";
      }else{
        alert('차임 지불 확인 실패');
      }
    });
  };
//만료확신 버튼 클릭시 만료여부 갱신
  $scope.confirmExp = function(alarm){
    console.log(alarm._id);
    AlarmSvc.updateExp(alarm._id)
    .then(function(sign){
      if(sign){
        alert('만료 확인 성공');
        $window.location.href= "#!alarm";
      }else{
        alert('만료 확인 실패');
      }
    });
  };
//index.html 뷰를 띄우기 위해 뒤로가기 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트 전달함
  $scope.indexButton = function(){
    $scope.$emit('index', 'index');
  };
});
