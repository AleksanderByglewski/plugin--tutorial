/*Dynamiczny content za pomocą atrybutów */
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType( 'u24web/step-three', {
    title: '3. Step Three',
    icon: 'smiley',
    category: 'common',
    attributes: {
        textContent: {
            type: 'string',
            value: ''
        }
    },
    edit: function(props) {
        return (
            <RichText
                tagName="p"
                placeholder="Enter text here"
                value={props.attributes.textContent}
                onChange={ (value) => props.setAttributes({ textContent: value }) }
            />
        );
    },
    save: function(props) {
        return (
            <RichText.Content
                tagName="p"
                value={props.attributes.textContent}
            />
        );
    },
} );
