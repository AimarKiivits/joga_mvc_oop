const BaseSQLModel = require('./base');

class ArticleModel extends BaseSQLModel {
    constructor() {
        super('article');
    }

    async findAll() {
        const articles = await super.findAll();
        return articles;
    }

    async findOne(slug) {
        const article = await super.findOne('slug', slug);
        return article;
    }

    async findMany(where, value) {
        const articles = await super.findMany(where, value);
        return articles;
    }
    async create(artcile) {
        const createdArticleId = await super.create(artcile);
        return createdArticleId;
    }

    async update(article, id) {
        const updatedArticleId = await super.update(article, id);
        return updatedArticleId;
    }
}

module.exports = ArticleModel;