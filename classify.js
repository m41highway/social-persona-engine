var natural = require('natural');
var classifier = new natural.BayesClassifier();

// load the classifier 
natural.BayesClassifier.load('knowledge_base/classifier-20161217161627.json', null, function (err, classifier) {

    if (err) console.log(err);

    // let result1 = classifier.classify('son');
    let result1 = classifier.getClassifications('I like disco');
    // let result2 = classifier.classify('disco');
    let result2 = classifier.getClassifications('I have two daughters');

    console.log(result1);
    console.log(result2);
});