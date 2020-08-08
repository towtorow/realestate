var app = angular.module("app");
app.controller('ListCtrl', function($scope, ListSvc, $window){
//로그인하지 않은 사용자가 URL을 치고 들어왔을 경우 차단
  $scope.$on('$viewContentLoaded', function(){
    if(!$scope.currentUser){
      alert('로그인이 필요한 작업입니다');
      $window.location.href = "#!login";
    }
 });
//임대 및 매매 아이템 리스트 뿌리기
  var email = $scope.currentUser.email;
  ListSvc.fetchAll(email).then(function(list){
    totalList = list.data;
    ListSvc.fetchSaleAll(email).then(function(saleList){
      totalList = totalList.concat(saleList.data);
      $scope.list = totalList;
    });
  });
//index.html 뷰를 띄우기 위해 뒤로가기 버튼 클릭시 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 그 이벤트 전달함
  $scope.indexButton = function(){
    $scope.$emit('index', 'index');
  };

//조건에 맞는 검색어로 검색된 임대 및 매매 아이템 리스트 뿌리기
  $scope.showList = function(){
    var email = $scope.currentUser.email;
    var cond = $('#dropdownMenu2').attr('name');
    var searchWord = $('#searchWord').val();
    var totalList;
    ListSvc.fetch(email, cond, searchWord).then(function(list){
      totalList = list.data;
      ListSvc.fetchSale(email, cond, searchWord).then(function(saleList){
        totalList = totalList.concat(saleList.data);
        $scope.list = totalList;
      });
    });
  };
//드롭다운된 버튼을 클릭시 드롭다운 버튼의 이름 변경
  $scope.setCon = function(event){
    $('#dropdownMenu2').attr('name', $(event.currentTarget).attr('name'));
    $('#dropdownMenu2').text($(event.currentTarget).text());
  };
//임대 및 매매 아이템 리스트를 클릭시 아이템과 함께 이벤트를 내부 컨트롤러 스코프에서 외부 컨트롤러 스코프로 전달함
  $scope.clickItem = function(item){
    $scope.$emit('clickAnItem', item);
  };

});
