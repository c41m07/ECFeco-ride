import {headerManager} from './manager/headermanager.js';
import {animator} from './manager/animator.js';
import {searchManager} from './manager/searchmanager.js';
import {contactManager} from './manager/contactmanager.js';
// import { authManager } from './manager/authmanager.js'; // Déjà importé dans headermanager.js

const headerM = new headerManager();
const animM = new animator();
const searchM = new searchManager();
const contactM = new contactManager();
// const authM = new authManager(); // Déjà importé dans headermanager.js
