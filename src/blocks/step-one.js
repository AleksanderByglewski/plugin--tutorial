/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';



registerBlockType( 'u24web/step-one', {
    title: '1. Statyczny content',
    icon: 'smiley',
    category: 'common',
    edit: function() {
        return (
            <div>
                <p>Gotów aby zacząć dołącz do operacji furia już dziś</p>
            </div>
        );
    },
    save: function() {
        return (
            <div>
                <p>Gotów aby zacząć dołącz do operacji furia już dziś</p>
            </div>
        );
    },
} );