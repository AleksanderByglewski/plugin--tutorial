/*Użycie composite */
import { registerBlockType } from '@wordpress/blocks';
import { RichText,  InspectorControls, InnerBlocks  } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

const MY_TEMPLATE = [
	["core/button", { placeholder: "Call to Action" }],
];


registerBlockType( 'u24web/step-six', {
    title: '6. Step Six',
    category: 'common',
    attributes: {
        textContent: {
            type: 'string',
            value: ''
        }
    },
    edit: function(props) {
        return (
            <div>
                <h2>Custom Block</h2>
                <InnerBlocks
                    template={MY_TEMPLATE}
                    allowedBlocks={["core/button", 'u24web/step-one' , 'u24web/step-two']}
                />
            </div>
        );
    },
    save: function(props) {
        return (
            <div>
            <h2>Custom Block</h2>
            <InnerBlocks.Content />
             </div>

        );
    },
} );
