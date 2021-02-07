var assert = require('assert');

import {add, mul} from "../add.js"

describe(" add function", function(){
    it('1+2 == 3 ?', function() {
        assert.equal(add(1, 2), 3);
    });
    
    it('-1000 + 400 == 600 ?', function() {
        assert.equal(add(-1000, 400), -600);
    });

    it('-10 * 40 == -400 ?', function() {
        assert.equal(mul(-10, 40), -400);
    });
}) 
