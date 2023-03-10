/*Użycie composite */
import { registerBlockType } from '@wordpress/blocks';
import { RichText,  InspectorControls, InnerBlocks  } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';



registerBlockType( 'u24web/step-five', {
    title: '5. Step Five',
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
                <InnerBlocks />
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
