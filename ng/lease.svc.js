angular.module('app')
.service('LeaseSvc', function($http){
//leaseCtrl에서 전달 받은 파라미터로 매매 아이템 생성 요청
  var lsvc = this;
  lsvc.registerLease = function(
    email,
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
    return $http.post('/api/list',{
      email : email,
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
