const path = require('path');
const root = path.join(__dirname, '../');
module.exports = {
    root: root,
    main: path.join(root, 'main'),
    renderer: path.join(root, 'renderer'),
    icon: path.join(root, 'icon')
};