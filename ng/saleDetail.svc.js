var app = angular.module('app');

app.service('SaleDetailSvc', function($http){
//SaleDetailCtrl에서 전달 받은 파라미터로 매매 아이템 갱신 요청
  var sdsvc = this;
  sdsvc.updateSale = function(
    isExp,
    item_id,
    contrDate,
    contrExpDate,
    contrPeriod,
    site,
    landpur,
    landArea,
    structure,
    use,
    buildingArea,
    price,
    downPayment,
    middlePayment,
    middlePayDate,
    balance,
    balPayDate,
    specContent,
    sellerAdrr,
    sellerNo,
    sellerPhone,
    sellerName,
    sellerAgentAdrr,
    sellerAgentNo,
    sellerAgentName,
    buyerAdrr,
    buyerNo,
    buyerPhone,
    buyerName,
    buyerAgentAdrr,
    buyerAgentNo,
    buyerAgentName,
    officeSite,
    officeName,
    representative,
    regiNo,
    officePhone,
    liceRealEstateAgent
  ){
    return $http.post('/api/list/sale/update',{
      isExp : isExp,
      item_id : item_id,
      contrType : '매매',
      contrDate : contrDate,
      contrExpDate : contrExpDate,
      contrPeriod : contrPeriod,
      site : site,
      landpur : landpur,
      landArea: landArea,
      structure : structure,
      use : use,
      buildingArea : buildingArea,
      price : price,
      downPayment : downPayment,
      middlePayment : middlePayment,
      middlePayDate : middlePayDate,
      balance : balance,
      balPayDate : balPayDate,
      specContent : specContent,
      sellerAdrr : sellerAdrr,
      sellerNo : sellerNo,
      sellerPhone : sellerPhone,
      sellerName : sellerName,
      sellerAgentAdrr : sellerAgentAdrr,
      sellerAgentNo : sellerAgentNo,
      sellerAgentName : sellerAgentName,
      buyerAdrr : buyerAdrr,
      buyerNo : buyerNo,
      buyerPhone : buyerPhone,
      buyerName : buyerName,
      buyerAgentAdrr : buyerAgentAdrr,
      buyerAgentNo : buyerAgentNo,
      buyerAgentName : buyerAgentName,
      officeSite : officeSite,
      officeName : officeName,
      representative : representative,
      regiNo : regiNo,
      officePhone : officePhone,
      liceRealEstateAgent : liceRealEstateAgent
    }).then(function(val){
      if(val.data == 201){
        return true;
      }else{
        return false;
      }
    });
  };

});
