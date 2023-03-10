/*Dynamiczny content za pomocą atrybutów i za pomocą Gutenberga */
import { registerBlockType } from '@wordpress/blocks';
import { RichText,  InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

registerBlockType( 'u24web/step-four', {
    title: '4. Step Four',
   
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
                <InspectorControls>
                <TextControl
                    label="Koncowy czas"
                    placeholder='2023-12-31'
                    value={props.attributes.textContent}
                    onChange={(value) =>
                    props.setAttributes({ textContent: value })
                    }
                />
            </InspectorControls>
            <RichText
                tagName="p"
                placeholder="Enter text here"
                value={props.attributes.textContent}
                onChange={ (value) => props.setAttributes({ textContent: value }) }
            /></div>
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
