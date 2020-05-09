import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'
figlet.parseFont( 'Standard', standard )
figlet.text( 'hey!', { font: 'Standard', }, ( err, data ) => { document.getElementById( 'main' ).innerHTML = data } )