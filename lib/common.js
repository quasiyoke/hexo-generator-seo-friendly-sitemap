'use strict';

var _ = require('lodash'),
    moment = require('moment'),
    Promise = require('bluebird'),
    fs = Promise.promisifyAll(require('fs'));

var common = {
    setItemLastUpdate: function (item) {
        item.updated = _.max(item.posts.toArray(), function (post) {
            return post.updated.toDate();
        }).updated.toDate();
        return item;
    },
    getFileContent: function (filePath) {
        return fs.readFileAsync(filePath, {encoding: 'utf8'});
    },
    isDefined: _.negate(_.isUndefined)
};

module.exports = common;