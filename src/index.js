import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


import './blocks/second-block'; // Add this line
import './blocks/third-block'; // Add this line
import './blocks/fourth-block'; // Add this line
import './blocks/fifth-block'; // Add this line
import './blocks/sixth-block'; // Add this line
import './blocks/seventh-block'; // Add this line

import './blocks/eight-block.js'; // Add this line

import './style.scss';

import edit from "./edit";
import save from './save';

registerBlockType( 'create-block/alecaddd-giveaway', {
	title: __( 'Alecaddd Giveaway', 'alecaddd-giveaway' ),
	description: __( 'Giveaway and Reward Block.', 'alecaddd-giveaway' ),
	category: 'common',
	icon: 'awards',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	edit,
	save,
} );



/**
 * Child blocks
 */
import { metadata, name, settings } from './blocks/social-row';

registerBlockType({ name, ...metadata }, settings);
