/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';
import { RichText,  InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

let message='alert("Hello world")';

registerBlockType( 'u24web/redo-two', {
    title: '2. Redo in different style',
    icon: 'smiley',
    category: 'common',
    attributes: {
        textContent: {
            type: 'string',
            value: ''
        },

    },


    edit: function(props) {
        return (
            <div>
                Hello
                <script dangerouslySetInnerHTML={{__html: message}}>
           
                </script>
            </div>
        );
    },
    save: function(props) {
        return (
            <div>
                Hello
            <script dangerouslySetInnerHTML={{__html: message}}>
       
            </script>
        </div>
        );
    },
} );