const fs = require('fs');
fs.cp('src/extensions/admin', 'node_modules/@strapi/admin/admin/src', { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    }
});