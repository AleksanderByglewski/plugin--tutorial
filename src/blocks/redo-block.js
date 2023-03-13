/*Rejestracja statycznego contentu */
import { registerBlockType } from '@wordpress/blocks';

function conditionalCheck(firstName, lastName){
    {if (firstName=="Alex") 
        {
            return "The conditional doesn't fail";
        }
    else{
        return "The conditional fails";
    }
    }

}
let author={
    firstName: 'Alex',
    lastName: 'Byglewski'
}

registerBlockType( 'u24web/redo', {
    title: '1. Redo',
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
                <p>
                    {conditionalCheck(author.firstName, author.lastName)}
                </p>
            </div>
        );
    },
    save: function(props) {
        return (
            <div>
                        {conditionalCheck(author.firstName, author.lastName)}
            </div>
        );
    },
} );