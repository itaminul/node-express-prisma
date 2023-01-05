exports.getAll = async(req, res, next) => {
    try {
        const result = await prisma.batchs.findMany();
        res.json({ success: true, "message": "Data show successfully", result})
        
    } catch (error) {
        res.send(next);
    }
}

exports.create = async(req, res, next) => {
    try {
        const {batchName,shortName,descriptoin} = req.body;
        const result = await prisma.batchs.create({
            data: {
                batchName,
                shortName,
                descriptoin
            }
        })
        res.json({ success: true, "message": "Insert successfully", result})
    } catch (error) {
        next(error)  
        
    }
}

exports.update = async(req, res, next) => {
    try {        
        const {batchName,shortName, descriptoin, active_status} = req.body;
        const result = await prisma.batchs.update({
            where: {
                id: req.params.id
            },
            data: {
                batchName,
                descriptoin,
                shortName,
                active_status
            }
        })
        res.json({ success: true, "message": "Insert successfully", result})
    } catch (error) {
        res.send(next);
        
    }
}

exports.deleteBatch = async(req, res, next) => {
    try {       
     
        const result = await prisma.batchs.delete({
            where: {
                id: req.params.id
            }
        })
        res.json({ success: true, "message": "Delete successfully", result})
    } catch (error) {
        res.send(next);
        
    }
}
