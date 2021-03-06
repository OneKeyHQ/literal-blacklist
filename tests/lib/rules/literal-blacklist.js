/**
 * @fileoverview forbid literal-blacklist&#39;s content appear in code
 * @author OneKey
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/literal-blacklist"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("literal-blacklist", rule, {

    valid: [

        // give me some code that won't trigger a warning
        {
            code: "OneKey Wallet",
        }
    ],

    invalid: [
        {
            code: "trezor metamask",
            errors: [{
                messageId: "forbidLiteral",
            }]
        }
    ]
});
