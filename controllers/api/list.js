var Item = require('../../models/item');
var SaleItem = require('../../models/saleItem');
var router = require('express').Router();
//모든 임대 아이템 리스트 반환
router.get('/api/list/all',function(req, res, next){
  var email = req.query.email;
  Item.find({'email' : email})
  .exec(function(err, list){
    if(err){ return next(err); }
    res.json(list);
  });
});
//모든 매매 아이템 리스트 반환
router.get('/api/list/sale/all',function(req, res, next){
  var email = req.query.email;
  SaleItem.find({'email' : email})
  .exec(function(err, list){
    if(err){ return next(err); }
    res.json(list);
  });
});
//조건에 맞는 임대 아이템 리스트 반환
router.get('/api/list',function(req, res, next){
  var email = req.query.email;
  var cond = req.query.cond;
  var searchWord = req.query.searchWord;
  if(!(searchWord.trim()) || searchWord.trim()==''){
    Item.find({'email' : email})
    .exec(function(err, list){
      if(err){ return next(err); }
      res.json(list);
    });
    return;
  }
  Item.find({'email' : email, [cond] : searchWord})
  .exec(function(err, list){
    if(err){ return next(err); }
    res.json(list);
  });
});
//조건에 맞는 매매 아이템 리스트 반환
router.get('/api/list/sale',function(req, res, next){
  var email = req.query.email;
  var cond = req.query.cond;
  var searchWord = req.query.searchWord;
  if(!searchWord.trim() || searchWord.trim()==''){
    SaleItem.find({'email' : email})
    .exec(function(err, list){
      if(err){ return next(err); }
      res.json(list);
    });
    return;
  }
  SaleItem.find({'email' : email, [cond] : searchWord})
  .exec(function(err, list){
    if(err){ return next(err); }
    res.json(list);
  });
});
//알람리스트에 표시할 임대 및 매매 아이템 리스트 반환
router.get('/api/list/alarm',function(req, res, next){
  var email = req.query.email;
  var now = new Date();
  Item.find({email : email, isExp : false, $or: [ {rentPayDate: { $gt: now.setDate(now.getDate() - 6)}}, {contrExpDate: { $gt: now.setMonth(now.getMonth() - 2)}} ]})
  .exec(function(err, list){
    if(err){ return next(err); }
    res.json(list);
  });
});
//계약 만료시 임대 및 매매 아이템 리스트에 반영
router.post('/api/list/alarm/updateExp',function(req, res, next){
  var alarm_id = req.body.alarm_id;
  Item.updateOne({_id : alarm_id}, {$set : {isExp : true}})
  .exec(function(err, item){
  if(err){console.log(err); return next(err);}
  res.send('201');
  });
});
//차임 지불시 임대 및 매매 아이템 리스트에 반영(임대지불날짜 + 1달)
router.post('/api/list/alarm/updateRentPayDate',function(req, res, next){
  var alarm_id = req.body.alarm_id;
  var rentPayDate = req.body.rentPayDate;
  Item.updateOne({_id : alarm_id}, {$set : {rentPayDate : rentPayDate}})
  .exec(function(err, item){
  if(err){console.log(err); return next(err);}
  res.send('201');
  });
});
//임대 아이템 생성
router.post('/api/list',function(req, res, next){
  console.log('item received');
  var item = new Item({
    email : req.body.email,
    contrType : req.body.contrType,
    contrDate : req.body.contrDate,
    contrExpDate : req.body.contrExpDate,
    contrPeriod : req.body.contrPeriod,
    realEstate : {
      site : req.body.site,
      landpur : req.body.landpur,
      landArea : req.body.landArea,
      structure : req.body.structure,
      use : req.body.use,
      buildingArea : req.body.buildingArea
    },
    deposit : req.body.deposit,
    downPayment : req.body.downPayment,
    middlePayment : req.body.middlePayment,
    middlePayDate : req.body.middlePayDate,
    balance : req.body.balance,
    balPayDate : req.body.balPayDate,
    rent : req.body.rent,
    rentPayDate : req.body.rentPayDate,
    specContent : req.body.specContent,
    lessor : {
      lessorAdrr : req.body.lessorAdrr,
      lessorNo : req.body.lessorNo,
      lessorPhone : req.body.lessorPhone,
      lessorName : req.body.lessorName,
      lessorAgentAdrr : req.body.lessorAgentAdrr,
      lessorAgentNo : req.body.lessorAgentNo,
      lessorAgentName : req.body.lessorAgentName
    },
    hirer : {
      hirerAdrr : req.body.hirerAdrr,
      hirerNo : req.body.hirerNo,
      hirerPhone : req.body.hirerPhone,
      hirerName : req.body.hirerName,
      hirerAgentAdrr : req.body.hirerAgentAdrr,
      hirerAgentNo : req.body.hirerAgentNo,
      hirerAgentName : req.body.hirerAgentName
    },
    licensedAgent : {
      officeSite : req.body.officeSite,
      officeName : req.body.officeName,
      representative : req.body.representative,
      regiNo : req.body.regiNo,
      officePhone : req.body.officePhone,
      liceRealEstateAgent : req.body.liceRealEstateAgent
    }
  });
  console.log(item);
  item.save(function(err, item){
    if(err){return next(err);}
    res.send('201');
  });
});
//매매 아이템 생성
router.post('/api/list/sale',function(req, res, next){
  console.log('item received');
  var item = new SaleItem({
    email : req.body.email,
    contrType : req.body.contrType,
    contrDate : req.body.contrDate,
    contrExpDate : req.body.contrExpDate,
    contrPeriod : req.body.contrPeriod,
    realEstate : {
      site : req.body.site,
      landpur : req.body.landpur,
      landArea : req.body.landArea,
      structure : req.body.structure,
      use : req.body.use,
      buildingArea : req.body.buildingArea
    },
    price : req.body.price,
    downPayment : req.body.downPayment,
    middlePayment : req.body.middlePayment,
    middlePayDate : req.body.middlePayDate,
    balance : req.body.balance,
    balPayDate : req.body.balPayDate,
    specContent : req.body.specContent,
    seller : {
      sellerAdrr : req.body.sellerAdrr,
      sellerNo : req.body.sellerNo,
      sellerPhone : req.body.sellerPhone,
      sellerName : req.body.sellerName,
      sellerAgentAdrr : req.body.sellerAgentAdrr,
      sellerAgentNo : req.body.sellerAgentNo,
      sellerAgentName : req.body.sellerAgentName
    },
    buyer : {
      buyerAdrr : req.body.buyerAdrr,
      buyerNo : req.body.buyerNo,
      buyerPhone : req.body.buyerPhone,
      buyerName : req.body.buyerName,
      buyerAgentAdrr : req.body.buyerAgentAdrr,
      buyerAgentNo : req.body.buyerAgentNo,
      buyerAgentName : req.body.buyerAgentName
    },
    licensedAgent : {
      officeSite : req.body.officeSite,
      officeName : req.body.officeName,
      representative : req.body.representative,
      regiNo : req.body.regiNo,
      officePhone : req.body.officePhone,
      liceRealEstateAgent : req.body.liceRealEstateAgent
    }
  });
  console.log(item);
  item.save(function(err, item){
    if(err){console.log(err); return next(err);}
    res.send('201');
  });
});
//임대 아이템 갱신
router.post('/api/list/lease/update',function(req, res, next){
  console.log('item update start');
  Item.updateOne({ _id: req.body.item_id },
    {
      $set: {
        isExp : req.body.isExp,
        contrType : req.body.contrType,
        contrDate : req.body.contrDate,
        contrExpDate : req.body.contrExpDate,
        contrPeriod : req.body.contrPeriod,
        realEstate : {
          site : req.body.site,
          landpur : req.body.landpur,
          landArea : req.body.landArea,
          structure : req.body.structure,
          use : req.body.use,
          buildingArea : req.body.buildingArea
        },
        deposit : req.body.deposit,
        downPayment : req.body.downPayment,
        middlePayment : req.body.middlePayment,
        middlePayDate : req.body.middlePayDate,
        balance : req.body.balance,
        balPayDate : req.body.balPayDate,
        rent : req.body.rent,
        rentPayDate : req.body.rentPayDate,
        specContent : req.body.specContent,
        lessor : {
          lessorAdrr : req.body.lessorAdrr,
          lessorNo : req.body.lessorNo,
          lessorPhone : req.body.lessorPhone,
          lessorName : req.body.lessorName,
          lessorAgentAdrr : req.body.lessorAgentAdrr,
          lessorAgentNo : req.body.lessorAgentNo,
          lessorAgentName : req.body.lessorAgentName
        },
        hirer : {
          hirerAdrr : req.body.hirerAdrr,
          hirerNo : req.body.hirerNo,
          hirerPhone : req.body.hirerPhone,
          hirerName : req.body.hirerName,
          hirerAgentAdrr : req.body.hirerAgentAdrr,
          hirerAgentNo : req.body.hirerAgentNo,
          hirerAgentName : req.body.hirerAgentName
        },
        licensedAgent : {
          officeSite : req.body.officeSite,
          officeName : req.body.officeName,
          representative : req.body.representative,
          regiNo : req.body.regiNo,
          officePhone : req.body.officePhone,
          liceRealEstateAgent : req.body.liceRealEstateAgent
        }
      }
    },
    function(err, item){
    if(err){console.log(err); return next(err);}
    res.send('201');
  });
});
//매매 아이템 갱신
router.post('/api/list/sale/update',function(req, res, next){
  console.log('item update start');
  SaleItem.updateOne({ _id: req.body.item_id },
    {
      $set: {
        isExp : req.body.isExp,
        contrType : req.body.contrType,
        contrDate : req.body.contrDate,
        contrExpDate : req.body.contrExpDate,
        contrPeriod : req.body.contrPeriod,
        realEstate : {
          site : req.body.site,
          landpur : req.body.landpur,
          landArea : req.body.landArea,
          structure : req.body.structure,
          use : req.body.use,
          buildingArea : req.body.buildingArea
        },
        price : req.body.price,
        downPayment : req.body.downPayment,
        middlePayment : req.body.middlePayment,
        middlePayDate : req.body.middlePayDate,
        balance : req.body.balance,
        balPayDate : req.body.balPayDate,
        specContent : req.body.specContent,
        seller : {
          sellerAdrr : req.body.sellerAdrr,
          sellerNo : req.body.sellerNo,
          sellerPhone : req.body.sellerPhone,
          sellerName : req.body.sellerName,
          sellerAgentAdrr : req.body.sellerAgentAdrr,
          sellerAgentNo : req.body.sellerAgentNo,
          sellerAgentName : req.body.sellerAgentName
        },
        buyer : {
          buyerAdrr : req.body.buyerAdrr,
          buyerNo : req.body.buyerNo,
          buyerPhone : req.body.buyerPhone,
          buyerName : req.body.buyerName,
          buyerAgentAdrr : req.body.buyerAgentAdrr,
          buyerAgentNo : req.body.buyerAgentNo,
          buyerAgentName : req.body.buyerAgentName
        },
        licensedAgent : {
          officeSite : req.body.officeSite,
          officeName : req.body.officeName,
          representative : req.body.representative,
          regiNo : req.body.regiNo,
          officePhone : req.body.officePhone,
          liceRealEstateAgent : req.body.liceRealEstateAgent
        }

      }
    },
    function(err, item){
    if(err){console.log(err); return next(err);}
    res.send('201');
  });
});

module.exports = router;
