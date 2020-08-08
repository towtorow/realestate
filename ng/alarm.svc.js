var app = angular.module('app');

app.service('AlarmSvc',function($http){
//임대 및 매매 아이템을 통해 알람 리스트를 얻기위해 서버에 요청
  this.fetch = function(email){
    var parameters = {
      'email': email,
    };
    var config = {
      'params': parameters
    };
    return $http.get('/api/list/alarm', config);
  };
//계약 만료시 임대 및 매매 아이템 리스트에 반영할 것을 서버에 요청
  this.updateExp = function(alarm_id){
    return $http.post('/api/list/alarm/updateExp',{
      alarm_id : alarm_id
    }).then(function(val){
      if(val.data == 201){
        return true;
      }else{
        return false;
      }
    });
  };
//차임 지불시 임대 및 매매 아이템 리스트에 반영(임대지불날짜 + 1달)할 것을 서버에 요청
  this.updateRentPayDate = function(alarm_id, modRentPayDate){
    return $http.post('/api/list/alarm/updateRentPayDate',{
      alarm_id : alarm_id,
      rentPayDate : modRentPayDate
    }).then(function(val){
      if(val.data == 201){
        return true;
      }else{
        return false;
      }
    });
  };

});
