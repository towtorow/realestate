var db = require('../db');

var SaleItem = db.model('SaleItem', {
  email : {type : String},
  contrType : {type : String},
  contrDate : {type : Date},
  contrExpDate : {type : Date},
  contrPeriod : {type : String},
  isExp : {type : Boolean, default : false},
  realEstate : {
    site : {type : String},
    landpur : {type : String},
    landArea : {type : Number},
    structure : {type : String},
    use : {type : String},
    buildingArea : {type : Number}
  },
  price : {type : Number},
  downPayment : {type : Number},
  middlePayment : {type : Number},
  middlePayDate : {type : Date},
  balance : {type : Number},
  balPayDate : {type : Date},
  specContent : {type : String},
  seller : {
    sellerAdrr : {type : String},
    sellerNo : {type : String},
    sellerPhone : {type : String},
    sellerName : {type : String},
    sellerAgentAdrr : {type : String},
    sellerAgentNo : {type : String},
    sellerAgentName : {type : String}
  },
  buyer : {
    buyerAdrr : {type : String},
    buyerNo : {type : String},
    buyerPhone :{type : String},
    buyerName : {type : String},
    buyerAgentAdrr : {type : String},
    buyerAgentNo : {type : String},
    buyerAgentName : {type : String}
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

module.exports = SaleItem;
