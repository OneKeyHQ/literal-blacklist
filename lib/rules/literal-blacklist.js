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
        },
        fixable: "OneKey",  // or "code" or "whitespace"
    },

    create: function(context) {

        // variables should be defined here
        const sourceCode = context.getSourceCode();
        const allSource = sourceCode.getText();
        const options = context.options || [];
        const hasBlackList = Array.isArray(context.options) && context.options.length != 0;

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
                if (hasBlackList) {
                    options.forEach(option => {
                        if(allSource.toLowerCase().includes(option)) {
                            const message = `You should not use "${option}" and it is not case sensitive.`;
                            context.report({node: node, message: message});
                        }
                    });
                }
            },
            Literal(node) {
                if (hasBlackList) {
                    options.forEach(option => {
                        if(isSensitiveLiteral(node, option)) {
                            const message = `You should not use "${option}" and it is not case sensitive.`;
                            context.report({node: node, message: message});
                        }
                    });
                }
            }
        };
    }
};
