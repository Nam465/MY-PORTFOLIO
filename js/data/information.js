fetch('../data/infomation.json')
    .then(res=> {
        console.log(res);
        console.log('done');
    })
    .catch(err => {
        console.log(err);
    })

