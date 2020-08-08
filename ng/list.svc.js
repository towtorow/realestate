var app = angular.module('app');

app.service('ListSvc',function($http){
//ListCtrl에서 전달 받은 파라미터로 임대 아이템 리스트 요청
  this.fetch = function(email, cond, searchWord){
    var parameters = {
      'email': email,
      'cond' : cond,
      'searchWord' : searchWord
    };
    var config = {
      'params': parameters
    };
    return $http.get('/api/list', config);
  };
//ListCtrl에서 전달 받은 파라미터로 매매 아이템 리스트 요청
  this.fetchSale = function(email, cond, searchWord){
    var parameters = {
      'email': email,
      'cond' : cond,
      'searchWord' : searchWord
    };
    var config = {
      'params': parameters
    };
    return $http.get('/api/list/sale', config);
  };
//모든 임대 아이템 리스트 요청
  this.fetchAll = function(email){
    var parameters = {
      'email': email
    };
    var config = {
      'params': parameters
    };
    return $http.get('/api/list/all', config);
  };
//모든 매매 아이템 리스트 요청
  this.fetchSaleAll = function(email){
    var parameters = {
      'email': email
    };
    var config = {
      'params': parameters
    };
    return $http.get('/api/list/sale/all', config);
  };

});
