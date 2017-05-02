/**
 */
exports.GET = {
    params:[],
    handler(req, res) {
        console.log("访问数据---",req.query.bookCity);
        return res.render('home/index', {
        });
    },
};