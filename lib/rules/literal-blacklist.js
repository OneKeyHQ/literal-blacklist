/**
 * @fileoverview forbid literal-blacklist's content appear in code
 * @author OneKey
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Forbid literal-blacklist's content appear in code.",
            // recommended: false
        },
        fixable: "OneKey",  // or "code" or "whitespace"
        // 报错信息描述
        messages: {
            forbidLiteral: "You should not use '{{option}}' and it is not case sensitive."
        }
    },

    create: function(context) {

        // variables should be defined here
        const sourceCode = context.getSourceCode();
        const allSource = sourceCode.getText();
        const defaultBlackList = ["trezor", "metamask"];
        const options = defaultBlackList.concat(context.options || []);

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        function isSensitiveLiteral(node, option) {
            return String(node.value).toLowerCase().includes(option);
        }
        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------


        return {

            // give me methods
            Program(node) {
                options.forEach(option => {
                    if(allSource.toLowerCase().includes(option)) {
                        context.report({
                            node,
                            messageId: "forbidLiteral",
                            data: {
                                option
                            }
                        })
                    }
                });
            },
            Literal(node) {
                options.forEach(option => {
                    if(isSensitiveLiteral(node, option)) {
                        context.report({
                            node,
                            messageId: "forbidLiteral",
                            data: {
                                option
                            }
                        })
                    }
                });
            }
        };
    }
};
