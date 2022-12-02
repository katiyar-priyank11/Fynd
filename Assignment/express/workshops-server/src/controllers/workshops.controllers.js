const getWorkshops = ( req, res ) => {
    res.json({
        status: 'success',
        data: [
            'Vue',
            'Express'
        ]
    });
};

const postWorkshops = ( req, res ) => {
    res.json({
        status: 'added',
        data: [
            'MongoDB',
            'Node'
        ]
    });
};

module.exports = {
    getWorkshops,
    postWorkshops
};