var app = angular.module('app');

app.service('LeaseDetailSvc', function($http){
//LeaseDetailCtrl에서 전달 받은 파라미터로 임대 아이템 갱신 요청
  var ldsvc = this;
  ldsvc.updateLease = function(
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
    deposit,
    depositRemain,
    downPayment,
    middlePayment,
    middlePayDate,
    balance,
    balPayDate,
    rent,
    rentPayDate,
    specContent,
    lessorAdrr,
    lessorNo,
    lessorPhone,
    lessorName,
    lessorAgentAdrr,
    lessorAgentNo,
    lessorAgentName,
    hirerAdrr,
    hirerNo,
    hirerPhone,
    hirerName,
    hirerAgentAdrr,
    hirerAgentNo,
    hirerAgentName,
    officeSite,
    officeName,
    representative,
    regiNo,
    officePhone,
    liceRealEstateAgent
  ){
    return $http.post('/api/list/lease/update',{
      isExp : isExp,
      item_id : item_id,
      contrType : '임대',
      contrDate : contrDate,
      contrExpDate : contrExpDate,
      contrPeriod : contrPeriod,
      site : site,
      landpur : landpur,
      landArea: landArea,
      structure : structure,
      use : use,
      buildingArea : buildingArea,
      deposit : deposit,
      depositRemain : depositRemain,
      downPayment : downPayment,
      middlePayment : middlePayment,
      middlePayDate : middlePayDate,
      balance : balance,
      balPayDate : balPayDate,
      rent : rent,
      rentPayDate : rentPayDate,
      specContent : specContent,
      lessorAdrr : lessorAdrr,
      lessorNo : lessorNo,
      lessorPhone : lessorPhone,
      lessorName : lessorName,
      lessorAgentAdrr : lessorAgentAdrr,
      lessorAgentNo : lessorAgentNo,
      lessorAgentName : lessorAgentName,
      hirerAdrr : hirerAdrr,
      hirerNo : hirerNo,
      hirerPhone : hirerPhone,
      hirerName : hirerName,
      hirerAgentAdrr : hirerAgentAdrr,
      hirerAgentNo : hirerAgentNo,
      hirerAgentName : hirerAgentName,
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
