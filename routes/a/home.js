/**
 */
exports.GET = {
    params:[],
    handler(req, res) {

        console.log("访问大陆---",req.query.bookCity
        );
        return res.render('index', {
        });
    },
};