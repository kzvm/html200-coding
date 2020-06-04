const Q = 'Q';
const W = 'W';
const D = 'D';
const B = 'B';


function typeAction(action) {
    let input = prompt('Type Q, W, D or B');

    //while (input !== 'Q' || input !== 'q') {
        if (input === 'Q' || input === 'q') {
            return 'Quit Page';

        } else if (input === 'W' || input === 'w') {
            let input = prompt('Withdrawal Amount');
            return 'Withdrawal';
        } else if (input === 'D' || input === 'd') {
            let input = prompt('Deposit Amount');
            return 'Deposit';
        } else if (input === 'B' || input === 'b') {
            return 'Balance';
        }
    //}
}


//function typeAction(action) {
//    let input = prompt('Type Q, W, D or B');

//    switch (action) {
//        case 'Q': {
//            return 'Quit Page';
//            break;
//        }
        
//        case 'W': {
//        let input = prompt('Withdrawal Amount');
//            return 'Withdrawal';
//            break;
//        } 
            
//        case 'D': {
//        let input = prompt('Deposit Amount');
//            return 'Deposit';
//            break;
//        } 
            
//        case 'B': {
//            return 'Balance';
//            break;
//        }

//    }






