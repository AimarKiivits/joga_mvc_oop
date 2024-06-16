const BaseSQLModel = require('./base');

class authorModel extends BaseSQLModel {
    constructor() {
        super('author');
    }

    async findById(id) {
        const author = await super.findById(id);
        return author;
    }
}

module.exports = authorModel;