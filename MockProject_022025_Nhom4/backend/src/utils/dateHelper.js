// filepath: /MockProject_022025_Nhom4/MockProject_022025_Nhom4/backend/src/utils/dateHelper.js

const moment = require('moment');

const formatDate = (date, format = 'YYYY-MM-DD') => {
    return moment(date).format(format);
};

const parseDate = (dateString, format = 'YYYY-MM-DD') => {
    return moment(dateString, format).toDate();
};

const isValidDate = (date) => {
    return moment(date, 'YYYY-MM-DD', true).isValid();
};

module.exports = {
    formatDate,
    parseDate,
    isValidDate,
};