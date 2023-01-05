//select value with includes multiple collection

exports.getAll = async(req, res, next) => {
    try {
        const result = await prisma.studentsAdmissionNew.findMany({
            include: {
                batchs: {
                   select: {
                    batchName: true,
                    shortName: true,
                    descriptoin: true,
                    active_status: true
                   }
                },
                sessions: {
                    select: {
                        sessionName: true,
                        descriptoin: true,
                        active_status: true

                    }
                },                
                gender: {
                    select: {
                        genderName: true,
                        descriptoin: true,
                        active_status: true
                    }
                },
                courses: {
                    select: {
                        courseName: true,
                        shortName: true,
                        descriptoin: true,
                        active_status: true
                    }
                }
            }
        });

        res.json({ success: true, "message": "Data show successfully", result})
        
    } catch (error) {
        res.send(next);
    }
}
