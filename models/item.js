var db = require('../db');

var Item = db.model('Item', {
  email : {type : String},
  contrType : {type : String},
  contrDate : {type : Date},
  contrExpDate : {type : Date},
  contrPeriod : {type : String},
  isExp : {type : String, default : '유효'},
  realEstate : {
    site : {type : String},
    landpur : {type : String},
    landArea : {type : Number},
    structure : {type : String},
    use : {type : String},
    buildingArea : {type : Number}
  },
  deposit : {type : Number},
  depositRemain : {type : Number},
  downPayment : {type : Number},
  middlePayment : {type : Number},
  middlePayDate : {type : Date},
  balance : {type : Number},
  balPayDate : {type : Date},
  rent : {type : Number},
  rentPayDate : {type : Date},
  specContent : {type : String},
  lessor : {
    lessorAdrr : {type : String},
    lessorNo : {type : String},
    lessorPhone : {type : String},
    lessorName : {type : String},
    lessorAgentAdrr : {type : String},
    lessorAgentNo : {type : String},
    lessorAgentName : {type : String}
  },
  hirer : {
    hirerAdrr : {type : String},
    hirerNo :{type : String},
    hirerPhone : {type : String},
    hirerName : {type : String},
    hirerAgentAdrr : {type : String},
    hirerAgentNo : {type : String},
    hirerAgentName : {type : String}
  },
  licensedAgent : {
    officeSite : {type : String},
    officeName : {type : String},
    representative : {type : String},
    regiNo : {type : String},
    officePhone : {type : String},
    liceRealEstateAgent : {type : String}
  }
});

module.exports = Item;
