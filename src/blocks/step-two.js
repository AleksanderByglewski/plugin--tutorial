/*Dynamiczny content za pomocą atrybutów */
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/*Dynamiczny content */

registerBlockType( 'u24web/step-two', {
    title: '2. Dynamiczny content',
    icon: 'smiley',
    category: 'common',
    attributes: {
        myCustomString: {
            type:'string',
            value:'Dzień i godzina'}
     
    },
    edit: function(props) {
        return (
            <div>
                  <InspectorControls>
                    <TextControl
                        label="Koncowy czas"
                        placeholder='2023-12-31'
                        value={props.attributes.myCustomString}
                        onChange={(value) =>
                        props.setAttributes({ myCustomString: value })
                        }
                    />
                </InspectorControls>
                <p>Gotów aby zacząć dołącz do operacji furia już {props.attributes.myCustomString} </p>
            </div>
        );
    },
    save: function(props) {
        return (
            <div>
                <p>Gotów aby zacząć dołącz do operacji furia już {props.attributes.myCustomString}</p>
            </div>
        );
    },
} );