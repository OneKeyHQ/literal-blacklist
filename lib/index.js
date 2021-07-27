/**
 * @fileoverview OneKey Literal Plugin
 * @author onekey
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    rules: {
        "literal-blacklist": require("./rules/literal-blacklist"),
    },
    configs: {
        recommended: {
            rules: {
                "onekey-literal-blacklist/literal-blacklist": 2,
            }
        }
    }
}
