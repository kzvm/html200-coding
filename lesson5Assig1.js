const Q = 'Q';
const W = 'W';
const D = 'D';
const B = 'B';


let total = 0;

function typeAction(action) {
    let input = prompt('Type Q, W, D or B');

    while (input !== 'Q' || input !== 'q') {
        
        if (input === 'Q' || input === 'q') {
            return 'Quit Page';

        } else if (input === 'W' || input === 'w') {
            let input = prompt('Withdrawal Amount');
            total = total - Number(input);
            alert('New Withdrawal Amount ' + total);
            

        } else if (input === 'D' || input === 'd') {
            let input = prompt('Deposit Amount');
            total = total + Number(input);
            alert('New Deposit Amount ' + total);
           

        } else if (input === 'B' || input === 'b') {
            alert('New Balance total ' + total);

        }

        input = prompt('Type Q, W, D or B');
    }
}
