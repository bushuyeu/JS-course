const day = 'mon';

switch (day) {
    case 'mon': // day === 'mon'
        console.log('run');
        break;
    case 'tue':
        console.log('legs');
        break;
    case 'wed':
        console.log('chest');
        break;
    case 'thu':
        console.log('back');
        break;
    case 'fri':
        console.log('swim');
        break;
    case 'sat':
    case 'sun':
        console.log('day off');
        break;
    default:
        console.log('not a valid day');
} 
