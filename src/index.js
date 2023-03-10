import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


import './blocks/step-one';
import './blocks/step-two';
import './blocks/step-three';
import './blocks/step-four';
import './blocks/step-five';
import './blocks/step-six';
// import './blocks/step-four';

// import './blocks/second-block'; // Add this line
// import './blocks/third-block'; // Add this line
// import './blocks/fourth-block'; // Add this line
// import './blocks/fifth-block'; // Add this line
// import './blocks/sixth-block'; // Add this line
// import './blocks/seventh-block'; // Add this line
// import './blocks/eight-block.js'; // Add this line
// import './blocks/working-line-block'; // Add this line

import './style.scss';
// import edit from "./edit";
// import save from './save';




/**
 * Child blocks
 */
import { metadata, name, settings } from './blocks/social-row';
registerBlockType({ name, ...metadata }, settings);
