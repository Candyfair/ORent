const sanitizer = require('sanitizer');

const bodySanitizer = (request, response, next) => {
    if (Object.keys(request.body).length === 0) {
        next();
    } else {
        for (let propName in request.body) {
            request.body[propName] = sanitizer.escape(request.body[propName]);// Escapes HTML special characters in attribute values as HTML entities
            request.body[propName] = sanitizer.unescapeEntities(request.body[propName]);// repasse les entités en texte
        };
        next();
    }

};

module.exports = bodySanitizer;