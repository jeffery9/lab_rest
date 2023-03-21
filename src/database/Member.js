const DB = require("./db.json");

/**
 * @openapi
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 12a410bc-849f-4e7e-bfc8-4ef283ee4b19
 *         name: 
 *           type: string
 *           example: Jason Miller
 *         gender:
 *           type: string
 *           example: male
 *         dateOfBirth:
 *           type: date
 *           example: 23/04/1990
 *         email:
 *           type: string
 *           example: jason@mail.com
 *         password:
 *           type: string
 */

const getAllMembers = (filterParams) => {
    let members = DB.members;
    if (filterParams.mode) {
        return DB.members.filter((member) =>
            member.mode.toLowerCase().includes(filterParams.mode)
        );
    }
    // Other if-statements will go here for different parameters
    return members;
};

const getOneMember = (memberId) => {
    const member = DB.members.find((member) => member.id === memberId);
    if (!member) {
        return;
    }
    return member;
};
module.exports = {
    getAllMembers,
    getOneMember
};